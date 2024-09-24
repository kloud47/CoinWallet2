import React from "react";
import { OnRampTransactions } from "~/app/components/global/on-ramp-transaction";
import { getOnRampTransactions } from "~/app/lib/actions/queries";

type Props = {
  refresh?: boolean;
};

const AllOnRampTransactions = async (props: Props) => {
  const transactions = await getOnRampTransactions();
  return <OnRampTransactions transactions={transactions} />;
};

export default AllOnRampTransactions;
