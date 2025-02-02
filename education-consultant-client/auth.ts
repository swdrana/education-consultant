import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./lib/connectDB";
import User from "./models/User";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and Password are required");
        }
        try {
          const user = await User.findOne({ email: credentials?.email });
          if (user) {
            const isMatch = await bcrypt.compare(credentials.password as string, user.password); // Compare hashed password
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password is not correct");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        try {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user", // Default role
          });
        } catch (error) {
          throw new Error("User cannot be saved to DB.");
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await User.findOne({ email: user.email });
        token.role = dbUser?.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          role: token.role,
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production", // Only secure cookies in production
      },
    },
  },
});
