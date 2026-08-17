"use client";

import { useState } from "react";

const navItems = [
  { label: "Concierge", href: "/#concierge" },
  { label: "Journeys", href: "/#journeys" },
  { label: "The Club", href: "/the-club" },
  { label: "Stories", href: "/#stories" },
];

export default function SiteNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 lg:px-4">

        {/* Logo */}
        <a
          href="/"
          className="ml-0 flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/images/ptc-logo.png"
            alt="Private Travel Club"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-2xl text-[#292722] md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
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
  );
}