"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Tooltip, TooltipProvider } from "@repo/ui/components/tooltip";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RecoilRoot>
        <TooltipProvider>
          <SessionProvider>{children}</SessionProvider>
        </TooltipProvider>
      </RecoilRoot>
    </>
  );
};

export default Providers;
