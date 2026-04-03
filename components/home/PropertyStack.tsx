import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    tag: "For Sale",
    title: "Modern Family Home",
    location: "Dhanmondi, Dhaka",
    beds: "4 Bed",
    baths: "3 Bath",
    size: "2800 sqft",
    image: "/images/properties/property1.jpg",
  },
  {
    id: 2,
    tag: "For Rent",
    title: "Stylish City Apartment",
    location: "Gulshan, Dhaka",
    beds: "3 Bed",
    baths: "2 Bath",
    size: "1900 sqft",
    image: "/images/properties/property2.jpg",
  },
  {
    id: 3,
    tag: "For Sale",
    title: "Luxury Lake View Villa",
    location: "Bashundhara R/A, Dhaka",
    beds: "5 Bed",
    baths: "4 Bath",
    size: "4200 sqft",
    image: "/images/properties/property3.jpg",
  },
];

export default function PropertyStack() {
  return (
    <section className="relative bg-[#fafafa] py-20 lg:py-32">
      <div className="relative space-y-20 lg:space-y-32">
        {properties.map((item, index) => (
          <div
            key={item.id}
            className="sticky top-20 lg:top-24 mx-auto max-w-7xl px-4 sm:px-6"
            style={{ zIndex: 10 + index }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl lg:shadow-2xl">
              
              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block rounded-full bg-red-500 px-4 py-1 text-xs font-medium text-white">
                  {item.tag}
                </span>

                <h3 className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  {item.title}
                  <br />
                  <span className="text-gray-500 font-normal text-lg sm:text-xl">
                    {item.location}
                  </span>
                </h3>

                {/* Meta */}
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base">
                  <span>🛏 {item.beds}</span>
                  <span>🛁 {item.baths}</span>
                  <span>📐 {item.size}</span>
                </div>

                <div className="mt-6 h-px w-full bg-gray-200" />

                {/* Optional short description */}
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Perfect for comfortable living in a prime location with easy access 
                  to schools, shopping areas, and daily essentials.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-[250px] sm:h-[320px] lg:h-[420px] w-full rounded-xl lg:rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Arrow button */}
                <Link
                  href="/projects"
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur hover:bg-white transition"
                >
                  ↗
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}