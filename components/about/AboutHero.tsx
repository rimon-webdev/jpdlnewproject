import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "Learn about JPDL, a trusted real estate company in Bangladesh with years of experience in residential and commercial property development.",
};

const AboutHero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/images/team/aboutbg.jpg" // image path (public folder)
        alt="About background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-bold text-center">
            About
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-6xl text-gray-200 text-center">
           VALUE BREEDS VOLUME
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
