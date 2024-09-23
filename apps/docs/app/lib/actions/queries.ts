"use server";
import prisma from "@repo/database/client";
import { getServerSession } from "next-auth";
import { authOptions } from "~/app/api/auth/[...nextauth]/auth";

export async function getBalance() {
  const session = await getServerSession(authOptions);
  try {
    const balance = await prisma.balance.findFirst({
      where: {
        userId: Number(session?.user?.id),
      },
    });
    return {
      amount: balance?.amount || 0,
      locked: balance?.locked || 0,
    };
  } catch (e) {
    return "Server not reachable";
  }
}

export const getOnRampTransactions = async () => {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    txnId: t.id,
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
};

export const createRampTransaction = async (
  provider: string,
  amount: string
): Promise<string> => {
  const session = await getServerSession(authOptions);
  console.log("in Add money");
  if (!session?.user || !session?.user.id) {
    return new Promise((resolved) => resolved("Unauthenticated User"));
  }

  const token = (Math.random() * 100).toString();
  return await prisma.onRampTransaction
    .create({
      data: {
        provider,
        token,
        status: "Processing",
        amount: Number(amount) * 100,
        startTime: new Date(),
        userId: Number(session?.user?.id),
      },
    })
    .then(() => "Done")
    .catch((err) => "Someting happened in the database");
};
