import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Image, Paperclip } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {};

type RecentContactsProps = {
  classname: string;
};

const ChatComp = (props: Props) => {
  return (
    <div className="h-full w-full flex">
      <RecentContacts classname="" />
      <ul className="relative flex flex-col w-[80%] overflow-y-scroll text-sm overflow-x-hidden text-black px-2 pt-5">
        <li className="flex items-center justify-start w-full">
          <div className="flex flex-col items-start">
            <span className="bg-muted-foreground p-2 rounded-xl rounded-bl-none">
              Hey, when you will send me money
            </span>
            <span className="text-xs text-muted-foreground">2:20 pm</span>2:20
            pm
          </div>
        </li>

        <li className="flex items-center justify-end w-full">
          <div className="flex flex-col items-end">
            <span className="bg-[#D19A02] p-2 rounded-xl rounded-br-none">
              Hi I have sent you the money
            </span>
            <span className="text-xs text-muted-foreground">2:20 pm</span>2:20
            pm
          </div>
        </li>

        <li className="flex items-center justify-start w-full">
          <div className="flex flex-col items-start">
            <span className="bg-muted-foreground p-2 rounded-xl rounded-bl-none">
              ok, I got the money
            </span>
            <span className="text-xs text-muted-foreground">2:20 pm</span>2:20
            pm
          </div>
        </li>

        <SendMessageComp />
      </ul>
    </div>
  );
};

const SendMessageComp = () => {
  return (
    <div className="bg-muted absolute bottom-0 w-full p-1 flex items-center justify-between rounded-full z-10">
      <Input
        placeholder="Send message or money"
        className="rounded-l-full bg-foreground/30 placeholder:text-background text-background"
      />
      <ul className="flex space-x-2 px-1 mx-2">
        <li>
          <Paperclip />
        </li>
        <li>
          <Image />
        </li>
      </ul>
      <Button className="rounded-r-full h-full">Send</Button>
    </div>
  );
};

const RecentContacts = ({ classname }: RecentContactsProps) => {
  return (
    <div className="bg-background h-full w-[20%] rounded-l-2xl flex flex-col gap-y-3 border-r border-[#424240] py-5 px-2">
      <div className="w-full flex items-center hover:bg-accent/20 cursor-pointer rounded-lg">
        <div className="bg-muted-foreground flex items-center justify-center text-lg p-1 h-[50px] w-[50px] border-4 text-background font-medium border-muted/70 shadow-md rounded-full">
          {"User1"?.substring(0, 2)}
        </div>
        <ul className="flex flex-col ml-2 text-sm">
          <li>User1</li>
          <li className="text-muted">11234567</li>
        </ul>
      </div>
      <div className="w-full flex items-center hover:bg-accent/20 cursor-pointer rounded-lg">
        <div className="bg-muted-foreground flex items-center justify-center text-lg p-1 h-[50px] w-[50px] border-4 text-background font-medium border-muted/70 shadow-md rounded-full">
          {"Person2"?.substring(0, 2)}
        </div>
        <ul className="flex flex-col ml-2 text-sm">
          <li>Person1</li>
          <li className="text-muted">11234567</li>
        </ul>
      </div>
      <div className="w-full flex items-center bg-accent/20 cursor-pointer rounded-lg">
        <div className="bg-muted-foreground flex items-center justify-center text-lg p-1 h-[50px] w-[50px] border-4 text-background font-medium border-muted/70 shadow-md rounded-full">
          {"Starwin"?.substring(0, 2)}
        </div>
        <ul className="flex flex-col ml-2 text-sm">
          <li>Starwin2</li>
          <li className="text-muted">11234567</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatComp;
