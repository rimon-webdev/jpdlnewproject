"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="bg-[#faf7f2] py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* LEFT – IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:sticky lg:top-28 h-fit"
        >
          {["img1", "img2", "img3", "img4"].map((img, i) => (
            <div
              key={i}
              className="rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg"
            >
              <Image
                src={`/images/${img}.jpg`}
                alt="JFDL real estate property in Bangladesh"
                width={500}
                height={600}
                className="w-full h-[160px] sm:h-[220px] md:h-[260px] lg:h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">

          {/* SEO TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
          >
            Maximize Your Property Value With{" "}
            <span className="text-red-500 italic">JFDL</span>
          </motion.h2>

          {/* FEATURES */}
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 pb-6 sm:pb-8 flex items-start justify-between gap-4 sm:gap-6"
            >
              <div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md">
                  {item.desc}
                </p>
              </div>

              {/* ICON */}
              <div className="text-red-500 text-2xl sm:text-3xl lg:text-4xl">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Trusted Real Estate Experts",
    desc: "JFDL provides reliable property solutions across Bangladesh, helping clients buy, sell, and invest with confidence and transparency.",
    icon: "🏆",
  },
  {
    title: "Long-Term Investment Vision",
    desc: "We focus on sustainable growth and high-value properties in Dhaka’s prime areas to ensure strong returns over time.",
    icon: "🏢",
  },
  {
    title: "Client-Focused Approach",
    desc: "Our priority is building long-term relationships by understanding your needs and delivering tailored real estate solutions.",
    icon: "🤝",
  },
  {
    title: "Results-Driven Strategy",
    desc: "From property selection to final deal, JFDL ensures smooth processes and successful outcomes for every client.",
    icon: "📍",
  },
];