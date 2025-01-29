"use client";
import { doSocialLogin } from "@/actions";
import { signIn } from "next-auth/react"; // নিশ্চিত করুন এটি সঠিকভাবে ইমপোর্ট হয়েছে
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(res);
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <form
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
         border-solid border border-secondary  rounded"
        onSubmit={handleSubmit}
      >
        {error && <div className="">{error}</div>}
        <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8  border-solid border rounded p-2 input input-secondary"
          name="email"
        />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid  rounded p-2 input input-secondary"
            name="password"
          />
        </div>
        <button className="w-full border border-solid  rounded  btn btn-secondary">
          Sign In
        </button>

        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black"
        >
          Don&apos;t have an account?
        </Link>
      </form>

      <form action={doSocialLogin}>
        <button
          className=" btn btn-outline  p-1 rounded-md m-1 text-lg flex items-center gap-3 px-3 mt-6"
          type="submit"
          name="action"
          value="google"
        >
          <FcGoogle className="text-2xl" /> Sign In
        </button>

        {/* <button className="bg-black text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="github">
                Sign In With GitHub
            </button> */}
      </form>
    </section>
  );
}
