import { Card } from "@repo/ui/card";
import React from "react";
import { BalanceCard } from "../_balance/balance-card";
import P2pTransactions from "./_components/p2p-all-transactions";
import ChatComp from "~/app/components/global/Chat-component";

type Props = {};

const page = async (props: Props) => {
  return (
    <Card
      title="Send Money"
      classname="bg-transparent border-none rounded-xl"
      titleCSS="text-3xl font-thin !text-[#D19A02]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Card classname="border-none bg-background rounded-lg rounded-l-2xl h-[80vh]">
          <ChatComp />
        </Card>
        <Card classname="border-none flex flex-col">
          <ul className="grid grid-cols-2 w-full gap-x-1 text-black">
            <Card classname="border-none bg-muted-foreground rounded-xl">
              Pay to Number
            </Card>
            <Card classname="border-none bg-muted-foreground rounded-xl">Pay to Card</Card>
          </ul>
          <BalanceCard />
          <P2pTransactions />
        </Card>
      </div>
    </Card>
  );
};

export default page;
