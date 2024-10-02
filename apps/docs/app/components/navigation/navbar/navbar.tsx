"use client";
import { Button } from "@repo/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from "./search-bar";
import Notification from "./notification";
import { Github, LifeBuoy, User, UserPlus, Wallet } from "lucide-react";
import { useEffect } from "react";
import NetworkStatus from "../../global/NetworkStatus";
// import { useState } from "react";

export const AppBar = () => {
  const { data: session, status } = useSession();
  // const [open, setOpen] = useState(false);
  const username = session?.user?.name || "";
  const avatar = session?.user?.profile_url || "none";
  const router = useRouter();
  const pathname = usePathname();

  const handleProfile = () => {
    return router.push("/profile");
  };

  const onSignIn = () => {
    signIn();
  };

  const onSignOut = () => {
    signOut();
  };

  return (
    <>
      <ul className="flex  justify-between w-screen px-3 h-[70px] fixed z-50 items-center bg-background/90">
        <li className="text-3xl font-bold flex flex-col justify-center text-white">
          <Link href={"/"}>
            <span className="text-[#d19a02] font-black text-4xl">Co</span>
            inWallet
          </Link>
        </li>
        {username && pathname !== "/" && <SearchBar />}
        <li className="bg-muted h-[70%] hover:translate-y-2 duration-700 font-thin text-lg rounded-[90px] flex items-center justify-end m-2 px-5 shadow-xl">
          {username && <Notification />}
          {username?.split(" ").at(0)}
          {!username && <div className="italic">Welcome</div>}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              {username && (
                <div className="bg-[#000] w-[40px] h-[40px] rounded-full ml-4 hover:cursor-pointer">
                  {/* {avatar && username && (
                <img
                  src={String(avatar)}
                  alt="image"
                  className="rounded-full border h-full w-full hover:scale-110 duration-200 border-[#000]"
                />
              )} */}
                  {avatar && username && (
                    <div className="bg-muted-foreground flex items-center justify-center text-lg p-1 h-full w-full border-4 text-background font-medium border-muted/70 shadow-md rounded-full">
                      {username?.substring(0, 2)}
                    </div>
                  )}
                </div>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background rounded-lg mr-2 p-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfile}>
                <User size={20} className="mr-2" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Wallet size={20} className="mr-2" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus size={20} className="mr-2" />
                Invite users
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  router.push("https://github.com/kloud47/CoinWallet2")
                }
              >
                <Github size={20} className="mr-2" /> Github
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy size={20} className="mr-2" /> Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                  onClick={username ? onSignIn : onSignOut}
                  variant={"outline"}
                  className={"w-full boxShadow"}
                >
                  {username ? "Logout" : "Signup"}
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NetworkStatus />
        </li>
      </ul>
    </>
  );
};
