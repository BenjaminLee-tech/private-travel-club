"use client";

import { useState } from "react";

export default function LoginPage() {
  const [signedIn, setSignedIn] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSignedIn(true);
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1d1c19]">

      <div className="flex min-h-screen items-center justify-center px-6 py-16">

        <div className="w-full max-w-md">

          <div className="text-center">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#a47b43]">
              Private Travel Club
            </p>

            <h1 className="mt-5 font-serif text-4xl">
              Welcome Back
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[#292722]/65">
              Enter your details to access your private travel club.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
            >

            <div>
              <label
                htmlFor="email"
                className="text-[10px] uppercase tracking-[0.3em]"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
              />
            </div>


            <div>
              <label
                htmlFor="password"
                className="text-[10px] uppercase tracking-[0.3em]"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
              />
            </div>


            {signedIn ? (
            <div className="border border-[#a47b43]/40 px-6 py-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#a47b43]">
                Welcome Back
                </p>

                <p className="mt-3 text-sm leading-7 text-[#292722]/65">
                You are now signed in to the Private Travel Club.
                </p>
            </div>
            ) : (
            <button
                type="submit"
                className="w-full bg-[#292722] px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-[#a47b43]"
            >
                Sign In
            </button>
            )}

          </form>


          <div className="mt-8 text-center">

            <a
              href="/"
              className="text-[10px] uppercase tracking-[0.25em] text-[#a47b43]"
            >
              Return to website
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}