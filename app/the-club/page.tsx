import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "CURATED JOURNEYS",
    description:
      "Exceptional destinations selected with intention. Every journey is crafted with care and expertise.",
    image: "/images/the-club-curated-journeys.png",
    icon: "✧",
  },
  {
    number: "02",
    title: "PRIVATE ACCESS",
    description:
      "Go beyond the ordinary itinerary. Enjoy experiences that are private, exclusive, and deeply enriching.",
    image: "/images/the-club-private-access.png",
    icon: "♧",
  },
  {
    number: "03",
    title: "PERSONAL CONNECTION",
    description:
      "Travel designed around you. Your passions, your pace, your style — we take care of every detail.",
    image: "/images/the-club-personal-connection.png",
    icon: "♙",
  },
  {
    number: "04",
    title: "A GLOBAL COMMUNITY",
    description:
      "Join a private network of like-minded travelers who share your curiosity and love for the world.",
    image: "/images/the-club-community.png",
    icon: "◎",
  },
];

const membershipBenefits = [
  "Personal Travel Advisor",
  "Priority Access to New Journeys",
  "Members-Only Events & Gatherings",
  "24/7 Concierge Support",
];

export default function TheClubPage() {
  return (
    <main className="bg-[#f8f6f0] text-[#102638]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[520px] overflow-hidden md:min-h-[620px]">

        <Image
          src="/images/the-club-hero.png"
          alt="Mediterranean private travel destination"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#f8f6f0]/95 via-[#f8f6f0]/75 to-transparent md:w-[62%]" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1400px] items-center px-8 md:min-h-[620px] md:px-14 lg:px-20">

          <div className="max-w-[570px] pt-16">

            <p className="mb-5 text-[11px] font-medium tracking-[0.28em] text-[#b4821c]">
              PRIVATE TRAVEL CLUB
            </p>

            <h1 className="font-serif text-[54px] leading-[0.98] tracking-[-0.02em] md:text-[76px]">
              THE PRIVATE
              <br />
              TRAVEL CLUB
            </h1>

            <div className="my-7 h-px w-10 bg-[#c69a3b]" />

            <p className="text-[17px] leading-7 text-[#172a39]">
              Travel differently. Travel deeper.
            </p>

          </div>
        </div>
      </section>


      {/* =========================================================
          THE IDEA
      ========================================================= */}
      <section className="bg-white">

        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">

          <div className="flex items-center px-8 py-16 md:px-12 lg:px-20 lg:py-20">

            <div className="max-w-[430px]">

              <p className="mb-3 text-[11px] tracking-[0.25em] text-[#b4821c]">
                THE IDEA
              </p>

              <div className="mb-5 h-px w-7 bg-[#c69a3b]" />

              <h2 className="font-serif text-[42px] leading-[1.05] md:text-[50px]">
                WHY WE EXIST
              </h2>

              <p className="mt-7 text-[15px] leading-7 text-[#1d2c38]">
                We believe travel is not about collecting destinations.
                It is about collecting moments, perspectives, and stories.
              </p>

              <p className="mt-6 text-[15px] leading-7 text-[#1d2c38]">
                We design journeys that connect you more deeply — with
                places, with people, and with yourself.
              </p>

              <button
                type="button"
                className="mt-8 border border-[#c69a3b] px-5 py-3 text-[10px] tracking-[0.18em] text-[#a87817] transition hover:bg-[#c69a3b] hover:text-white"
              >
                DISCOVER OUR PHILOSOPHY
                <span className="ml-4">→</span>
              </button>

            </div>
          </div>

          <div className="relative min-h-[440px] md:min-h-[500px]">

            <Image
              src="/images/the-club-idea.png"
              alt="Bright Mediterranean villa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          WHAT MEMBERS RECEIVE
      ========================================================= */}
      <section className="bg-[#f8f6f0] px-6 py-20 md:px-10 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12 text-center">

            <p className="mb-3 text-[10px] tracking-[0.3em] text-[#b4821c]">
              WHAT MEMBERS RECEIVE
            </p>

            <div className="mx-auto mb-4 h-px w-7 bg-[#c69a3b]" />

            <h2 className="font-serif text-[38px] md:text-[48px]">
              EXCLUSIVE BY DESIGN
            </h2>

          </div>


          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (

              <article
                key={benefit.number}
                className="overflow-hidden border border-[#e2ddd2] bg-[#faf9f5]"
              >

                {/* CARD IMAGE */}
            <div className="relative h-[360px] w-full overflow-hidden">
            <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 hover:scale-105"
            />
            </div>


                {/* CARD CONTENT */}
                <div className="px-5 pb-7 pt-6">

                  <div className="mb-5 text-2xl font-light text-[#c39227]">
                    {benefit.icon}
                  </div>

                  <h3 className="text-[13px] font-medium tracking-[0.04em]">
                    {benefit.title}
                  </h3>

                  <div className="my-4 h-px w-6 bg-[#c69a3b]" />

                  <p className="text-[13px] leading-6 text-[#263540]">
                    {benefit.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          MEMBERSHIP / IMAGE 7
      ========================================================= */}
    
        <section className="bg-white">

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">

            {/* IMAGE 7 */}
            <div className="relative h-[430px] overflow-hidden md:h-[480px]">

            <Image
                src="/images/the-club-membership.png"
                alt="Elegant private travel club interior overlooking the sea"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
            />

            {/* Soft fade from image into the content area */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[32%] bg-gradient-to-r from-transparent via-white/45 to-white" />

            </div>


            {/* MEMBERSHIP CONTENT */}
            <div className="relative flex h-[430px] items-center overflow-hidden bg-[#faf9f5] px-8 md:h-[480px] md:px-10 lg:px-12">

            {/* Subtle contour decoration */}
            <div className="pointer-events-none absolute inset-0">

                <div className="absolute -right-24 -top-20 h-[390px] w-[390px] rounded-full border border-[#b4821c] opacity-[0.07]" />

                <div className="absolute -right-40 -top-28 h-[500px] w-[500px] rounded-full border border-[#b4821c] opacity-[0.06]" />

                <div className="absolute -right-56 -top-40 h-[620px] w-[620px] rounded-full border border-[#b4821c] opacity-[0.045]" />

            </div>


            {/* Content */}
            <div className="relative z-10 max-w-[570px]">

                <p className="mb-3 text-[10px] tracking-[0.28em] text-[#b4821c]">
                THE MEMBERSHIP
                </p>

                <div className="mb-5 h-px w-7 bg-[#c69a3b]" />

                <h2 className="font-serif text-[36px] leading-[1.06] tracking-[-0.01em] md:text-[42px] lg:text-[46px]">
                MORE THAN A JOURNEY.
                <br />
                A WAY OF TRAVELING.
                </h2>


                <p className="mt-6 max-w-[500px] text-[13px] leading-6 text-[#253540]">
                Membership is by invitation and application.
                We keep our community intentionally small
                to preserve authenticity, trust, and connection.
                </p>


                <div className="mt-6 space-y-2.5">

                {membershipBenefits.map((item) => (
                    <div
                    key={item}
                    className="flex items-center gap-3 text-[12px] text-[#263540]"
                    >

                    <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-[#c69a3b] text-[10px] text-[#b4821c]">
                        ✓
                    </span>

                    <span>{item}</span>

                    </div>
                ))}

                </div>

            </div>

            </div>

        </div>

        </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#032535] px-8 py-20 text-center text-white md:py-24">

        <div className="pointer-events-none absolute inset-0 opacity-[0.10]">

          <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#d3a12e]" />

          <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full border border-[#d3a12e]" />

        </div>


        <div className="relative z-10">

          <div className="mb-5 text-3xl text-[#c99728]">
            ✧
          </div>

          <h2 className="font-serif text-[34px] md:text-[46px]">
            YOUR JOURNEY. OUR PRIVILEGE.
          </h2>

          <button
            type="button"
            className="mt-8 bg-[#d5a12b] px-8 py-4 text-[11px] tracking-[0.2em] text-white transition hover:bg-[#e2b542]"
          >
            BECOME A MEMBER
            <span className="ml-5">→</span>
          </button>

          <p className="mt-7 text-[10px] tracking-[0.35em] text-[#d5a12b]">
            EXCLUSIVE. &nbsp; INTENTIONAL. &nbsp; UNFORGETTABLE.
          </p>

        </div>

      </section>

    </main>
  );
}