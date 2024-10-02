"use server";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/components/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DeleteContact, FetchContact } from "~/app/lib/actions/queries";

const page = async ({ params }: { params: { user: string } }) => {
  const name = params.user;
  const contactUser: any = await FetchContact(String(name));

  async function deleteContact(data: FormData) {
    "use server";
    const datadelete = await DeleteContact(contactUser?.ContactPhone);
  }

  return (
    <Card
      title="Contact"
      classname="bg-transparent border-none rounded-xl"
      titleCSS="text-3xl font-thin bgTitle p-2 rounded-xl mb-4 !text-[#1699ba]"
    >
      <div className="relative grid  grid-cols-1 lg:grid-cols-2 m-1 gap-2">
        <Card classname="bg-accent/40 border-none rounded-xl">
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
          <div className="grid grid-cols-2 items-center justify-between">
            <div className="w-[250px] h-[250px] rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)]">
              {!contactUser?.contactProfile ? (
                <div className="bg-muted-foreground flex items-center justify-center text-[80px] border-[20px] border-accent/60 shadow-xl rounded-full h-[300px] w-[300px]">
                  {name?.substring(0, 2)}
                </div>
              ) : (
                <img
                  src={String(contactUser?.contactProfile)}
                  className="w-[250px] h-[250px] rounded-full"
                  alt=""
                />
              )}
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center justify-center font-thin text-3xl p-4 space-y-6 w-full">
                <h1 className="flex flex-col text-center">
                  {name}
                  <div className="text-lg font-medium text-slate-500 italic">
                    {contactUser?.contactName}
                  </div>
                </h1>
                <div className="flex flex-col items-center text-[rgb(45,45,45)] w-[95%] rounded-lg p-4 bg-muted-foreground/60 justify-between py-8">
                  <div className="flex font-medium text-lg lg:text-2xl text-[#35aab9]">
                    CID - @{contactUser?.ContactPhone}
                  </div>
                  <div className="text-sm font-medium">
                    {contactUser?.Created.toDateString()}
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full px-5 space-x-5">
                <form action={deleteContact} className="w-[40%]">
                  <input className="hidden" name="itemId" />
                  <Button
                    variant={"outline"}
                    className={
                      "mt-[40px] mb-[10px] rounded-full border-2 w-full border-[#b9355c] hover:bg-[#b9355c] hover:text-[#fff] text-[#35aab9]"
                    }
                  >
                    Delete
                  </Button>
                </form>
                <Button
                  variant={"outline"}
                  className={
                    "mt-[40px] mb-[10px] rounded-full border-2 w-[40%] border-[#35aab9] hover:bg-[#35aab9] hover:text-[#fff] text-[#35aab9]"
                  }
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <Card classname="bg-background rounded-xl">chat</Card>
      </div>
    </Card>
  );
};

export default page;
