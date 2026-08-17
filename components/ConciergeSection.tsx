"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ConciergeSection() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);

  async function handleAsk() {
    if (!message.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setAnswer(data.answer);

      setTimeout(() => {
        answerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } catch (error) {
      console.error(error);

      setAnswer(
        "We are unable to connect with your private concierge at the moment."
      );
    }

    setLoading(false);
  }

  return (
    <section
      id="concierge"
      className="
        bg-[#f4efe7]
        px-6
        py-24
        text-[#1d1c19]
        sm:py-32
      "
    >
      <div
        className="
          mx-auto
          w-[90%]
          text-center
        "
      >
        {/* PRIVATE CONCIERGE LABEL */}

        <p
          className="
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-[#a47b43]
          "
        >
          Private Concierge
        </p>

        {/* TITLE */}

        <h2
          className="
            mt-3
            text-4xl
            font-light
            tracking-wide
            sm:text-5xl
          "
        >
          Your Journey Begins Here
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-sm
            leading-5
            text-gray-600
          "
        >
          Tell us how you want to experience the world.
          Our private concierge will help create a journey
          designed around your preferences.
        </p>

        {/* INPUT AREA */}

        <div
          className="
            mx-auto
            mt-10
            w-[90%]
          "
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAsk();
              }
            }}
            type="text"
            placeholder="I want a private Mediterranean escape..."
            className="
              w-full
              rounded-full
              border
              border-black/10
              bg-white
              px-6
              py-4
              text-sm
              outline-none
              placeholder:text-gray-400
            "
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="
              mt-5
              rounded-full
              bg-[#1d1c19]
              px-8
              py-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-white
              disabled:opacity-50
            "
          >
            {loading ? "Thinking..." : "Ask Concierge"}
          </button>
        </div>

        {/* AI REPLY SECTION */}

        {answer && (
          <div
            ref={answerRef}
            className="
              mx-auto
              mt-12
              grid
              w-full
              grid-cols-1
              gap-6
              rounded-[2rem]
              border
              border-black/5
              bg-white
              p-6
              text-left
              shadow-sm
              lg:grid-cols-3
              lg:gap-8
              lg:p-5
            "
          >
            {/* ================================================= */}
            {/* COLUMN 1 — IMAGE                                  */}
            {/* ================================================= */}

            <div
              className="
                relative
                min-h-[280px]
                w-full
                overflow-hidden
                rounded-[1.5rem]
                lg:min-h-[320px]
              "
            >
              <Image
                src="/images/into-the-wild.png"
                alt="Into the wild journey"
                fill
                className="
                  object-cover
                "
                sizes="
                  (max-width: 1024px) 100vw,
                  33vw
                "
              />
            </div>

            {/* ================================================= */}
            {/* COLUMNS 2 + 3 — CONCIERGE RESPONSE                */}
            {/* ================================================= */}

            <div
              className="
                min-w-0
                lg:col-span-2
              "
            >
              <div
                className="
                  whitespace-pre-line
                  text-[15px]
                  leading-7
                  text-gray-700
                  lg:columns-2
                  lg:gap-10
                "
              >
                {answer}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}