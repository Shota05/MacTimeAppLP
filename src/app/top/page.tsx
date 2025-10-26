import Hero from "../../components/top/sections/Hero";
import Services from "../../components/top/sections/Services";
import CaseStudies from "../../components/top/sections/CaseStudies";
import Process from "../../components/top/sections/Process";
import ContactCTA from "../../components/top/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <ContactCTA />
    </>
  );
}
