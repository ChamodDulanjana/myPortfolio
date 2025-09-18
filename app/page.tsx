import About from "@/section/about";
import Hero from "@/section/hero";
import Projects from "@/section/projects";
import Skills from "@/section/skills";
import SectionDivider from "@/components/section-divider";
import Experience from "@/section/experience";
import Contact from "@/section/contact";


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
