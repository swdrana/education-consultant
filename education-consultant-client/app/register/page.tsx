"use client";

import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react"; // Ensure you're importing signIn from next-auth

export default function Register() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(ref.current!); // Get form data

    // Register the user first
    const r = await register({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
    });

    if (r?.error) {
      setError(r.error);
      return;
    }

    // Attempt to sign in the user
    const res = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false, // Don't let next-auth handle the redirect
    });

    console.log('signIn response:', res); // Debugging line to check the response

    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok && res?.code !== null) {
      console.log('Redirecting to home'); // Debugging line to ensure this block runs
      router.push("/"); // Redirect to home after successful login
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        ref={ref}
        onSubmit={handleSubmit} // Use onSubmit to handle form submission
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 border border-solid rounded"
      >
        {error && <div className="">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

        <label className="w-full text-sm">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-8 border border-solid py-1 px-2.5 rounded text-[13px] input input-primary"
          name="name"
        />

        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid py-1 px-2.5 rounded input input-primary"
          name="email"
        />

        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid py-1 px-2.5 rounded input input-primary"
            name="password"
          />
        </div>

        <button className="w-full border border-solid py-1.5 mt-2.5 rounded transition duration-150 ease btn btn-primary">
          Sign up
        </button>

        <Link href="/login" className="text-sm text-[#888] transition duration-150 ease hover:text-black">
          Already have an account?
        </Link>
      </form>
    </section>
  );
}
