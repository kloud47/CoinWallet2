"use client";
import Link from "next/link";
import { WavyBackground } from "./components/ui/wavy-background";
import { Button } from "@repo/ui/components/button";
import { ExternalLinkIcon, GithubIcon, Instagram, Twitter } from "lucide-react";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import { useSession } from "next-auth/react";

export default function Page() {
  const session = useSession();
  const words = [
    {
      text: "Your",
      className: "text-6xl font-bold text-[#f6cafc]",
    },
    {
      text: "trusted",
      className: "text-6xl font-bold text-[#f6cafc]",
    },
    {
      text: "Wallet",
      className: "font-black text-6xl text-[#e2d2a5]",
    },
  ];

  return (
    <div className="h-screen w-screen">
      <div className="absolute z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <WavyBackground className="flex flex-col justify-center">
        <div className="mx-auto">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="flex items-center justify-center space-x-8">
          <Link
            href={`${session.data?.user ? "/dashboard" : "/signup"}`}
            className="scale-110 w-[200px] translate-y-[10vh] inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="px-5 py-2.5 w-full text-center text-lg lg:text-xl transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Go to Dash
            </span>
          </Link>
          <Button className={"z-10 rounded-lg translate-y-[10vh] group"}>
            Learn More
            <ExternalLinkIcon className="mx-1 group-hover:translate-x-1 duration-150" />
          </Button>
        </div>
      </WavyBackground>
      <ul className="flex space-x-3 text-white absolute bottom-0 m-10">
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Instagram />
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Twitter />
        </li>
        <li className="hover:scale-110 duration-200 cursor-pointer">
          <Link href={"https://github.com/kloud47/Coin-wallet"}>
            <GithubIcon fill="white" />
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 text-center w-full text-md font-thin text-white bg-background">
        <div className="bg-muted/50 w-1/2 flex justify-center mx-auto pb-4 pt-1 rounded-t-[50px]">
          <span>Desigend & developed by - </span>
          <span>Priyanshu Shukla</span>
        </div>
      </div>
    </div>
  );
}
