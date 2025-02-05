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
              // console.log(user);
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
      // console.log('signIn Callback user: ', user); 
      // console.log('signIn Callback account: ', account); 
      // console.log('signIn Callback profile: ', profile); 
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
          // console.log(error);
          throw new Error("User cannot be saved to DB.");
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      // console.log('JWT Callback token: ', token); 
      // console.log('JWT Callback user: ', user); 
      if (user) {
        const dbUser = await User.findOne({ email: user.email });
        token.role = dbUser?.role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('session Callback session: ', session); 
      // console.log('session Callback token: ', token); 
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
});
