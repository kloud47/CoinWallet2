"use client";
import { Card } from "@repo/ui/card";
import React, { useState } from "react";
import { Input } from "@repo/ui/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Select } from "../global/select";

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
  const { register, handleSubmit, formState } = useForm<FormFields>();
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <Card
      classname="bg-card rounded-xl"
      title="Add Money"
      titleCSS="text-2xl font-bold text-center"
    >
      <form className="border p-2 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center my-4 bg-foreground/50 rounded-3xl py-2 mx-4 shadow-md">
          <label htmlFor="inputAmt" className="text-4xl text-[#4a3b61]">
            &#8377;
          </label>
          <input
            name="inputAmt"
            type="text"
            placeholder="0"
            className="text-3xl text-[#4a3b61] outline-none placeholder:text-[#7d767d] text-center bg-transparent"
            // style={{ width: `${formState..length + 1}ch` }}
          />
        </div>
        <label htmlFor="bank">Choose Bank</label>
        <select
          {...register("bank", { required: true })}
          onChange={(e) =>
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === e.target.value)
                ?.redirectUrl
            )
          }
          className=" bg-accent/40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {SUPPORTED_BANKS.map((option) => (
            <option value={option.name}>{option.redirectUrl}</option>
          ))}
        </select>
        <button type="submit" className="button w-2/3 my-5 mx-auto">
          Add
        </button>
      </form>
    </Card>
  );
};

export default AddToWalletForm;
