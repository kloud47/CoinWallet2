"use client";
import { Button } from "@repo/ui/components/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from "./search-bar";
import Notification from "./notification";
// import { useState } from "react";

export const AppBar = () => {
  const { data: session, status } = useSession();
  // const [open, setOpen] = useState(false);
  const username = session?.user?.name || "";
  const avatar = session?.user?.image || "none";
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
      <ul className="flex  justify-between w-screen px-3 h-[70px] fixed z-50 items-center">
        <li className="text-3xl font-bold flex flex-col justify-center text-white">
          <Link href={"/"}>
            <span className="text-[#d19a02] font-black text-4xl">Co</span>
            inWallet
          </Link>
        </li>
        {username && pathname !== "/" && <SearchBar />}
        <li className="bg-muted h-[70%] hover:translate-y-2 duration-700 font-thin text-lg rounded-[90px] flex items-center justify-end m-2 pl-5 shadow-xl">
          {username && <Notification />}
          {username?.split(" ").at(0)}
          {!username && <div className="italic">Welcome</div>}
          {username && (
            <div
              className="bg-[#000] w-[40px] h-[40px] rounded-full ml-4 hover:cursor-pointer"
              onClick={handleProfile}
            >
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
          <div className="flex justify-center">
            <Button
              onClick={username ? onSignIn : onSignOut}
              className={"m-2 rounded-[50px] boxShadow"}
            >
              {username ? "Logout" : "Signup"}
            </Button>
          </div>
        </li>
      </ul>
    </>
  );
};
