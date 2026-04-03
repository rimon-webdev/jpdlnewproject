import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutStats from "@/components/about/AboutStats";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata = {
  title: "About Us",
  description:
    "Learn about JPDL, a trusted real estate company in Bangladesh with years of experience in residential and commercial property development.",
};


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStats />
      <AboutTeam />
     
    </>
  );
}
