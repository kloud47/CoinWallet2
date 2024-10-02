import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  console.log("Test request");
  return NextResponse.json({
    msg: "okk Test",
  });
};
