import Image from "next/image";
import Hero from "./Component/Hero";
import FacilitiesSection from "./Component/Facility";
import AboutSection from "./Component/About";
import OurBooks from "./Component/Ourbook";
import ServicesSection from "./Component/Service";
import ContactSection from "./Component/Contact";
import TestSection from "./Component/Testsec";








export default function Home() {
  return (
    <div>
      <Hero />
      {/* Facilities – Desktop overlapping */}
      <div className="hidden md:block absolute top-[100%] left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-6">
        <FacilitiesSection />
      </div>

      {/* Facilities – Mobile normal flow */}
      <div className="block md:hidden mt-12">
        <div className="px-6 pb-8">
          <FacilitiesSection />
        </div>
      </div>

      <AboutSection />
      <OurBooks />
      <ServicesSection />
      <TestSection />
      <ContactSection />

    </div>
  );
}
