"use client"; // ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করুন

import { doLogout } from "@/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function LoginSection() {
  const { data: session, status } = useSession(); // useSession হুক ব্যবহার করুন

  if (status === "loading") {
    return <p>Loading...</p>; // সেশন লোড হচ্ছে
  }

  return (
    <div>
      {session?.user ? (
        <>
          <Link href={"/dashboard"} className="link link-hover">
            Dashboard
          </Link>
          <form action={doLogout  as unknown as (formData: FormData) => void}>
            <button className="rounded" type="submit">
              Log Out
            </button>
          </form>
        </>
      ) : (
        <Link href="/login">Admin Login</Link>
      )}
    </div>
  );
}