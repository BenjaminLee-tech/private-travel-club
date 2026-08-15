export default function TripsPage() {
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
            href="/"
            className="text-[10px] uppercase tracking-[0.25em] text-[#a47b43]"
          >
            Back to Home
          </a>

        </div>
      </header>


      {/* Page intro */}
      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#a47b43]">
            Curated Experiences
          </p>

          <h1 className="mt-6 font-serif text-5xl tracking-tight sm:text-7xl">
            Journeys Beyond Ordinary
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-[#292722]/65 sm:text-base">
            Discover private retreats, extraordinary destinations,
            and carefully curated journeys created for members of
            the Private Travel Club.
          </p>

        </div>

      </section>


      {/* Trips */}
      <section className="px-6 pb-24 sm:pb-32">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">

          <a
            href="/trips/private-villa-escape"
            className="group block overflow-hidden"
          >

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/destination-1.jpg"
                alt="Private luxury retreat"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-6">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#a47b43]">
                Private Retreat
              </p>

              <h2 className="mt-3 font-serif text-2xl">
                Private Villa Escape
              </h2>

            </div>

          </a>


          <a
            href="/trips/island-sanctuary"
            className="group block overflow-hidden"
          >

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/destination-2.jpg"
                alt="Hidden island retreat"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-6">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#a47b43]">
                Island Escape
              </p>

              <h2 className="mt-3 font-serif text-2xl">
                Island Sanctuary
              </h2>

            </div>

          </a>


          <a
            href="/trips/private-wilderness-journey"
            className="group block overflow-hidden"
          >

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/destination-3.jpg"
                alt="Exclusive wilderness journey"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-6">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#a47b43]">
                Wilderness
              </p>

              <h2 className="mt-3 font-serif text-2xl">
                Private Wilderness Journey
              </h2>

            </div>

          </a>

        </div>

      </section>

    </main>
  );
}