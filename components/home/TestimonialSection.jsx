"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    text: "Buying our apartment in Dhaka was seamless with JFDL. Their team guided us through every step and helped us secure the perfect home in a prime location.",
    name: "— Arif Hossain",
    role: "Home Buyer, Dhaka",
  },
  {
    text: "JFDL helped me sell my property quickly at a competitive price. Their professionalism and market knowledge made the entire process stress-free.",
    name: "— Fatima Akter",
    role: "Property Seller, Dhaka",
  },
  {
    text: "As an investor, I rely on JFDL for smart property opportunities. Their deep understanding of the Bangladesh real estate market is unmatched.",
    name: "— Tanvir Rahman",
    role: "Real Estate Investor",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % reviews.length);
        setAnimate(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* SEO HEADING */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center lg:text-left">
          What Our Clients Say About{" "}
          <span className="text-primary">JFDL</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex gap-4 sm:gap-5 items-start mb-6 sm:mb-8">
              <span className="text-primary text-5xl sm:text-6xl leading-none">
                “
              </span>

              <div
                className={`transition-all duration-500 ease-out
                ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  {reviews[current].text}
                </p>

                <h4 className="text-primary font-semibold mt-5 text-base sm:text-lg">
                  {reviews[current].name}
                  <span className="text-gray-500 font-normal">
                    {" "}– {reviews[current].role}
                  </span>
                </h4>
              </div>
            </div>

            {/* DOTS */}
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 mt-12 sm:mt-16">
              <Counter end={15} suffix="+" label="Years Experience" />
              <Counter end={95} suffix="%" label="Client Satisfaction" />
              <Counter end={5} suffix="K+" label="Properties Served" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px]">
              <Image
                src="/images/family.png"
                alt="Happy clients of JFDL real estate Bangladesh"
                width={520}
                height={620}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* COUNTER COMPONENT */
function Counter({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <h3 className="text-primary font-bold text-3xl sm:text-5xl lg:text-6xl">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
}