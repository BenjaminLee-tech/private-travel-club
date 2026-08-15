"use client";

    import { useState } from "react";

    export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        destination: formData.get("destination"),
        start: formData.get("start"),
        end: formData.get("end"),
        message: formData.get("message"),
    };

    try {
        const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });

        if (!response.ok) {
        throw new Error("Failed to submit inquiry");
        }

        setSubmitted(true);
        form.reset();
    } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again.");
    }
    }

    return (
        <main className="min-h-screen bg-[#f5f1e8] text-[#1d1c19]">

      {/* Header */}
      <header className="border-b border-black/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <a
            href="/"
            className="text-[11px] uppercase tracking-[0.35em]"
          >
            Private Travel Club
          </a>

          <a
            href="/trips"
            className="text-[10px] uppercase tracking-[0.25em] text-[#a47b43]"
          >
            Back to Trips
          </a>

        </div>
      </header>


      {/* Intro */}
      <section className="px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#a47b43]">
            Private Inquiry
          </p>

          <h1 className="mt-6 font-serif text-5xl tracking-tight sm:text-6xl">
            Begin Your Journey
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-loose text-[#292722]/65">
            Tell us about the journey you have in mind.
            Our team will be in touch to create a private experience
            tailored to you.
          </p>

        </div>

      </section>


      {/* Form */}
      <section className="px-6 pb-24 sm:pb-32">

        <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-8"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="text-[10px] uppercase tracking-[0.3em]"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
            />
          </div>


          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-[10px] uppercase tracking-[0.3em]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
            />
          </div>


          {/* Destination */}
          <div>
            <label
              htmlFor="destination"
              className="text-[10px] uppercase tracking-[0.3em]"
            >
              Desired Destination
            </label>

            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Where would you like to go?"
              className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
            />
          </div>


          {/* Dates */}
          <div className="grid gap-8 sm:grid-cols-2">

            <div>
              <label
                htmlFor="start"
                className="text-[10px] uppercase tracking-[0.3em]"
              >
                Preferred Start
              </label>

              <input
                id="start"
                name="start"
                type="date"
                className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#a47b43]"
              />
            </div>


            <div>
              <label
                htmlFor="end"
                className="text-[10px] uppercase tracking-[0.3em]"
              >
                Preferred End
              </label>

              <input
                id="end"
                name="end"
                type="date"
                className="mt-3 w-full border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#a47b43]"
              />
            </div>

          </div>


          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-[10px] uppercase tracking-[0.3em]"
            >
              Tell Us About Your Journey
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your preferences, interests, and ideal experience."
              className="mt-3 w-full resize-none border-b border-[#292722]/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-[#a47b43]"
            />
          </div>


          {/* Submit */}
        {submitted ? (
        <div className="border border-[#a47b43] px-6 py-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#a47b43]">
            Inquiry Received
            </p>

            <p className="mt-4 text-sm text-[#1d1c19]/70">
            Thank you. Our private concierge team will contact you shortly.
            </p>
        </div>
        ) : (
        <button
            type="submit"
            className="w-full bg-[#292722] px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-[#a47b43]"
        >
            Send Private Inquiry
        </button>
        )}

        </form>

      </section>

    </main>
  );
}