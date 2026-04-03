"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, HandCoins, Building2, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Buy Property in Bangladesh",
    desc: "Discover premium apartments, family homes, and investment properties across Dhaka, including Gulshan, Dhanmondi, and Bashundhara.",
    icon: Home,
    link: "/projects",
  },
  {
    title: "Sell Your Property Fast",
    desc: "List your property with us and connect with serious buyers. We ensure smooth transactions and maximum value for your assets.",
    icon: HandCoins,
    link: "/contact",
  },
  {
    title: "Find Rental Homes",
    desc: "Browse verified rental apartments and houses in prime locations with flexible options for families and professionals.",
    icon: Building2,
    link: "/projects",
  },
];

export default function HelpSlider() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f7f1ea] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SEO Heading */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 lg:mb-20 leading-tight">
          Real Estate Services in{" "}
          <span className="text-red-600 italic">Bangladesh</span>
        </h2>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
          {slides.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === active;

            return (
              <div
                key={i}
                className={`transition-all duration-500 w-full sm:w-[420px]
                  ${isActive ? "lg:scale-110 scale-100 z-20" : "scale-95 opacity-90"}
                `}
              >
                <div
                  className={`group rounded-3xl p-8 sm:p-10 lg:p-12 h-full transition-all duration-500 border
                    ${
                      isActive
                        ? "bg-red-600 text-white shadow-2xl border-red-600"
                        : "bg-white text-black hover:bg-red-600 hover:text-white border-gray-200 hover:shadow-2xl"
                    }
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className={`mb-6 sm:mb-8 h-14 w-14 sm:h-16 sm:w-16 transition-all duration-500
                      ${
                        isActive
                          ? "text-white"
                          : "text-red-500 group-hover:text-white"
                      }
                    `}
                  />

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed transition-all duration-500
                      ${
                        isActive
                          ? "text-white/90"
                          : "text-gray-600 group-hover:text-white/90"
                      }
                    `}
                  >
                    {item.desc}
                  </p>

                  {/* Button */}
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-3 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium transition-all duration-300
                      ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-gray-100 text-black group-hover:bg-white"
                      }
                    `}
                  >
                    Explore Now
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white group-hover:translate-x-1 transition">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}