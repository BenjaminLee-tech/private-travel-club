"use client";

import { useState } from "react";
import Image from "next/image";

export default function ConciergeSection() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);


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


        <p className="
          text-[11px]
          uppercase
          tracking-[0.5em]
          text-[#a47b43]
        ">
          Private Concierge
        </p>


        <h2 className="
          mt-3
          text-4xl
          font-light
          tracking-wide
          sm:text-5xl
        ">
          Your Journey Begins Here
        </h2>


        <p className="
        mx-auto
        mt-6
        max-w-3xl
        text-sm
        leading-5
        text-gray-600
        ">
          Tell us how you want to experience the world.
          Our private concierge will help create a journey
          designed around your preferences.
        </p>



        {/* Input Area */}

            <div className="
            mx-auto
            mt-10
            w-[90%]
            ">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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



        {/* AI Reply Section */}

        {answer && (

            <div
            className="
                mt-12
                flex
                items-stretch
                flex-col
                gap-8
                rounded-3xl
                bg-white
                p-8
                text-left
                lg:flex-row
            "
>


            {/* Image 30% */}

            <div
              className="
                w-full
                lg:w-[50%]
              "
            >

            <div className="
            h-full
            ">

            <Image
                src="/images/into-the-wild.png"
                alt="Into the wild journey"
                width={600}
                height={600}
                className="
                h-full
                w-full
                rounded-2xl
                object-cover
                "
            />

            </div>

            </div>



            {/* Reply Text 60% */}

            <div
              className="
                w-full
                lg:w-[50%]
              "
            >

              <p
                className="
                  whitespace-pre-line
                  text-sm
                  leading-5
                  text-gray-700
                "
              >
                {answer}
              </p>


            </div>


          </div>

        )}



      </div>

    </section>
  );
}