import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Top Locations to Buy Property in Dhaka",
    date: "10 Feb 2026",
    author: "JFDL Team",
    image: "/blog1.jpg",
  },
  {
    title: "Real Estate Investment Tips in Bangladesh",
    date: "22 Mar 2026",
    author: "JFDL Team",
    image: "/blog2.jpg",
  },
  {
    title: "Apartment vs House: What’s Best in Dhaka?",
    date: "05 Apr 2026",
    author: "JFDL Team",
    image: "/blog3.jpg",
    highlight: true,
  },
];

export default function LatestBlogSection() {
  return (
    <section className="bg-[#f6f1eb] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10 lg:mb-14">
          
          {/* SEO Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Latest Real Estate Insights <br />
            from <span className="text-rose-600 italic">JFDL</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <p className="max-w-sm text-gray-600 text-sm sm:text-base">
              Stay updated with expert insights on Bangladesh real estate,
              property investment trends, and buying or selling tips in Dhaka.
            </p>

            <button className="flex items-center gap-2 bg-rose-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-rose-700 transition">
              Explore All
              <span className="bg-black text-white w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">
                →
              </span>
            </button>
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="relative group">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={blog.image}
                  alt={`${blog.title} - JFDL real estate blog Bangladesh`}
                  width={500}
                  height={500}
                  className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* HIGHLIGHT BUTTON */}
              {blog.highlight && (
                <button className="absolute bottom-24 right-4 bg-rose-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <ArrowUpRight size={18} />
                </button>
              )}

              {/* CONTENT */}
              <div className="mt-3 sm:mt-4">
                <h3 className="text-lg sm:text-xl font-semibold hover:text-rose-600 transition cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {blog.date} – By {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}