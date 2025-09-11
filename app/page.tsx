import About from "@/components/about";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center pt-14 mx-auto">
      <div>
        <div className="bg-[#f7cfd0] absolute top-[-6rem] -z-10 right-[8rem] h-[34rem] w-[34rem] rounded-full blur-[8rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[34rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
      </div>
      <Hero />
      <About />
    </main>
  );
}
