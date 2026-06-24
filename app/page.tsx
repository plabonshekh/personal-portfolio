import { Hero } from "@/components/sections/Hero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Experience } from "@/components/sections/Experience";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BeyondPM } from "@/components/sections/BeyondPM";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStrip />
      <LogoStrip />
      <Experience />
      <CaseStudies />
      <BeyondPM />
      <Achievements />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
