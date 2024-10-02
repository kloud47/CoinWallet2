import { Card } from "@repo/ui/card";

export const OnRampTransactions = async ({
  transactions,
}: {
  transactions:
    | {
        txnId: number;
        time: Date;
        amount: number;
        status?: "Success" | "Failure" | "Processing";
        provider?: string;
      }[]
    | { error: string | undefined };
}) => {
  if (transactions.error) {
    return (
      <Card
        title="Recent Transactions"
        classname="rounded-xl bg-muted/20 border"
      >
        <div className="text-center pb-8 pt-8">{transactions.error}</div>
      </Card>
    );
  } else if (!transactions?.length) {
    return (
      <Card
        title="Recent Transactions"
        classname="rounded-xl bg-muted/20 border"
      >
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  } else {
    return (
      <Card
        classname={
          "rounded-xl bg-muted/20 hover:translate-y-[2px] duration-150 no-scrollbar border"
        }
        title="Recent Transactions"
      >
        <div className="pt-2">
          {transactions.map((t, i) => (
            <div
              className={`flex justify-between ${i % 2 == 0 ? "bg-muted" : "bg-muted/60"} rounded-lg mb-1 px-4`}
              key={t.txnId}
            >
              <div>
                <div className="text-sm flex items-center">
                  Received INR
                  <div
                    className={`p-3 flex items-center ${t.status === "Success" ? "text-emerald-400" : "text-rose-600"}`}
                  >
                    {"(" + t.status + ")"}
                  </div>
                </div>
                <div className="text-background text-xs">
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
