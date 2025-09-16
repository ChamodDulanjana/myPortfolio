import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDivider from "@/components/section-divider";
import Experience from "@/components/experience";


export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center mx-auto">
      <div>
        <div className="bg-[#f7d5d5] absolute top-[-6rem] -z-10 right-[8rem] h-[34rem] w-[34rem] rounded-full blur-[8rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e3e0f8] absolute top-[-1rem] -z-10 left-[-35rem] h-[34rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      </div>
      <Hero />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
