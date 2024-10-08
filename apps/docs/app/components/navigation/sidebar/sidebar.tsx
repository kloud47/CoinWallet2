import {
  WalletCards,
  UserRound,
  ArrowLeftRight,
  BadgeIndianRupee,
  QrCode,
  LayoutDashboard,
} from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";
import { Button } from "@repo/ui/components/button";

type Props = {};

const Sidebar = async (props: Props) => {
  return (
    <div className="z-20 border-2 border-muted/50 flex flex-col bg-black rounded-full translate-x-2 shadow-xl py-1 hover:translate-x-3 hover:scale-105 duration-200">
      <SidebarItem
        href={"/dashboard"}
        icon={<LayoutDashboard />}
        title="Dashboard"
      />
      <SidebarItem
        href={"/transactions"}
        icon={<BadgeIndianRupee />}
        title="Transactions"
      />
      <SidebarItem
        href={"/transfer"}
        icon={<ArrowLeftRight />}
        title="P2P Transfer"
      />
      <SidebarItem href={"/wallet"} icon={<WalletCards />} title="Wallet" />
      <Button
        className={
          " rounded-full h-[50px] w-[50px] mx-auto hover:rotate-180 hover:scale-105 transition-all duration-500"
        }
      >
        <div className=" duration-300 rounded-xl">
          <QrCode />
        </div>
      </Button>
    </div>
  );
};

export default Sidebar;
