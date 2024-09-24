import { Card } from "@repo/ui/card";
import React from "react";
import { BalanceCard } from "../_balance/balance-card";
import AllOnRampTransactions from "./_components/All-onRampTransactions";
import AddToWalletForm from "~/app/components/forms/add-to-wallet-form";
import WalletStatus from "./_components/wallet-status";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2 w-full p-3">
      <Card
        title="Wallet"
        titleCSS="text-3xl font-thin bgTitle p-2 rounded-xl mb-4 text-btnBlue"
        classname="border-none"
      >
        <AddToWalletForm />
        <WalletStatus />
      </Card>
      <Card classname="border-none">
        <BalanceCard />
        <AllOnRampTransactions />
      </Card>
    </div>
  );
};

export default page;
