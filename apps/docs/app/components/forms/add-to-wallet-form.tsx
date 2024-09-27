"use client";
import { Card } from "@repo/ui/card";
import React, { useState } from "react";
import { Input } from "@repo/ui/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select } from "../global/select";
import { createOnRampTransaction } from "~/app/lib/actions/queries";
import Loading from "../global/loading";
import { IndianRupeeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

type FormFields = {
  amount: string;
  bank: string;
};

const AddToWalletForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormFields>();
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const isLoading = formState.isLoading;
  const router = useRouter();
  const [amt, setAmt] = useState("");

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // console.log(data);
    const response = await createOnRampTransaction(data.bank, data.amount);
    reset();
    router.refresh();
  };

  return (
    <Card
      classname="bg-background rounded-xl w-[80%]"
      title="Add Money"
      titleCSS="text-2xl font-bold text-center text-white"
    >
      <form
        className="border p-4 rounded-xl bg-card-foreground/20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center my-4 bg-foreground/50 rounded-3xl py-2 mx-4 shadow-md">
          <label htmlFor="amount" className="text-4xl text-[#3b4861]">
            &#8377;
          </label>
          <input
            {...register("amount", { required: true })}
            disabled={isLoading}
            type="text"
            placeholder="0"
            onChange={(e) => setAmt(e.target.value)}
            className="text-3xl text-[#3b4861] outline-none placeholder:text-[#7d767d] text-center bg-transparent"
            style={{ width: `${amt.length + 1}ch` }}
          />
        </div>
        <label htmlFor="bank" className="text-muted-foreground">
          Choose Bank
        </label>
        <select
          {...register("bank", { required: true })}
          disabled={isLoading}
          onChange={(e) =>
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === e.target.value)
                ?.redirectUrl
            )
          }
          className=" bg-background/50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {SUPPORTED_BANKS.map((option, i) => (
            <option key={i} value={option.name}>
              {option.redirectUrl}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isLoading}
          className="button w-2/3 my-5 flex justify-center mx-auto"
        >
          {isLoading ? (
            <Loading />
          ) : (
            <span className="flex items-center">
              Add <IndianRupeeIcon />
            </span>
          )}
        </button>
      </form>
    </Card>
  );
};

export default AddToWalletForm;
