import { Card } from "@repo/ui/card";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Card
      title="Transactions"
      classname="bg-transparent border-none rounded-xl"
      titleCSS="text-3xl font-thin !text-[#D19A02]"
    >
      <div className="relative grid  grid-cols-1 lg:grid-cols-2 m-1 gap-2">
        <Card>ok</Card>
        <Card>ok</Card>
      </div>
    </Card>
  );
};

export default page;
