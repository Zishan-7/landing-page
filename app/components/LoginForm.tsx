"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    router.push("https://app.loch.one/welcome.");
  };

  return (
    <section className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-96 w-96 flex flex-col justify-center items-center gap-4 p-4 md:p-0"
      >
        <h1 className="text-[#B0B1B3] text-[35px] md:text-[50px] font-medium">
          Sign up for exclusive access.
        </h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          className="border rounded-md w-full py-3 px-7 placeholder:text-[#CACBCC] transition-all duration-200 focus:outline-none focus:border-[#6366f1] focus:shadow-md hover:border-[#a5b4fc] hover:shadow-sm"
          placeholder="Your email address"
        />
        <button
          type="submit"
          className="bg-black w-full rounded-md text-white py-3 cursor-pointer"
        >
          Get Started
        </button>

        <p className="font-semibold">
          You&apos;ll receive an email with an invite link to join.
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
