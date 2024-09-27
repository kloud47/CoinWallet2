import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@repo/database/client";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "User Auth Info",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "name" },
        phone: { label: "Phone", type: "string", placeholder: "123" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const hashpass = await bcrypt.hash(credentials.password, 10);
        const existingUser = await prisma.user.findFirst({
          where: {
            phone: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValid = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );
          if (passwordValid) {
            return {
              id: existingUser.id.toString(),
              phone: existingUser.phone,
              name: existingUser.name,
              profile_url: existingUser.profile_url,
            };
          }
          return null;
        }

        try {
          const user = await prisma.user.create({
            data: {
              phone: credentials.phone,
              password: hashpass,
              name: credentials.name,
            },
          });
          await prisma.balance.create({
            data: {
              userId: user.id,
              amount: 2000 * 100,
              locked: 0,
            },
          });
          return {
            id: user.id.toString(),
            name: user.name,
            phone: user.phone,
            profile_url: user.profile_url,
          };
        } catch (e) {
          console.error(0);
        }
        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.phone = token.phone;
        session.user.name = token.name;
      }
      // console.log(session)
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id?.toString();
        token.name = user?.name;
        token.phone = user?.phone;
      }
      // console.log(token)
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/signup",
  // },
};
