"use server";
import prisma from "@repo/database/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
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
    return { error: "Server not reachable" };
  }
}

export const getOnRampTransactions = async () => {
  const session = await getServerSession(authOptions);
  try {
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
  } catch (e) {
    return {
      error: "Server not reachable, wait for some time.",
    };
  }
};

export const createOnRampTransaction = async (
  provider: string,
  amount: string
): Promise<string> => {
  const session = await getServerSession(authOptions);
  console.log("in Add money");
  if (!session?.user || !session?.user.id) {
    return new Promise((resolved) => resolved("Unauthenticated User"));
  }

  const token = (Math.random() * 100).toString();
  const response = await prisma.onRampTransaction.create({
    data: {
      provider,
      token,
      status: "Processing",
      amount: Number(amount) * 100,
      startTime: new Date(),
      userId: Number(session?.user?.id),
    },
  });

  await CreateNotification({
    id: Number(session.user.id),
    message: `${amount} added to the wallet`,
  });

  return "Done";
};

export async function SearchAllContacts(searchTerm: string) {
  const session = await getServerSession(authOptions);
  const uID = Number(session?.user?.id);
  const data = await prisma.contacts.findMany({
    where: {
      AND: [
        {
          userID: uID,
        },
        {
          OR: [
            {
              givenName: {
                startsWith: searchTerm,
              },
            },
            {
              ContactPhone: {
                startsWith: searchTerm,
              },
            },
          ],
        },
      ],
    },
    select: {
      givenName: true,
      ContactPhone: true,
      contactProfile: true,
    },
  });
  return data;
}

export async function FetchContact(name: string) {
  try {
    const data = await prisma.contacts.findFirst({
      where: {
        givenName: name,
      },
    });
    return data;
  } catch (e) {
    return new Error("Can't find contact.");
  }
}

export async function DeleteContact(phone: string) {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user.id);
  await prisma.contacts.delete({
    where: {
      contactID: {
        userID: id,
        ContactPhone: phone,
      },
    },
  });
  redirect("/dashboard");
}

export const getAllNotification = async (id: number | undefined) => {
  // try {
  return prisma.notification.findMany({
    where: {
      userID: Number(id),
    },
  });
  // } catch (e) {
  // return {
  //   msg: "can't find notifications, try again refresh*",
  // };
  // }
};

export const CreateNotification = async ({
  id,
  message,
}: {
  id: number;
  message: string;
}) => {
  const userData = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
    },
  });

  if (!userData) {
    console.log("Could not found user.");
  }

  await prisma.notification.create({
    data: {
      user: {
        connect: {
          id: userData?.id,
        },
      },
      notification: message,
    },
  });
};

export const createContact = async ({
  phone,
  name,
}: {
  phone: string;
  name: string;
}) => {
  const session = await getServerSession(authOptions);
  const uid = session?.user.id;
  if (!uid) {
    console.log("Not logged in.");
    return;
  }
  try {
    const userData = await prisma.user.findFirst({
      where: {
        phone: phone,
      },
      select: {
        profile_url: true,
        name: true,
      },
    });

    await prisma.contacts.upsert({
      where: {
        contactID: {
          userID: Number(uid),
          ContactPhone: phone,
        },
      },
      update: {
        userID: Number(uid),
        givenName: name,
      },
      create: {
        userID: Number(uid),
        givenName: name,
        contactName: userData?.name || "",
        ContactPhone: phone,
        contactProfile: userData?.profile_url,
        Created: new Date(),
      },
    });

    await CreateNotification({
      id: uid,
      message: `New contact ${name} created`,
    });

    return {
      msg: "Contact created",
    };
  } catch (e) {
    return {
      msg: "Could not add contact",
    };
  }
};

export const getTransactions = async () => {
  const session = await getServerSession(authOptions);
  try {
    const txn = await prisma.p2pTransfer.findMany({
      where: {
        fromUserID: Number(session?.user?.id),
      },
    });
    return txn.map((t) => ({
      txnId: t.id,
      amount: t.amount,
      time: t.timestamp,
      Username: t.Username,
    }));
  } catch (e) {
    return {
      error: "Server not reachable, wait for sometime.",
    };
  }
};

export const UpsertUser = async (bank: string, pin: string) => {
  const session = await getServerSession(authOptions);
  await prisma.user.update({
    where: {
      id: Number(session?.user.id),
    },
    data: {
      pin: Number(pin),
    },
  });
};

export async function FetchProfile() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  console.log(userId);

  if (!userId) return null;

  const data = await prisma.user
    .findFirst({
      where: {
        id: Number(userId),
      },
      select: {
        profile_url: true,
      },
    })
    .then((data) => data?.profile_url);

  // console.log(data)

  return data;
}
