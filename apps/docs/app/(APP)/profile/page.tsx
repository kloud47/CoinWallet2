"use client";
import { Card } from "@repo/ui/card";
import {
  Aperture,
  ArrowLeft,
  BadgeInfo,
  Copy,
  Settings,
  Settings2,
  User2,
  Wallet2,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { authOptions } from "~/app/api/auth/[...nextauth]/auth";
import QR from "../../public/QRcode.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/dialog";
import UPISettingForm from "~/app/components/forms/upi-setting-form";
import ProfileDialog from "./_components/profile-dialog";
import { getProfile } from "~/app/store/hooks/context";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { profileAtom } from "~/app/store/atoms/states";
import Image from "next/image";

type Props = {};

const Profile = (props: Props) => {
  const session = useSession();
  const username = session?.data?.user.name;
  const phoneNo = session?.data?.user.phone;
  // console.log(session.data?.user);
  const [pop, setPop] = useState(false);

  const imageUrl = useRecoilValue(profileAtom);
  console.log("image URL)) =>  ", imageUrl);

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
      titleCSS="text-3xl font-thin !text-[#1699ba]"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
        <Card classname="border-none bg-muted/20 rounded-xl">
          <Link href={"/dashboard"} className="absolute">
            <Button
              variant={"outline"}
              className={"rounded-xl bg-[#000] group border-none"}
            >
              <ArrowLeft
                size={40}
                color="white"
                className="group-hover:-translate-x-2 duration-300 ease-out"
              />
            </Button>
          </Link>
          <div className="flex flex-col items-center w-full">
            {!imageUrl && (
              <div className="bg-muted-foreground flex items-center justify-center text-[80px] border-[20px] border-accent/60 rounded-full h-[300px] w-[300px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]">
                {username?.substring(0, 2)}
              </div>
            )}
            {imageUrl && (
              <img
                src={String(imageUrl)}
                alt="Profile Image"
                className="border-[20px] border-accent/60 rounded-full h-[300px] w-[300px]"
              />
            )}
            <Dialog>
              <DialogTrigger>
                <div className="bg-white h-[35px] hover:rotate-90 duration-200 relative bottom-[15px] w-[35px] text-[#000] rounded-full p-1 border-2 border-[#1699ba] hover:bg-slate-300">
                  <Aperture />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Profile Image</DialogTitle>
                <DialogDescription>
                  Change or update profile pic here.
                </DialogDescription>
                <ProfileDialog user={username} imageUrl={imageUrl} />
              </DialogContent>
            </Dialog>

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
          <Card classname="bg-muted-foreground w-full rounded-xl hover:bg-foreground/40 cursor-pointer mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <BadgeInfo />
              <h1>Help & Support</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
          <Dialog>
            <DialogTrigger className="w-full">
              <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 cursor-pointer mb-1">
                <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                  <Settings2 />
                  <h1 className="text-center">UPI & Payments Settings</h1>
                  <p className="text-xs text-foreground text-center">
                    Customer Support, Your Queries, Frequently Asked Questions
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-x-2">
                  <Settings /> UPI Setting
                </DialogTitle>
              </DialogHeader>
              <DialogDescription>
                Create or update your pin here.
              </DialogDescription>
              <UPISettingForm />
            </DialogContent>
          </Dialog>
          <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 cursor-pointer mb-1">
            <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
              <Wallet2 />
              <h1>Wallet Options</h1>
              <p className="text-xs text-foreground text-center">
                Customer Support, Your Queries, Frequently Asked Questions
              </p>
            </div>
          </Card>
          <Dialog>
            <DialogTrigger className="w-full">
              <Card classname="bg-muted-foreground w-full rounded-xl z-10 hover:bg-foreground/40 cursor-pointer mb-1">
                <div className="flex flex-col w-full border-white gap-2 items-center pb-3 px-4 text-[#000]">
                  <User2 />
                  <h1>Profile Settings</h1>
                  <p className="text-xs text-foreground text-center">
                    Customer Support, Your Queries, Frequently Asked Questions
                  </p>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="flex items-center gap-x-2">
                <Settings /> Profile Setting
              </DialogTitle>
              <DialogDescription>Update profile information.</DialogDescription>
            </DialogContent>
          </Dialog>
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
