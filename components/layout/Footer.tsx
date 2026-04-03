import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f111a] text-white">
      {/* CTA TOP */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
              Join our AI-driven Creative Community!
            </h2>
            <p className="text-white/70 max-w-xl">
              Let’s talk to us, share your dream project and we will transform it into reality
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 text-sm font-medium hover:bg-red-600 transition"
          >
            Get In Touch
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-red-500 text-3xl font-bold">J</div>
            <div>
              <h3 className="text-2xl font-semibold">JPDL</h3>
              <p className="text-xs text-white/50">REAL ESTATE COMPANY</p>
            </div>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Renvia is a trusted real estate group specializing residential,
            commercial, investment properties commitment.
          </p>

          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-red-500 transition"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-6 text-lg font-semibold relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-red-500" />
          </h4>

          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/projects">Our Projects</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-6 text-lg font-semibold relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-red-500" />
          </h4>

          <ul className="space-y-4 text-sm text-white/70">
            <li>Investment & Capital</li>
            <li>Market Insights</li>
            <li>Architecture & Design</li>
            <li>Real Estate Development</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="mb-6 text-lg font-semibold relative inline-block">
            Newsletter
            <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-red-500" />
          </h4>

          <p className="text-white/70 text-sm mb-6">
            Subscribe to Our Newsletter. Regular inspection and feedback mechanisms
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-white/5 px-6 py-4 text-sm outline-none placeholder:text-white/40"
            />
            <button className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>Copyright © 2026 jpdl. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
