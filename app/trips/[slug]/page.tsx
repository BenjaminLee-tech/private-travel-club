const trips = {
  "private-villa-escape": {
    location: "Italy",
    title: "Private Villa Escape",
    image: "/images/destination-1.jpg",
    description:
      "A secluded retreat designed around privacy, beautiful surroundings, and unhurried days.",
  },

  "island-sanctuary": {
    location: "Maldives",
    title: "Island Sanctuary",
    image: "/images/destination-2.jpg",
    description:
      "An intimate island experience combining exceptional accommodation, ocean views, and complete tranquility.",
  },

  "private-wilderness-journey": {
    location: "Africa",
    title: "Private Wilderness Journey",
    image: "/images/destination-3.jpg",
    description:
      "A carefully designed wilderness journey offering extraordinary landscapes, private access, and authentic encounters.",
  },
};

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const trip = trips[slug as keyof typeof trips];

  if (!trip) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f1e8] text-[#1d1c19]">
        <div className="text-center">
          <h1 className="font-serif text-4xl">
            Journey Not Found
          </h1>

          <a
            href="/trips"
            className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-[#a47b43]"
          >
            Back to Trips
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1d1c19]">

      {/* Hero image */}

      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-10 left-6 right-6 text-white sm:bottom-16">

          <div className="mx-auto max-w-7xl">

            <p className="text-[10px] uppercase tracking-[0.4em] text-white/75">
              {trip.location}
            </p>

            <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-6xl">
              {trip.title}
            </h1>

          </div>

        </div>

      </section>


      {/* Details */}

      <section className="px-6 py-20 sm:py-28">

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_280px]">

          <div>

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
              The Experience
            </p>

            <p className="mt-6 max-w-2xl text-base leading-loose text-[#292722]/70">
              {trip.description}
            </p>

          </div>


          <div>

            <a
              href="/contact"
              className="block w-full bg-[#292722] px-6 py-4 text-center text-[10px] uppercase tracking-[0.3em] text-white transition hover:bg-[#a47b43]"
            >
              Request This Journey
            </a>

            <a
              href="/trips"
              className="mt-4 block w-full border border-[#292722]/20 px-6 py-4 text-center text-[10px] uppercase tracking-[0.3em] transition hover:border-[#a47b43] hover:text-[#a47b43]"
            >
              Back to Trips
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}