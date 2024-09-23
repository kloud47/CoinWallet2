import { Card } from "@repo/ui/card";
import { getBalance } from "~/app/lib/actions/queries";

export const BalanceCard = async () => {
  let response,
    error = undefined;
  try {
    response = await getBalance();
  } catch (e) {
    error = await getBalance();
  }

  return error ? (
    <Card
      classname={
        "bgBalance hover:translate-y-[2px] rounded-2xl my-2 duration-200"
      }
    >
      <div className="flex justify-between border-b border-slate-300 p-2 pb-2">
        <div>error</div>
      </div>
    </Card>
  ) : (
    <Card
      classname={
        "bgBalance hover:translate-y-[2px] rounded-2xl my-2 duration-200"
      }
    >
      <div className="flex justify-between border-b border-slate-300 p-2 pb-2">
        <div>Unlocked balance</div>
        <div>{response.amount / 100} INR</div>
      </div>
      <div className="flex justify-between p-2 py-2">
        <div>Total Locked Balance</div>
        <div>{response.locked / 100} INR</div>
      </div>
      <div className="flex flex-col justify-between  p-5 py-2 bg-[#232526] rounded-3xl">
        <div className="text-slate-400 italic">Total Balance</div>
        <div className="text-3xl text-white">{(locked + amount) / 100} INR</div>
      </div>
    </Card>
  );
};
