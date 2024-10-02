import { Card } from "@repo/ui/card";
import React from "react";
import { BalanceCard } from "../_balance/balance-card";
import P2pTransactions from "./_components/p2p-all-transactions";

type Props = {};

const page = async (props: Props) => {
  return (
    <Card
      title="Send Money"
      classname="bg-transparent border-none rounded-xl"
      titleCSS="text-3xl font-thin bgTitle p-2 rounded-xl mb-4 !text-[#1699ba]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Card>ok</Card>
        <Card classname="border-none flex flex-col">
          <BalanceCard />
          <P2pTransactions />
        </Card>
      </div>
    </Card>
  );
};

export default page;
