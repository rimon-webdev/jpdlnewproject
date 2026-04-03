import Image from "next/image";
export const metadata = {
  title: "About Us",
  description:
    "Learn about JPDL, a trusted real estate company in Bangladesh with years of experience in residential and commercial property development.",
};

export default function AboutLeadership() {
  return (
    <section className="bg-[#b8b6b6] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* PERSON 1 – Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide mb-2">
              MD. Asaduzzaman Asad
            </h2>
            <p className="text-sm text-white/70 mb-6 relative inline-block">
              Managing Director
              <span className="absolute left-0 -bottom-2 h-[2px] w-10 bg-red-500"></span>
            </p>

            <div className="text-white/80 text-sm leading-relaxed space-y-4 max-w-xl">
              <p>
                Mr. Md. asaduzzaman asad comes of a reputed Muslim family
                of Lakshmipur. He has graduated from Dhaka College followed by
                an MBA from South East University.
              </p>

              <p>
                He is the Managing Director of renowned Jpdl Development Ltd and
                Jpdl Trading Ltd. He has played a great role in the industry by
                earning FDI (Foreign Direct Investment) through joint venture
                business enterprise with Japanese CREED Group.
              </p>

              <p>
                Mr. Chowdhury is involved in many social activities and widely
                acclaimed for his philanthropic contributions to society.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[420px] lg:h-[520px]">
            <Image
              src="/images/team/Managing Director.jpg"
              alt="MD Iqbal Hossain Chowdhury"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>

        {/* PERSON 2 – Image Left / Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-[420px] lg:h-[520px] order-1 lg:order-none">
            <Image
              src="/images/team/second-person.jpg"
              alt="Director"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-wide mb-2">
              MD. ABDULLAH AL MAHMUD
            </h2>
            <p className="text-sm text-white/70 mb-6 relative inline-block">
              Director
              <span className="absolute left-0 -bottom-2 h-[2px] w-10 bg-red-500"></span>
            </p>

            <div className="text-white/80 text-sm leading-relaxed space-y-4 max-w-xl">
              <p>
                Mr. Abdullah Al Mahmud is a visionary business leader with vast
                experience in real estate development, investment planning, and
                corporate strategy.
              </p>

              <p>
                He plays a key role in overseeing large-scale development
                projects and ensuring sustainable growth through innovative
                planning and management excellence.
              </p>

              <p>
                His leadership has strengthened the organization’s market
                position and long-term vision.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
