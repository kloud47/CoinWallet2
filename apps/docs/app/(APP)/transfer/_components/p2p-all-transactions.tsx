import React from "react";
import { OnRampTransactions } from "~/app/components/global/on-ramp-transaction";
import {
  getOnRampTransactions,
  getTransactions,
} from "~/app/lib/actions/queries";

type Props = {
  refresh?: boolean;
};

const P2pTransactions = async (props: Props) => {
  const transactions = await getTransactions();
  return <OnRampTransactions transactions={transactions} />;
};

export default P2pTransactions;
