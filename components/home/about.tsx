"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, Users, ShieldCheck, Clock } from "lucide-react";
import { ReactNode } from "react";

// Type for Feature props
type FeatureProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function AboutSection() {
  return (
    <section className="relative bg-white w-full py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px]">
            <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/images/about/real-estate-left.jpg"
                alt="Real estate industry image"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div className="lg:ml-12 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-wide text-red-500 uppercase">
                About Us
              </span>
              <div className="flex gap-1 items-center">
                <span className="w-16 h-[2px] bg-red-500 block"></span>
                <span className="w-4 h-[2px] bg-red-500 block"></span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Reliable Partner in Real Estate Investment
            </h2>

            <p className="text-gray-600 mb-4">
              JPDL is a promising name in the modern real estate industry. We don’t just sell land or apartments — we secure your future with professional expertise and trust.
            </p>
            <p className="text-gray-600 mb-8">
              We focus on legal transparency, modern development, and premium quality to make sure your investment is safe and valuable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-b border-gray-200 pb-8">
              <Feature icon={<ShieldCheck className="w-5 h-5 text-red-500" />} title="Legal Transparency" desc="Verified & documented projects." />
              <Feature icon={<Building2 className="w-5 h-5 text-red-500" />} title="Premium Properties" desc="Luxury apartments & land." />
              <Feature icon={<Users className="w-5 h-5 text-red-500" />} title="Trusted Clients" desc="Long-term relationships." />
              <Feature icon={<Clock className="w-5 h-5 text-red-500" />} title="On-Time Delivery" desc="Projects delivered on time." />
            </div>

            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>Land sharing & residential development experts</li>
              <li>Modern & functional design approach</li>
              <li>Growing presence across Bangladesh</li>
            </ul>

            <Link
              href="/about"
              className="inline-block bg-red-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-red-600 transition"
            >
              Know More →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

// Typed Feature component
function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}