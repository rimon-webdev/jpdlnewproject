import HeroSlider from "@/components/home/Hero";
import AboutSection from "@/components/home/about";
import PropertyStack from "@/components/home/PropertyStack";
import HelpSlider from "@/components/home/HelpSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import LatestBlogSection from "@/components/home/LatestBlogSection";

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "JPDL Real Estate",
      url: "https://jpdlbd.com",
      logo: "https://jpdlbd.com/images/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      sameAs: [
        "https://facebook.com/",
        "https://linkedin.com/",
      ],
    }),
  }}
/>


export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <PropertyStack />
      <HelpSlider />
      <ProjectsSection />
      <FeatureSection />
      <TestimonialSection />
      <LatestBlogSection />
     
    </>
  );
}
