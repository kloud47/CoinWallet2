import { Card } from "@repo/ui/card";
import React from "react";
import { ChartComp } from "./chart-comp";

type Props = {};

const WalletActivity = (props: Props) => {
  return (
    <Card title="Wallet Activity" classname="mt-5 bg-accent rounded-xl">
      <ChartComp />
    </Card>
  );
};

export default WalletActivity;
