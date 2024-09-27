"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Tooltip, TooltipProvider } from "@repo/ui/components/tooltip";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TooltipProvider>
        <SessionProvider>{children}</SessionProvider>
      </TooltipProvider>
    </>
  );
};

export default Providers;
