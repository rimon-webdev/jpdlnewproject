import Image from "next/image";
export const metadata = {
  title: "About Us",
  description:
    "Learn about JPDL, a trusted real estate company in Bangladesh with years of experience in residential and commercial property development.",
};

const AboutContent = () => {
  return (
    <section className="bg-black text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-400 uppercase mb-4">
            Relentless in going beyond
          </h3>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            ABOUT US
          </h2>

          <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              JPDL is a promising name in the modern real estate industry. We don't just sell land or apartments; we ensure a secure destination for your dreams. Transparency, integrity, and modern architectural excellence are the foundations of our work. We believe that a right investment can transform the future for you and your family.
            </p>
            <p>
              JPDL is a leading real estate organization dedicated to elevating modern living standards. We specialize in land acquisition, land sharing, and the sale of luxury apartments. Our primary goal is to ensure superior quality and legal transparency, providing our clients with the guarantee of a safe and profitable investment.
            </p>
            <p>
              As a trusted name in Bangladesh's real estate sector, JPDL is committed to providing 100% legal security and premium standards. We don't just sell property or flats; we build long-term relationships founded on trust with all customers and each other.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white mb-5 tracking-wide uppercase">
              Key Highlights of JPDL
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Legal Integrity",
                  desc: "Every project is backed by 100% legal transparency and documentation.",
                },
                {
                  title: "Modern Design",
                  desc: "We integrate contemporary architectural aesthetics with functional living spaces.",
                },
                {
                  title: "Client-Centric",
                  desc: "We focus on building lasting relationships rather than just closing transactions.",
                },
                {
                  title: "Expertise",
                  desc: "Specialized in land sharing and luxury residential developments.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-white shrink-0" />
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    <span className="text-white font-semibold">{item.title}:</span>{" "}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative h-[260px] sm:h-[520px]">
            <Image
              src="/images/about-1.jpg"
              alt="About image 1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[320px] sm:h-[420px] lg:h-[620px]">
            <Image
              src="/images/about-2.jpg"
              alt="About image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;