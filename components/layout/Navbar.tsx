"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const projects = [
  { name: "Residential", href: "/projects/residential" },
  { name: "Commercial", href: "/projects/commercial" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="RealEst Real Estate Company"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>

          {/* DESKTOP DROPDOWN */}
          <li className="relative group">
            <Link
              href="/projects"
              className="relative inline-flex items-center after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all group-hover:after:w-full"
            >
              Properties
            </Link>

            {/* Hover gap */}
            <div className="absolute left-0 top-full h-3 w-full" />

            <ul className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-56 rounded-xl border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {projects.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/connect">Contact</NavItem>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-sm font-medium">
            <MobileItem href="/" close={setMenuOpen}>
              Home
            </MobileItem>

            <MobileItem href="/about" close={setMenuOpen}>
              About
            </MobileItem>

            {/* MOBILE DROPDOWN */}
            <li>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex w-full items-center justify-between"
              >
                Properties
                <span>{mobileDropdown ? "−" : "+"}</span>
              </button>

              {mobileDropdown && (
                <ul className="mt-3 ml-4 space-y-2">
                  {projects.map((item) => (
                    <MobileItem
                      key={item.href}
                      href={item.href}
                      close={setMenuOpen}
                    >
                      {item.name}
                    </MobileItem>
                  ))}
                </ul>
              )}
            </li>

            <MobileItem href="/gallery" close={setMenuOpen}>
              Gallery
            </MobileItem>

            <MobileItem href="/connect" close={setMenuOpen}>
              Contact
            </MobileItem>
          </ul>
        </div>
      )}
    </header>
  );
}

/* DESKTOP LINK */
function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
      >
        {children}
      </Link>
    </li>
  );
}

/* MOBILE LINK */
function MobileItem({
  href,
  children,
  close,
}: {
  href: string;
  children: React.ReactNode;
  close: (v: boolean) => void;
}) {
  return (
    <li>
      <Link href={href} onClick={() => close(false)} className="block">
        {children}
      </Link>
    </li>
  );
}