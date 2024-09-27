import "next-auth";

declare module "next-auth" {
  interface user {
    id?: number;
    name: string;
    phone: string;
    profile_url: string;
  }
  interface Session {
    user: {
      id?: number;
      name: string;
      phone: string;
      profile_url: string;
    };
  }
}
