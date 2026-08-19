"use client";

import { FormEvent, useState } from "react";

export default function MembershipPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      occupation: formData.get("occupation"),
      travelInterests: formData.get("travelInterests"),
      reason: formData.get("reason"),
      referral: formData.get("referral"),
    };

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit application."
        );
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#102638]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#032535] px-8 py-24 text-white md:py-32">

        <div className="pointer-events-none absolute inset-0 opacity-[0.10]">

          <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#d3a12e]" />

          <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full border border-[#d3a12e]" />

        </div>

        <div className="relative z-10 mx-auto max-w-[900px]">

          <p className="text-[10px] tracking-[0.35em] text-[#d5a12b]">
            PRIVATE TRAVEL CLUB
          </p>

          <div className="mt-5 h-px w-10 bg-[#d5a12b]" />

          <h1 className="mt-7 max-w-[700px] font-serif text-[48px] leading-[1.02] md:text-[72px]">
            BECOME A MEMBER
          </h1>

          <p className="mt-7 max-w-[600px] text-[15px] leading-7 text-white/75">
            Membership is intentionally limited. Tell us a little about
            yourself, your approach to travel, and what brings you to
            the Private Travel Club.
          </p>

        </div>

      </section>


      {/* APPLICATION */}

      <section className="px-6 py-16 md:px-10 md:py-24">

        <div className="mx-auto max-w-[900px]">

          <div className="mb-12">

            <p className="text-[10px] tracking-[0.3em] text-[#b4821c]">
              MEMBERSHIP APPLICATION
            </p>

            <div className="mt-4 h-px w-8 bg-[#c69a3b]" />

            <h2 className="mt-5 font-serif text-[38px] md:text-[48px]">
              LET&apos;S GET TO KNOW YOU
            </h2>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#263540]/70">
              Please complete the application below. Every application
              is reviewed personally by our team.
            </p>

          </div>


          {success && (
            <div className="mb-8 border border-[#c69a3b]/40 bg-white px-6 py-7">

              <p className="text-[10px] tracking-[0.3em] text-[#a87817]">
                APPLICATION RECEIVED
              </p>

              <h3 className="mt-3 font-serif text-3xl">
                Thank you for your application.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/60">
                We have received your application and will review it
                personally. We will contact you when there is an update.
              </p>

            </div>
          )}


          {error && (
            <div className="mb-8 border border-red-200 bg-red-50 px-6 py-5">

              <p className="text-sm text-red-700">
                {error}
              </p>

            </div>
          )}


          <form onSubmit={handleSubmit} className="space-y-10">

            {/* PERSONAL INFORMATION */}

            <section>

              <p className="mb-6 text-[10px] tracking-[0.3em] text-[#b4821c]">
                01 — PERSONAL INFORMATION
              </p>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    First Name *
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Last Name *
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Country of Residence
                  </label>

                  <input
                    id="country"
                    name="country"
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="occupation"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Occupation
                  </label>

                  <input
                    id="occupation"
                    name="occupation"
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

              </div>

            </section>


            {/* TRAVEL */}

            <section className="border-t border-black/10 pt-10">

              <p className="mb-6 text-[10px] tracking-[0.3em] text-[#b4821c]">
                02 — YOUR APPROACH TO TRAVEL
              </p>

              <div className="space-y-6">

                <div>
                  <label
                    htmlFor="travelInterests"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Travel Interests
                  </label>

                  <textarea
                    id="travelInterests"
                    name="travelInterests"
                    rows={4}
                    placeholder="What kinds of destinations, experiences, or journeys interest you?"
                    className="w-full resize-none border border-black/10 bg-white px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-black/30 focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    Why would you like to join?
                  </label>

                  <textarea
                    id="reason"
                    name="reason"
                    rows={5}
                    placeholder="Tell us what you are looking for from the Private Travel Club."
                    className="w-full resize-none border border-black/10 bg-white px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-black/30 focus:border-[#c69a3b]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="referral"
                    className="mb-2 block text-[10px] uppercase tracking-[0.2em]"
                  >
                    How did you hear about us?
                  </label>

                  <input
                    id="referral"
                    name="referral"
                    className="w-full border border-black/10 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#c69a3b]"
                  />
                </div>

              </div>

            </section>


            {/* SUBMIT */}

            <section className="border-t border-black/10 pt-10">

              <p className="mb-6 max-w-[650px] text-xs leading-6 text-black/50">
                By submitting this application, you understand that
                membership is selective and that submission does not
                guarantee membership.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#d5a12b] px-8 py-4 text-[10px] tracking-[0.25em] text-white transition hover:bg-[#e2b542] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "SUBMITTING..."
                  : "SUBMIT APPLICATION"}
              </button>

            </section>

          </form>

        </div>

      </section>

    </main>
  );
}