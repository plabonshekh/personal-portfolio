import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ImpactStrip />
      <CaseStudies />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
