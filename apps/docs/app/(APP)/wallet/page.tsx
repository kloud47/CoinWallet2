import { Card } from "@repo/ui/card";
import React from "react";
import { BalanceCard } from "../_balance/balance-card";
import AllOnRampTransactions from "./_components/All-onRampTransactions";
import AddToWalletForm from "~/app/components/forms/add-to-wallet-form";
import WalletActivity from "./_components/wallet-status";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2 w-full p-3 sticky top-[64px]">
      <Card
        title="Wallet"
        titleCSS="text-3xl font-thin !text-[#D19A02]"
        classname="border-none"
      >
        <AddToWalletForm />
        <WalletActivity />
      </Card>
      <Card classname="border-none">
        <BalanceCard />
        <AllOnRampTransactions />
      </Card>
    </div>
  );
};

export default page;
