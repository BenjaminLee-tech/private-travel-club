const experiences = [
  {
    number: "01",
    title: "INTO THE WILD",
    description:
      "Where the ocean meets untouched beauty and adventure feels limitless.",
    image: "/images/into-the-wild.png",
  },
  {
    number: "02",
    title: "BEYOND THE HORIZON",
    description:
      "Open landscapes, timeless towns, and the freedom to go far.",
    image: "/images/beyond-the-horizon.png",
  },
  {
    number: "03",
    title: "ABOVE THE ORDINARY",
    description:
      "Majestic mountains, pure air, and space to reconnect with yourself.",
    image: "/images/above-the-ordinary.png",
  },
  {
    number: "04",
    title: "WHERE SILENCE LIVES",
    description:
      "Walk beyond the familiar and discover the beauty of absolute stillness.",
    image: "/images/where-silence-lives.png",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="bg-white text-[#142536]">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">

        <img
          src="/images/hero-coast.png"
          alt="Mediterranean coastal landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Very subtle light overlay */}
        <div className="absolute inset-0 bg-white/5" />

        {/* Soft white area behind text */}
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-8 lg:px-16">

          <div className="max-w-xl">

            <p className="mb-6 text-sm font-medium tracking-[0.28em] text-[#b38421]">
              PRIVATE TRAVEL CLUB
            </p>

            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight text-[#142536] md:text-8xl">
              THE ART
              <br />
              OF TRAVEL
            </h1>

            <div className="my-8 h-px w-10 bg-[#c49a3a]" />

            <p className="max-w-md text-lg leading-8 text-[#142536]">
              Some journeys change where you are.
              <br />
              The rare ones change who you are.
            </p>

            <div className="mt-14">

              <p className="text-xs tracking-[0.25em] text-[#b38421]">
                SCROLL TO EXPLORE
              </p>

              <div className="mt-4 h-10 w-px bg-[#142536]/50" />

              <div className="mt-[-1px] h-2 w-2 rounded-full border border-[#142536]" />

            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCES */}
      {experiences.map((experience) => (
        <section
          key={experience.number}
          className="relative min-h-[72vh] overflow-hidden border-t border-white"
        >

          <img
            src={experience.image}
            alt={experience.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft white panel for typography */}
          <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-white/95 via-white/78 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center px-8 lg:px-16">

            <div className="max-w-md">

              <p className="mb-2 text-sm tracking-[0.2em] text-[#b38421]">
                {experience.number}
              </p>

              <div className="mb-5 h-px w-5 bg-[#c49a3a]" />

              <h2 className="font-serif text-4xl leading-[1.05] text-[#142536] md:text-5xl">
                {experience.title}
              </h2>

              <div className="my-6 h-px w-5 bg-[#c49a3a]" />

              <p className="max-w-sm text-base leading-7 text-[#142536]">
                {experience.description}
              </p>

              <button
                type="button"
                className="mt-8 border border-[#c49a3a] px-6 py-3 text-xs tracking-[0.18em] text-[#a77919] transition duration-300 hover:bg-[#c49a3a] hover:text-white"
              >
                EXPLORE JOURNEY
                <span className="ml-4">→</span>
              </button>

            </div>

          </div>
        </section>
      ))}

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#062536] px-8 py-24 text-white md:py-28">

        {/* Subtle decorative lines */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-[#c49a3a]" />
          <div className="absolute -left-10 top-20 h-56 w-56 rounded-full border border-[#c49a3a]" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full border border-[#c49a3a]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <h2 className="font-serif text-4xl md:text-5xl">
            WHERE DO YOU WANT TO FEEL?
          </h2>

          <div className="mx-auto my-6 h-px w-10 bg-[#c49a3a]" />

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-12 gap-y-7 py-6">

            <div className="text-center">
              <div className="mb-2 text-2xl text-[#c49a3a]">△</div>
              <p className="text-xs tracking-[0.16em]">ADVENTURE</p>
            </div>

            <div className="text-center">
              <div className="mb-2 text-2xl text-[#c49a3a]">◒</div>
              <p className="text-xs tracking-[0.16em]">FREEDOM</p>
            </div>

            <div className="text-center">
              <div className="mb-2 text-2xl text-[#c49a3a]">☼</div>
              <p className="text-xs tracking-[0.16em]">WONDER</p>
            </div>

            <div className="text-center">
              <div className="mb-2 text-2xl text-[#c49a3a]">◇</div>
              <p className="text-xs tracking-[0.16em]">STILLNESS</p>
            </div>

            <div className="text-center">
              <div className="mb-2 text-2xl text-[#c49a3a]">♧</div>
              <p className="text-xs tracking-[0.16em]">CONNECTION</p>
            </div>

          </div>

          <button
            type="button"
            className="mt-8 bg-[#d6a52e] px-10 py-4 text-sm font-medium tracking-[0.2em] text-white transition duration-300 hover:bg-[#e1b64a]"
          >
            BEGIN YOUR JOURNEY
            <span className="ml-5">→</span>
          </button>

        </div>
      </section>

    </main>
  );
}