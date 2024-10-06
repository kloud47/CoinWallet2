"use sever";

import { getServerSession } from "next-auth";
import { authOptions } from "~/app/api/auth/[...nextauth]/auth";

export const CheckPin = async () => {
  const session = await getServerSession(authOptions);

  return true;
};
