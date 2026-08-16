"use client";

import { useEffect, useState } from "react";
import ConciergeSection from "@/components/ConciergeSection";

const navItems = [
  { label: "Journeys", href: "#journeys" },
  { label: "The Club", href: "/the-club" },
  { label: "Stories", href: "#stories" },
];

export default function Home() {

    const heroImages = [
    "/images/travel-hero-1.jpg",
    "/images/travel-hero-2.jpg",
    "/images/travel-hero-3.jpg",
    "/images/travel-hero-4.jpg",
    "/images/travel-hero-5.jpg",
  ];

  const [currentHero, setCurrentHero] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [previousHero, setPreviousHero] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {

    const timer = setInterval(() => {

      setPreviousHero(currentHero);

      setCurrentHero(
        (currentHero + 1) % heroImages.length
      );

      setIsTransitioning(true);


      setTimeout(() => {
        setPreviousHero(null);
        setIsTransitioning(false);
      }, 1000);


    }, 7000);


    return () => clearInterval(timer);

  }, [currentHero]);
  
  return (
    <main className="min-h-screen bg-[#0b0b0a] text-[#f5f1e8]">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 lg:px-4">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center ml-0"
          >
            <img
              src="/images/ptc-logo.png"
              alt="Private Travel Club"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
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
              href="/login"
              className="ml-3 border border-[#a47b43]/60 px-5 py-2.5 text-[12px] uppercase tracking-[0.24em] text-[#292722] transition hover:bg-[#b18a50] hover:text-white"
            >
              Login
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#292722] text-2xl"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>

        </div>

        {mobileMenuOpen && (
        <div className="border-t border-black/10 bg-white/95 px-6 py-6 backdrop-blur-md md:hidden">

          <nav className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] uppercase tracking-[0.3em] text-[#292722]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="border border-[#a47b43]/60 px-5 py-3 text-center text-[11px] uppercase tracking-[0.3em] text-[#292722]"
            >
              Login
            </a>

          </nav>

        </div>
      )}
      </header>

      {/* Hero */}
      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          flex
          items-center
        "
      >

      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Old image fading out */}
        {previousHero !== null && (
          <div
            className="
              absolute inset-0
              bg-cover
              bg-center
              animate-heroOut
            "
            style={{
              backgroundImage:
                `url('${heroImages[previousHero]}')`,
            }}
          />
        )}


        {/* New image fading in + zooming */}
        <div
          key={currentHero}
          className="
            absolute inset-0
            bg-cover
            bg-center
            animate-heroZoom
            animate-heroFade
          "
          style={{
            backgroundImage:
              `url('${heroImages[currentHero]}')`,
          }}
        />

      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
        "
      >

          <p className="hero-eyebrow mb-8 text-[11px] uppercase tracking-[0.55em] text-[#d6b27a]">
            Private Travel Club
          </p>

          <h1
            className="
            hero-title
            text-3xl
            font-light
            leading-tight
            tracking-wide
            sm:text-7xl
            "
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.55)",
            }}
          >
            Travel as a
            <br />
            Life Philosophy.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            A private community for individuals who believe travel is
            not simply about destinations, but about experiences,
            culture, connection, and personal transformation.
          </p>

          <div className="mt-12 flex justify-center gap-5">

            <a
              href="#club"
              className="rounded-full bg-[#a47b43] px-7 py-3.5 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-[#b9925c]"
            >
              Apply for Membership
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.35em] text-white transition duration-300 hover:bg-white hover:text-[#292722]"
            >
              Explore
            </a>

          </div>

        </div>

      </section>

      {/* AI Concierge */}
      <ConciergeSection />

      {/* Philosophy */}
      <section
        id="philosophy"
        className="bg-[#f7f4ee] px-6 py-24 text-[#1d1c19] sm:py-32"
      >

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-10
            px-6
            md:grid-cols-2
            md:gap-12
          "
        >

          {/* Philosophy Image */}
          <div className="overflow-hidden">
          <img
            src="/images/philosophy.jpg"
            alt="Private travel experience"
            className="
              h-[360px]
              w-full
              object-cover
              sm:h-[520px]
              rounded-sm
              shadow-xl
            "
          />
          </div>


          {/* Philosophy Content */}
          <div className="flex flex-col justify-center pt-8 md:pt-0">

            <p className="text-[11px] uppercase tracking-[0.5em] text-[#a47b43]">
              Our Philosophy
            </p>

            <div className="mt-6 h-px w-16 bg-[#a47b43]" />

            <h2
              className="mt-8 text-4xl font-light leading-tight tracking-wide sm:text-6xl"
              style={{
                textShadow:
                  "0 3px 15px rgba(80,60,30,0.18)",
              }}
            >
              More Than Travel.
              <br />
              <span className="italic">
                A Way of Life.
              </span>
            </h2>


            <p className="mt-8 text-sm leading-loose text-[#292722]/70 sm:text-base">
              Private travel is an invitation to experience the world
              differently — with greater depth, intention, and connection.
            </p>


            <p className="mt-6 text-sm leading-loose text-[#292722]/70 sm:text-base">
              We believe meaningful journeys create deeper connections,
              inspire curiosity, and transform the way we understand
              ourselves and the world around us.
            </p>

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
              href="/trips"
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
                  href="/trips/private-villa-escape"
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
                  href="/trips/private-wilderness-journey"
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

      {/* Philosophy */}
      <section
        id="about"
        className="bg-[#e8dfd1] px-6 py-24 text-[#292722] sm:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-[11px] uppercase tracking-[0.55em] text-[#a47b43]">
            Our Philosophy
          </p>

          <h2
            className="mt-8 text-4xl font-light leading-tight tracking-wide sm:text-6xl"
            style={{
              textShadow: "0 4px 18px rgba(60,45,20,0.18)",
            }}
          >
            Travel as a Life Philosophy.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-loose text-[#292722]/70 sm:text-base">
            We believe travel is more than movement.
            It is a way to discover new perspectives,
            create meaningful connections, and experience
            the world with intention.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-10 sm:grid-cols-3">

            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#a47b43]">
                Discover
              </h3>
              <p className="mt-4 text-sm text-[#292722]/70">
                Hidden places, authentic cultures, and unforgettable moments.
              </p>
            </div>


            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#a47b43]">
                Connect
              </h3>
              <p className="mt-4 text-sm text-[#292722]/70">
                A community of travelers who share curiosity and passion.
              </p>
            </div>


            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#a47b43]">
                Transform
              </h3>
              <p className="mt-4 text-sm text-[#292722]/70">
                Journeys that influence how we see ourselves and the world.
              </p>
            </div>

          </div>

        </div>
      </section>     

      <div className="h-0" />

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
            href="/the-club"
            className="mt-10 inline-flex bg-[#b18a50] px-9 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition duration-300 hover:bg-[#98733f]"
          >
            Discover Membership
          </a>

          <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-black/35">
            By invitation and application
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      <section
        id="destinations"
        className="bg-[#292722] px-6 py-24 text-white sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <p className="text-[11px] uppercase tracking-[0.55em] text-[#d6b27a]">
              Featured Destinations
            </p>

            <h2
              className="mt-8 text-4xl font-light tracking-wide sm:text-6xl"
            >
              Journeys Beyond
              <br />
              Ordinary Travel.
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-3">


            {/* Card 1 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/destination-1.jpg"
                  alt="Luxury destination"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Mediterranean Escape
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Private coastal experiences and timeless landscapes.
              </p>

            </article>


            {/* Card 2 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/destination-2.jpg"
                  alt="Mountain destination"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Alpine Retreat
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Remote mountain journeys designed for reflection.
              </p>

            </article>


            {/* Card 3 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/destination-3.jpg"
                  alt="Island destination"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Island Sanctuary
              </h3>

              <p className="mt-3 text-sm text-white/60">
                Exclusive escapes surrounded by nature.
              </p>

            </article>


          </div>

        </div>

      </section>      

      {/* Private Experiences */}
      <section
        id="experiences"
        className="bg-[#f3eee5] px-6 py-24 text-[#292722] sm:py-32"
      >

        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-16 text-center">

            <p className="text-[11px] uppercase tracking-[0.55em] text-[#a47b43]">
              Private Experiences
            </p>

            <h2
              className="mt-8 text-4xl font-light leading-tight tracking-wide sm:text-6xl"
            >
              Beyond Travel.
              <br />
              Into Experiences.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-[#292722]/70 sm:text-base">
              Every journey is designed around exceptional moments,
              personal discovery, and access to experiences unavailable
              to ordinary travelers.
            </p>

          </div>


          {/* Experience Cards */}
          <div className="grid gap-8 md:grid-cols-3">


            {/* Card 1 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/experience-1.jpg"
                  alt="Private luxury retreat"
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Private Retreats
              </h3>

              <p className="mt-3 text-sm text-[#292722]/70">
                Exceptional villas and hidden destinations created
                for complete privacy.
              </p>

            </article>


            {/* Card 2 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/experience-2.jpg"
                  alt="Luxury transportation experience"
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Exclusive Access
              </h3>

              <p className="mt-3 text-sm text-[#292722]/70">
                Private aviation, yachts, and unique journeys
                beyond traditional travel.
              </p>

            </article>


            {/* Card 3 */}
            <article className="group">

              <div className="overflow-hidden">
                <img
                  src="/images/experience-3.jpg"
                  alt="Cultural experience"
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-light">
                Cultural Moments
              </h3>

              <p className="mt-3 text-sm text-[#292722]/70">
                Authentic encounters, cuisine, and stories
                from around the world.
              </p>

            </article>


          </div>

        </div>

      </section>

      {/* Membership Invitation */}
      <section
        id="membership"
        className="relative overflow-hidden bg-[#292722] px-6 py-28 text-white sm:py-36"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[11px] uppercase tracking-[0.55em] text-[#d6b27a]">
            Membership Invitation
          </p>


          <h2
            className="mt-8 text-4xl font-light leading-tight sm:text-6xl"
          >
            Enter a World
            <br />
            Beyond Ordinary.
          </h2>


          <p
            className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-white/70 sm:text-base"
          >
            Membership provides access to exceptional destinations,
            private experiences, and a global community of
            passionate travelers.
          </p>


          <div className="mt-12">

            <a
              href="/contact"
              className="inline-block rounded-full border border-[#d6b27a] px-10 py-4 text-[11px] uppercase tracking-[0.35em] text-[#d6b27a] transition duration-300 hover:bg-[#d6b27a] hover:text-[#292722]"
            >
              Request Membership
            </a>

          </div>


        </div>

      </section>

      {/* Footer */}
      <footer
        className="bg-[#1d1c19] px-6 py-16 text-white"
      >

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-12 md:grid-cols-3">


            {/* Brand */}
            <div>

              <h3 className="text-xl font-light tracking-[0.25em]">
                PRIVATE
                <br />
                TRAVEL CLUB
              </h3>


              <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
                Curated journeys, private experiences,
                and meaningful connections around the world.
              </p>

            </div>



            {/* Navigation */}
            <div>

              <h4 className="text-[11px] uppercase tracking-[0.45em] text-[#d6b27a]">
                Explore
              </h4>


              <ul className="mt-6 space-y-4 text-sm text-white/70">

                <li>
                  <a href="#about" className="transition hover:text-white">
                    Philosophy
                  </a>
                </li>

                <li>
                  <a href="#destinations" className="transition hover:text-white">
                    Destinations
                  </a>
                </li>

                <li>
                  <a href="#experiences" className="transition hover:text-white">
                    Experiences
                  </a>
                </li>

              </ul>

            </div>



            {/* Contact */}
            <div>

              <h4 className="text-[11px] uppercase tracking-[0.45em] text-[#d6b27a]">
                Contact
              </h4>


              <p className="mt-6 text-sm leading-relaxed text-white/70">
                Membership inquiries
                <br />
                concierge@privatetravelclub.com
              </p>


            </div>


          </div>



          <div className="mt-16 border-t border-white/10 pt-8 text-center">

            <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
              © 2026 Private Travel Club. All Rights Reserved.
            </p>

          </div>


        </div>


      </footer>
    </main>
  );
}