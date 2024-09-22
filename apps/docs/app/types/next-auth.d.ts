import "next-auth";

declare module "next-auth" {
  interface user {
    id?: string;
    username: string;
    phone: string;
    profile_url: string;
  }
  interface session {
    user: {
      id?: string;
      username: string;
      phone: string;
      profile_url: string;
    };
  }
}
