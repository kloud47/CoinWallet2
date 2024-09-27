"use client";
import { Card } from "@repo/ui/card";
import {
  Aperture,
  BadgeInfo,
  Copy,
  Settings2,
  User2,
  Wallet2,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { authOptions } from "~/app/api/auth/[...nextauth]/auth";
import QR from "../../public/QRcode.png";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();
  const username = session?.data?.user.name;
  const phoneNo = session?.data?.user.phone;
  console.log(session.data?.user);
  const imageUrl = "";
  const [pop, setPop] = useState(false);

  const handleCopy = async () => {
    navigator.clipboard.writeText(String(phoneNo));
    setPop(true);
    setTimeout(() => {
      setPop(false);
    }, 1000);
  };

  return (
    <Card
      title="Profile"
      classname="bg-transparent border-none rounded-xl"
      titleCSS="text-3xl font-thin bgTitle p-2 rounded-xl mb-4 !text-[#1699ba]"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2">
        <Card classname="border-none bg-muted/20 rounded-xl">
          <div className="flex flex-col items-center w-full">
            {!imageUrl && (
              <div className="bg-muted-foreground flex items-center justify-center text-[80px] border-[20px] border-accent/60 rounded-full h-[300px] w-[300px]">
                {username?.substring(0, 2)}
              </div>
            )}
            {imageUrl && (
              <img
                src={String(imageUrl)}
                alt=""
                className="border-[5px] border-[#fff] rounded-full h-[200px] w-[200px]"
              />
            )}
            <button className="bg-white h-[35px] relative bottom-[15px] w-[35px] text-[#000] rounded-full p-1 border-2 border-[#1699ba] hover:bg-slate-300">
              <Aperture />
            </button>

            <div className="relative flex flex-col items-center font-thin text-2xl p-4">
              <h1 className="text-foreground">{username}</h1>
              <h2 className="flex items-center text-[#1699ba] ">
                CID - @{phoneNo}
                <button onClick={handleCopy}>
                  <Copy />
                </button>
                {pop && (
                  <div className="absolute right-0 translate-x-20 mx-5 bg-teal-900 text-teal-300 p-1 rounded-md text-thin text-sm">
                    Copied
                  </div>
                )}
              </h2>
            </div>
          </div>
        </Card>
        <Card classname="rounded-xl bg-muted-foreground border-none">
          <div className="flex flex-col items-center w-full p-5">
            <img
              src={QR.src}
              alt="QRcode"
              className="rounded-2xl h-[300px] w-[300px]"
            />
            <div className="flex gap-x-2 mt-5">
              <button className="text-slate-600 hover:bg-foreground/40 duration-150 bg-foreground rounded-full p-2 mt-3">
                Share QR code
              </button>
              <button className="text-slate-600 hover:bg-foreground/40 duration-150 bg-foreground rounded-full p-2 mt-3">
                Download QR
              </button>
            </div>
          </div>
        </Card>
        <Card classname="border-none rounded-xl">
          <Card classname="bg-muted-foreground w-full rounded-xl hover:bg-foreground/40 mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <BadgeInfo />
              <h1>Help & Support</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
          <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <Settings2 />
              <h1 className="text-center">UPI & Payments Settings</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
          <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <Wallet2 />
              <h1>Wallet Options</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
          <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <User2 />
              <h1>Profile Settings</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
        </Card>
        <Card classname="col-span-3 mt-4 rounded-xl flex items-center justify-center text-muted-foreground bg-background py-5">
          {" "}
          Terms & Conditions, Privacy policy, Grievance, Redressal Mechanism,
          <a href="#" className="text-[#5ea0f0]">
            See all policies
          </a>
        </Card>
      </div>
    </Card>
  );
};

export default Profile;
