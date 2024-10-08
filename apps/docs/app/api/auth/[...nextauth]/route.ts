import NextAuth from "next-auth/next";
import { authOptions } from "./auth";

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
