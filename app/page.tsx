const navItems = [
  { label: "Journeys", href: "#journeys" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "The Club", href: "#club" },
  { label: "Stories", href: "#stories" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0a] text-[#f5f1e8]">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-20 border-b border-black/10 bg-white/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 lg:px-4">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center -ml-12 lg:-ml-24"
          >
            <img
              src="/images/ptc-logo.png"
              alt="Private Travel Club"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] uppercase tracking-[0.24em] text-[#292722]/70 transition hover:text-[#a47b43]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#"
              className="ml-3 border border-[#a47b43]/60 px-5 py-2.5 text-[12px] uppercase tracking-[0.24em] text-[#292722] transition hover:bg-[#b18a50] hover:text-white"
            >
              Login
            </a>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Cinematic atmosphere */}
        <div className="absolute inset-0 bg-white/30" />

        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(255,255,255,0.25)_100%)]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.55em] text-[#2b2925]/70 sm:text-[11px]">
            A private collection of extraordinary journeys
          </p>

          <h1
            className="font-serif text-[#292722] text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[clamp(4rem,7vw,7rem)] drop-shadow-[0_2px_4px_rgba(255,255,255,0.25)]"
          >
            <span className="block">
              Travel as
            </span>

            <span className="block font-light italic">
              a Life Philosophy.
            </span>
          </h1>

          <div className="mx-auto mt-10 h-px w-16 bg-white/40" />

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 tracking-wide text-[#292722]/75 sm:text-base">
            Extraordinary journeys for people who believe that where we go
            changes who we become.
          </p>

          <div className="mt-11">
          <a
            href="#club"
            className="group inline-flex items-center gap-4 border border-[#b18a50]/70 bg-[#b18a50] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-white shadow-lg transition-all duration-500 hover:bg-[#98733f]"
          >
            <span>Explore the Club</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[8px] uppercase tracking-[0.45em] text-[#2b2925]/55">
            Scroll
          </span>

          <div className="relative h-12 w-px overflow-hidden bg-black/20">
            <div className="absolute left-0 top-0 h-1/2 w-px bg-[#9b7745]/70" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="bg-[#f5f1e8] px-6 py-20 text-[#1d1c19] sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Philosophy image */}
            <div className="overflow-hidden">
              <img
                src="/images/philosophy.jpg"
                alt="Luxury Mediterranean travel"
                className="h-full min-h-[420px] w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Philosophy content */}
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
                Our Philosophy
              </p>

              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                More Than Travel.
                <br />
                <span className="italic font-light">
                  A Way of Life.
                </span>
              </h2>

              <div className="mt-6 h-px w-12 bg-[#b18a50]" />

              <p className="mt-7 max-w-lg text-sm leading-7 text-[#292722]/70 sm:text-base">
                Private travel is an invitation to experience the world
                differently. We curate transformative journeys, meaningful
                relationships and access to extraordinary places.
              </p>

              <a
                href="#journeys"
                className="group mt-9 inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[#292722] transition-colors duration-300 hover:text-[#a47b43]"
              >
                <span>Discover Our Philosophy</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Decorative emblem */}
              <div className="pointer-events-none absolute -bottom-8 right-0 hidden h-24 w-24 items-center justify-center rounded-full border border-[#b18a50]/35 lg:flex">
                <span className="font-serif text-3xl text-[#b18a50]/70">
                  FT
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Journeys */}
      <section
        id="journeys"
        className="bg-[#f5f1e8] px-6 py-20 text-[#1d1c19] sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
                Curated experiences
              </p>

              <h2 className="mt-4 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                Featured Trips & Retreats
              </h2>
            </div>

            <a
              href="#"
              className="group hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#292722] sm:flex"
            >
              <span>View All Trips</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Trip cards */}
          <div className="grid gap-5 md:grid-cols-3">

            {/* Amalfi */}
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                <img
                  src="/images/amalfi.jpg"
                  alt="Amalfi Coast"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                    Italy
                  </p>

                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    Amalfi Coast Escape
                  </h3>

                  <p className="mt-2 text-[11px] text-white/75">
                    Jun 8 – 14, 2025
                  </p>
                </div>
              </div>
            </article>

            {/* Bali */}
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                <img
                  src="/images/bali.jpg"
                  alt="Bali luxury retreat"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                    Bali
                  </p>

                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    Bali Wellness Retreat
                  </h3>

                  <p className="mt-2 text-[11px] text-white/75">
                    Jul 20 – 27, 2025
                  </p>
                </div>
              </div>
            </article>

            {/* Serengeti */}
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                <img
                  src="/images/serengeti.jpg"
                  alt="Serengeti safari"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/75">
                    Tanzania
                  </p>

                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                    Serengeti Safari
                  </h3>

                  <p className="mt-2 text-[11px] text-white/75">
                    Aug 10 – 20, 2025
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-[#ebe5d9] px-6 py-20 text-[#1d1c19] sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Destination image */}
            <div className="relative overflow-hidden">
              <img
                src="/images/destination.jpg"
                alt="Luxury travel destination"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-[1.02] sm:h-[600px]"
              />

              <div className="absolute bottom-6 left-6">
                <span className="bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-[#292722]">
                  The Art of Escape
                </span>
              </div>
            </div>

            {/* Destination content */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
                Extraordinary destinations
              </p>

              <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[1] tracking-[-0.03em] sm:text-6xl">
                Places that
                <br />
                <span className="italic font-light">
                  stay with you.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-8 text-[#292722]/70 sm:text-base">
                From secluded Mediterranean villages to remote wilderness
                retreats, we seek places that inspire curiosity, wonder and
                a deeper connection with the world.
              </p>

              <div className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-black/15 pt-7">

                <div>
                  <p className="font-serif text-2xl">24</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-black/45">
                    Destinations
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl">12</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-black/45">
                    Private journeys
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl">18</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-black/45">
                    Exclusive stays
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl">1</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-black/45">
                    Private club
                  </p>
                </div>

              </div>

              <a
                href="#club"
                className="group mt-10 inline-flex items-center gap-4 border-b border-[#a47b43]/70 pb-2 text-[10px] uppercase tracking-[0.28em] transition duration-300 hover:border-[#a47b43]"
              >
                <span>Explore Our World</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Stories */}
      <section
        id="stories"
        className="bg-[#f5f1e8] px-6 py-20 text-[#1d1c19] sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
                The Journal
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Stories from
                <br />
                <span className="italic font-light">the road.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#292722]/60">
              Notes, perspectives and inspiration from the places that
              continue to shape the way we travel.
            </p>
          </div>

          {/* Stories */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* Alps */}
            <article className="group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/alps.jpg"
                  alt="The Alps"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    The Alps
                  </p>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Finding silence above the clouds.
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-black/15 py-5">
                <p className="max-w-md text-sm leading-6 text-black/55">
                  Remote valleys, exceptional mountain retreats and the
                  quiet luxury of slowing down.
                </p>

                <a
                  href="#"
                  className="group/link ml-6 flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.25em]"
                >
                  Read
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

            {/* Africa */}
            <article className="group md:mt-16">
              <div className="relative overflow-hidden">
                <img
                  src="/images/africa.jpg"
                  alt="African safari"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/70">
                    Africa
                  </p>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Where the wild remains infinite.
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-black/15 py-5">
                <p className="max-w-md text-sm leading-6 text-black/55">
                  Dawn on the savanna, extraordinary wildlife and the rare
                  feeling of being completely removed from the everyday.
                </p>

                <a
                  href="#"
                  className="group/link ml-6 flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.25em]"
                >
                  Read
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Membership */}
      <section
        id="club"
        className="bg-[#e8dfd1] px-6 py-24 text-[#1d1c19] sm:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#a47b43]">
            Private Membership
          </p>

          <div className="mx-auto mt-6 h-px w-12 bg-[#b18a50]" />

          <h2 className="mt-8 font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-7xl">
            The world is
            <br />
            <span className="italic font-light">
              waiting.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#292722]/65 sm:text-base">
            Join a private community of curious travelers and discover
            extraordinary places, meaningful experiences and a different
            way to experience the world.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex bg-[#b18a50] px-9 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-[#98733f]"
          >
            Discover Membership
          </a>

          <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-black/35">
            By invitation and application
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1c19] px-6 py-14 text-[#f5f1e8]">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">
              <p className="text-sm tracking-[0.28em]">
                PRIVATE TRAVEL CLUB
              </p>

              <p className="mt-7 max-w-md font-serif text-xl leading-relaxed text-white/90">
                Travel as a life philosophy.
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                Explore
              </p>

              <div className="mt-5 space-y-3 text-xs text-white/65">
                <a href="#journeys" className="block hover:text-white">
                  Journeys
                </a>

                <a href="#philosophy" className="block hover:text-white">
                  Philosophy
                </a>

                <a href="#stories" className="block hover:text-white">
                  Journal
                </a>

                <a href="#club" className="block hover:text-white">
                  Membership
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-xs text-white/65">
                <p>hello@privatetravelclub.com</p>
                <p>New York · London · Singapore</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-5 pt-7 text-[9px] uppercase tracking-[0.25em] text-white/35 sm:flex-row">
            <p>© 2026 Private Travel Club</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Instagram
              </a>

              <a href="#" className="hover:text-white">
                Privacy
              </a>

              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}