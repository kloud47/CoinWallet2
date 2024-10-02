import { Card } from "@repo/ui/card";
import React from "react";

import Contacts from "~/app/components/contacts";
import Recharge from "./_components/Recharge";
import { BalanceCard } from "../_balance/balance-card";
import {
  ArrowLeftRight,
  BadgeIndianRupee,
  Plus,
  Users,
  WalletCards,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="grid lg:grid-cols-[60%_40%] grid-cols-1 gap-x-2 w-full p-3">
      <Card
        title="Dashboard"
        classname="bg-transparent border-none rounded-xl"
        titleCSS="text-3xl font-thin bgTitle p-2 rounded-xl mb-4 !text-[#1699ba]"
      >
        <BalanceCard />
        <Card classname="bg-background" title="Recharge">
          <Recharge />
        </Card>
        <Card>
          <div className="grid grid-cols-3 w-full gap-1">
            <Link href={"/loan"} className="bg-muted-foreground/80 flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 p-2">
                <BadgeIndianRupee size={50} color="#442F6E" />
                <div>Loan</div>
              </div>
              <div className="flex flex-col justify-center items-end text-md font-[300] text-black ">
                <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div>
              </div>
            </Link>
            <div className="bg-muted-foreground/80 flex">
              <Link
                href={"/split"}
                className="flex flex-col items-center gap-x-2 text-black mr-4 p-2"
              >
                <Users size={50} color="#442F6E" />
                <div>Split</div>
              </Link>
              <Link
                href={"/split/create-split"}
                className="cursor-pointer group h-[80%] w-full m-2 rounded-xl flex justify-center items-center flex-col"
              >
                <Plus
                  size={40}
                  color="white"
                  className="group-hover:scale-125 duration-200"
                />
                <span className="text-lg text-black">Create</span>
              </Link>
            </div>
            <Link href={"/wallet"} className="bg-muted-foreground/80 flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 p-2">
                <WalletCards color="#442F6E" size={40} className="mx-auto" />
                <span>Wallet</span>
              </div>
              <div className="flexflex-col justify-center items-end text-md font-[300] text-black ">
                {/* <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div> */}
              </div>
            </Link>
            <div className="bg-muted-foreground/80 flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 p-2">
                <ArrowLeftRight color="#442F6E" size={40} className="mx-auto" />
                <span>Transfer</span>
              </div>
              <div className="flexflex-col justify-center items-end text-md font-[300] text-black ">
                {/* <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div> */}
              </div>
            </div>
            <div className="bg-muted-foreground/80 flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 p-2">
                <BadgeIndianRupee
                  color="#442F6E"
                  size={40}
                  className="mx-auto"
                />
                <span>Transaction</span>
              </div>
              <div className="flexflex-col justify-center items-end text-md font-[300] text-black ">
                {/* <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div> */}
              </div>
            </div>
            <div className="bg-muted-foreground/80 flex">
              <div className="flex flex-col items-center gap-x-2 text-black mr-4 p-2">
                <WalletCards color="#442F6E" size={40} className="mx-auto" />
                <span>Wallet</span>
              </div>
              <div className="flexflex-col justify-center items-end text-md font-[300] text-black ">
                {/* <div>Pending - 4</div>
                <div className="">{`due date - 2days`}</div> */}
              </div>
            </div>
          </div>
        </Card>
      </Card>
      <Card classname="bg-accent/50 rounded-xl">
        <div className="w-full">
          <Contacts />
        </div>
      </Card>
    </div>
  );
};

export default page;
