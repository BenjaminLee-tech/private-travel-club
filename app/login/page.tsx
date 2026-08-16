"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push("/admin");
    router.refresh();
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                required
                className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
              />
            </div>

            {error && (
              <div className="border border-red-300 bg-red-50 px-6 py-4 text-center">
                <p className="text-sm text-red-700">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#292722] px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-[#a47b43] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

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