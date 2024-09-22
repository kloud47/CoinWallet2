"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  icon: React.JSX.Element;
  title: string;
};

const SidebarItem = ({ icon, title, href }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      className={`flex ${selected ? "text-[#f2b202] font-bold" : " text-foreground"} w-[70%] mx-auto hover:bg-muted duration-300 rounded-full cursor-pointer p-2 px-5 justify-center items-center`}
      onClick={() => {
        router.push(href);
      }}
    >
      <div className="mx-auto py-2">{icon}</div>
    </div>
  );
};

export default SidebarItem;
