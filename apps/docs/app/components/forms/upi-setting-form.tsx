"use client";
import { Card } from "@repo/ui/card";
import React, { useRef, useState } from "react";
import Loading from "../global/loading";
import { useRouter } from "next/navigation";
import { toast } from "@repo/ui/hooks/use-toast";
import { UpsertUser } from "~/app/lib/actions/queries";

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
  pin: string;
  bank: string;
};

const UPISettingForm = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const router = useRouter();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [pin, setPin] = useState([0, 0, 0, 0]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(data);
    const upiPin = pin.toString().replaceAll(",", "");
    console.log(upiPin, " ", redirectUrl);
    const response = await UpsertUser(String(redirectUrl), upiPin);
    toast({
      title: "Changed Pin",
      description: "Changed pin of your UPI account",
    });
  };

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.focus();
    }
  };

  const keyPressHandle = (e: any, index: number) => {
    if (inputRefs.current[index] && e.key !== "Backspace") {
      setPin((prev) => {
        const newPin = [...prev];
        newPin[index] = Number(inputRefs.current[index]?.value);
        return newPin;
      });
      if (inputRefs.current[index]) inputRefs.current[index + 1]?.focus();
    }
  };

  const OnBackSpace = (e: any, index: number) => {
    if (e.key === "Backspace") {
      setPin((prev) => {
        const newPin = [...prev];
        newPin[index] = 0;
        return newPin;
      });
      if (inputRefs.current[index]) inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Card classname="bg-background rounded-xl border-none">
      <form
        className="p-4 rounded-xl bg-card-foreground/20"
        onSubmit={(e) => onSubmit(e)}
      >
        <label htmlFor="bank" className="text-muted-foreground">
          Enter Pin
        </label>
        <div className="flex justify-center my-4 bg-foreground/50 rounded-3xl py-2 mx-4 shadow-md">
          <div className="flex gap-x-3">
            {[...Array(4)].map((_, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                onClick={() => focusInput(i)}
                onKeyUp={(e: any) => keyPressHandle(e, i)}
                onKeyDown={(e: any) => OnBackSpace(e, i)}
                className="w-[30px] text-background border-b-2 bg-transparent text-center placeholder:text-background/40"
                type="text"
                maxLength={1}
                placeholder={"0"}
              />
            ))}
          </div>
        </div>
        <label htmlFor="bank" className="text-muted-foreground">
          Choose Bank
        </label>
        <select
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
          className="button w-2/3 my-5 flex justify-center mx-auto"
        >
          <span className="flex items-center">Save</span>
        </button>
      </form>
    </Card>
  );
};

export default UPISettingForm;
