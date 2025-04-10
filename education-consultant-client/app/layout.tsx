import { auth } from "@/auth";
import MainFooter from "@/components/footer/MainFooter";
import Navbar from "@/components/navbar/Navbar";
import connectDB from "@/lib/connectDB";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
// import { Inter } from "next/font/google";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Stair Touch",
  description:
    "Stair Touch Education Consultancy and Travels, বাংলাদেশের শীর্ষ শিক্ষা পরামর্শক প্রতিষ্ঠান, আন্তর্জাতিক শিক্ষার সুযোগের জন্য সহায়তা প্রদান করে।",
  openGraph: {
    title: "Stair Touch Education Consultancy and Travels",
    description:
      "Stair Touch helps students explore and secure international education opportunities.",
    url: "https://stairtouch.com",
    siteName: "Stair Touch",
    images: [
      {
        url: "https://stairtouch.com/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Stair Touch Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stair Touch Education Consultancy and Travels",
    description:
      "Stair Touch helps students explore and secure international education opportunities.",
    images: ["https://stairtouch.com/path/to/image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDB();
  const session = await auth();
  return (
    <html lang="en">
      <head>
        <meta name="facebook-domain-verification" content="dla1xx60hoty9t5hkwhk8wrrynkdzr" />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}> 
      {/* className={inter.className}  */}
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <MainFooter />
        </SessionProvider>
      </body>
    </html>
  );
}
