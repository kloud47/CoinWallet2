import { UploadImage, DeleteImage } from "../../lib/actions/Image";
import prisma from "@repo/database/client";
import { NextResponse, NextRequest } from "next/server";
import { profileState } from "~/app/store/hooks/context";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  console.log(formData);
  console.log("ok");

  const image = formData.get("image") as unknown as File;
  const username = formData.get("user") as string;
  console.log(image, username);

  const picExist = await prisma.user.findFirst({
    where: {
      name: username,
    },
    select: {
      public_id: true,
    },
  });

  if (picExist?.public_id) {
    await DeleteImage(picExist.public_id);
  }

  const data = await UploadImage(image, "CoinWallet-Profile");

  await prisma.user.update({
    where: {
      name: username,
    },
    data: {
      profile_url: data?.secure_url,
      public_id: data?.public_id,
    },
  });
  await prisma.contacts.updateMany({
    where: {
      contactName: username,
    },
    data: {
      contactProfile: data?.secure_url,
    },
  });
  profileState(data?.secure_url);

  return NextResponse.json({ msg: image }, { status: 200 });
};
