import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/connectDB"; // ✅ Ensure correct path
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("⚠️ Email and Password are required");
        }

        try {
          await connectDB(); // ✅ Ensure DB connection

          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("❌ User not found!");
          }

          const isMatch = await bcrypt.compare(credentials.password as string, user.password);

          if (!isMatch) {
            throw new Error("🚫 Invalid email or password!");
          }

          return user;
        } catch (error) {
          console.error("Authorize Error:", error);
          throw new Error("❌ Authentication failed!");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",   // ✅ Login page
    signOut: "/logout", // Optional
    error: "/login",    // ✅ Redirect to login on error
    newUser: "/register", // ✅ Register page
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user", // Default role
          });
        }

        return true;
      } catch (error) {
        console.error("SignIn Error:", error);
        throw new Error("❌ User cannot be saved to DB.");
      }
    },
    async jwt({ token, user }) {
      if (user) {
        await connectDB();
        const dbUser = await User.findOne({ email: user.email });
        token.role = dbUser?.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development", // ✅ Debug mode
});
