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
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <div className="text-sm font-medium tracking-[0.28em]">
            PRIVATE TRAVEL CLUB
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.2em] text-white/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#"
              className="ml-3 border border-white/30 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Login
            </a>
          </nav>

          <button
            className="text-[11px] uppercase tracking-[0.2em] md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/75" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center">
          <p className="mb-7 text-[11px] uppercase tracking-[0.45em] text-white/75">
            A private collection of extraordinary journeys
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            Travel as a
            <br />
            <span className="italic">life philosophy.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Extraordinary journeys for people who believe that where we go
            changes who we become.
          </p>

          <div className="mt-10">
            <a
              href="#club"
              className="inline-flex border border-white/60 px-8 py-4 text-[11px] uppercase tracking-[0.25em] transition duration-300 hover:bg-white hover:text-black"
            >
              Explore the Club
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/55">
            Scroll
          </span>
          <div className="h-10 w-px bg-white/35" />
        </div>
      </section>

      {/* Introduction */}
      <section
          id="philosophy"
        className="bg-[#f0ece3] px-6 py-28 text-[#171715] sm:py-36"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/50">
            The philosophy
          </p>

          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-6xl">
            Not simply places.
            <br />
            <span className="italic">A way of seeing the world.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
            We curate journeys that go beyond the itinerary — intimate
            encounters, remarkable landscapes, exceptional places to stay,
            and experiences that remain long after the journey ends.
          </p>
        </div>
      </section>

      {/* Featured Journeys */}
      <section
        id="journeys"
      className="bg-[#0b0b0a] px-6 py-28 text-[#f5f1e8] sm:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">
                Featured journeys
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-6xl">
                Places worth
                <br />
                <span className="italic">remembering.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/50">
              A collection of journeys created for those who prefer the
              extraordinary to the ordinary.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Journey 01 */}
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1916]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                    Journey 01
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">Singapore</h3>
                </div>
              </div>
            </article>

            {/* Journey 02 */}
            <article className="group md:mt-16">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1916]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                    Journey 02
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">The Alps</h3>
                </div>
              </div>
            </article>

            {/* Journey 03 */}
            <article className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1916]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                    Journey 03
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">Africa</h3>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section
        id="stories"
        className="bg-[#151412] px-6 py-28 text-[#f5f1e8] sm:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/45">
              Journal
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
              Stories from
              <br />
              <span className="italic">the road.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="border-t border-white/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Singapore
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                A city where East meets tomorrow.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Beyond the skyline lies a world of quiet gardens, extraordinary
                cuisine, hidden spaces and unexpected encounters.
              </p>

              <button className="mt-7 text-[10px] uppercase tracking-[0.25em] text-white/70">
                Read story →
              </button>
            </article>

            <article className="border-t border-white/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                The Alps
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                Finding silence above the clouds.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                A journey through remote valleys, exceptional mountain retreats and
                landscapes that reward those willing to slow down.
              </p>

              <button className="mt-7 text-[10px] uppercase tracking-[0.25em] text-white/70">
                Read story →
              </button>
            </article>

            <article className="border-t border-white/15 pt-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                Africa
              </p>

              <h3 className="mt-5 font-serif text-2xl">
                Where the wild remains infinite.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/50">
                Dawn on the savanna, extraordinary wildlife and the rare feeling of
                being completely removed from the everyday world.
              </p>

              <button className="mt-7 text-[10px] uppercase tracking-[0.25em] text-white/70">
                Read story →
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* Membership Invitation */}
      <section
        id="club"
        className="bg-[#f0ece3] px-6 py-28 text-[#171715] sm:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-black/45">
            Private membership
          </p>

          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-6xl">
            The world is
            <br />
            <span className="italic">waiting.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
            Join a private community of curious travelers and discover a
            different way to experience the world.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex border border-black/30 px-8 py-4 text-[11px] uppercase tracking-[0.25em] transition duration-300 hover:bg-black hover:text-white"
          >
            Discover Membership
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0a] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
            Private Travel Club
          </p>

          <p className="text-xs text-white/35">
            Travel as a life philosophy.
          </p>

          <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            © 2026
          </p>
        </div>
      </footer>
    </main>
  );
}