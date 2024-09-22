import { Card } from "@repo/ui/card";
import React from "react";

import Contacts from "~/app/components/contacts";
import Recharge from "./_components/Recharge";
import { BalanceCard } from "../_balance/balance-card";
import { BadgeIndianRupee, Plus, Users, WalletCards } from "lucide-react";
import Link from "next/link";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2 w-full p-3">
      <Card
        title="Dashboard"
        classname="bg-card/50 rounded-xl"
        titleCSS="text-2xl font-bold"
      >
        <Card>
          <div className="grid grid-cols-3 w-full gap-x-1">
            <div className="bg-muted-foreground flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 bg-muted/50 p-2">
                <BadgeIndianRupee size={50} color="#442F6E" />
                <div>Loan</div>
              </div>
              <div className="flex flex-col justify-center items-end text-md font-[300] text-black ">
                <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div>
              </div>
            </div>
            <div className="bg-muted-foreground flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 bg-muted/50 p-2">
                <Users size={50} color="#442F6E" />
                <div>Split</div>
              </div>
              <Link
                href={"/split/create-split"}
                className="cursor-pointer group border-2 border-dashed border-blue-700 h-[80%] w-full m-2 rounded-xl flex justify-center items-center flex-col bg-foreground/50"
              >
                <Plus
                  size={40}
                  color="blue"
                  className="group-hover:scale-125 duration-200"
                />
                <span className="text-lg">Create</span>
              </Link>
            </div>
            <div className="bg-muted-foreground flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 bg-muted/50 p-2">
                <WalletCards color="#442F6E" size={40} className="mx-auto" />
                <span>Wallet</span>
              </div>
              <div className="flex flex-col justify-center items-end text-md font-[300] text-black ">
                {/* <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div> */}
              </div>
            </div>
          </div>
        </Card>
        <BalanceCard />
        <Card classname="bg-background" title="Recharge">
          <Recharge />
        </Card>
      </Card>
      <Card classname="bg-card rounded-xl">
        <div className="w-full">
          <Contacts />
        </div>
      </Card>
    </div>
  );
};

export default page;
