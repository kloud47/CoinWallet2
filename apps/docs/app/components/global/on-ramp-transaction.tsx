import { Card } from "@repo/ui/card";

export const OnRampTransactions = async ({
  transactions,
}: {
  transactions: {
    txnId: number;
    time: Date;
    amount: number;
    status?: "Success" | "Failure" | "Processing";
    provider?: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card
        title="Recent Transactions"
        classname="rounded-xl bg-background border-none"
      >
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  } else {
    return (
      <Card
        classname={
          "rounded-xl bg-background hover:translate-y-[2px] duration-150 no-scrollbar border-none"
        }
        title="Recent Transactions"
      >
        <div className="pt-2">
          {transactions.map((t) => (
            <div className="flex justify-between" key={t.txnId}>
              <div>
                <div className="text-sm flex">
                  Received INR
                  <div
                    className={`p-3 flex items-center ${t.status === "Success" ? "text-emerald-400" : "text-rose-600"}`}
                  >
                    {"(" + t.status + ")"}
                  </div>
                </div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {t.amount / 100}
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }
};
