"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "JPDL is a leading real estate company in Dhaka offering luxury apartments, land sharing, and commercial spaces in prime locations like Bashundhara, Gulshan, and Uttara.",
};

const slides = [
  {
    image: "/images/hero/slide1-new.png",
    tag: "Luxury Living",
    title: "Your Dream Home\nAwaits You",
    subtitle: "Premium residential & commercial real estate solutions in Bangladesh with 100% legal transparency.",
  },
  {
    image: "/images/hero/slide2.png",
    tag: "Modern Architecture",
    title: "Built for the\nFuture Generation",
    subtitle: "State-of-the-art design meets functional living — crafted for those who demand the best.",
  },
  {
    image: "/images/hero/slide3.jpg",
    tag: "Prime Locations",
    title: "Invest in the\nRight Location",
    subtitle: "Strategically selected plots and apartments in high-growth areas across Bangladesh.",
  },
  {
    image: "/images/hero/slide4.jpg",
    tag: "Trusted Partner",
    title: "Building Trust,\nOne Home at a Time",
    subtitle: "JPDL is committed to delivering secure, high-quality real estate investments you can rely on.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600);
    }, 5500);
    return () => clearInterval(timer);
  }, [animating]);

  return (
    <section
      aria-label="JPDL Hero Slider"
      className="relative w-full overflow-hidden h-[70vh] sm:h-[80vh] lg:h-screen"
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        const isPrev = index === (current - 1 + slides.length) % slides.length;

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              zIndex: isActive ? 10 : isPrev ? 9 : 0,
              transform: isActive
                ? "translateX(0%)"
                : animating && isPrev
                ? "translateX(-100%)"
                : "translateX(100%)",
              transition: "transform 700ms cubic-bezier(0.77,0,0.18,1)",
              opacity: isActive || isPrev ? 1 : 0,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="relative z-20 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
                <div className="max-w-2xl text-white">

                  <span className="inline-block mb-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-white/70 border border-white/30 px-3 py-1">
                    {slide.tag}
                  </span>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight whitespace-pre-line">
                    {slide.title}
                  </h1>

                  <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 max-w-lg leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                    <button className="bg-white text-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-gray-100 transition-all duration-300">
                      Explore Projects
                    </button>
                    <button className="border border-white/60 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                      Contact Us
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* DOTS ONLY */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? "bg-white w-8 h-2.5"
                : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}