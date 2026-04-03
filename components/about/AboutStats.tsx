import Image from "next/image";
export const metadata = {
  title: "About Us",
  description:
    "Learn about JPDL, a trusted real estate company in Bangladesh with years of experience in residential and commercial property development.",
};

const items = [
  {
    title: "MISSION",
    desc: "To deliver planned urbanization through high-quality land sharing and apartment projects at affordable prices, right to our customers' doorsteps. To empower our clients with secure and premium real estate solutions. We strive to deliver projects that combine modern aesthetics with legal certainty, ensuring that every investment with JPDL is a step toward a prosperous future.",
    img: "/images/mission.jpg",
  },
  {
    title: "BRAND PROMISE",
    desc: "We promise quality, transparency and long-term value.",
    img: "/images/brand.jpg",
  },
  {
    title: "VISION",
    desc: "To become the most trusted benchmark in the real estate industry by redefining urban living through innovation, sustainability, and uncompromising integrity.",
    img: "/images/vision.jpg",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative h-[420px] cursor-pointer overflow-hidden"
          >
            {/* IMAGE */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* HOVER TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-3xl font-semibold tracking-widest mb-4">
                {item.title}
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>

            {/* DEFAULT TITLE */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition duration-300">
              <h3 className="text-white text-3xl font-semibold tracking-widest">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}