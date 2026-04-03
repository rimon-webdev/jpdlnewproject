"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    location: "Gulshan, Dhaka",
    type: "Apartment",
    title: "Premium Family Apartment",
    image: "/images/project1.jpg",
  },
  {
    location: "Dhanmondi, Dhaka",
    type: "Residential",
    title: "Modern Living Space",
    image: "/images/project2.jpg",
  },
  {
    location: "Bashundhara R/A, Dhaka",
    type: "Luxury",
    title: "Lake View Residence",
    image: "/images/project3.jpg",
  },
  {
    location: "Uttara, Dhaka",
    type: "Commercial",
    title: "Corporate Office Building",
    image: "/images/project4.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* LEFT CONTENT (STICKY) */}
        <div className="lg:sticky lg:top-28 h-fit">
          <span className="text-sm text-red-500 font-semibold uppercase tracking-wide">
            Featured Projects
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Explore Top Real Estate <br /> Projects in Bangladesh
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-500 max-w-md">
            We provide trusted real estate solutions across Dhaka’s prime
            locations including Gulshan, Dhanmondi, Bashundhara, and Uttara.
            Our focus is on quality living, smart investment, and long-term value.
          </p>

          <button className="mt-8 sm:mt-10 inline-flex items-center gap-2 bg-red-500 text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-red-600 transition">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* RIGHT PROJECT LIST */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 md:gap-8 border-b pb-10 sm:pb-12"
            >
              {/* TEXT */}
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-500">
                  📍 {item.location} &nbsp; · &nbsp; {item.type}
                </p>

                <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-md">
                  Designed for modern lifestyles with premium finishes,
                  excellent connectivity, and access to essential services
                  like schools, hospitals, and shopping centers.
                </p>

                <button className="mt-4 sm:mt-5 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition group-hover:translate-x-1">
                  <ArrowUpRight size={18} />
                </button>
              </div>

              {/* IMAGE */}
              <div
                className="
                  w-full sm:w-44 sm:h-44
                  md:w-52 md:h-52
                  lg:w-60 lg:h-60
                  relative rounded-xl sm:rounded-2xl overflow-hidden shrink-0
                "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}