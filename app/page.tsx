import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDivider from "@/components/section-divider";
import Experience from "@/components/experience";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center mx-auto">
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
