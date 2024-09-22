import { Card } from "@repo/ui/card";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { useForm } from "react-hook-form";

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

type Props = {};

const AddToWalletForm = (props: Props) => {
  const router = useRouter();

  return (
    <Card classname="bg-[#231b28]" title="Add Money">
      <form>
        <input type="text" />
        <input type="text" />
      </form>
    </Card>
  );
};

export default AddToWalletForm;
