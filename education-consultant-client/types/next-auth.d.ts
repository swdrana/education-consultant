import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend default User type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userRole: string;
  }
}
