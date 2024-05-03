import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-blue-900 rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-white">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl text-black font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Unlock the World of Technology
        </h1>
        <p className="mt-10">
          Technology, a catalyst for innovation and progress, shapes the future,
          driving change and revolutionizing industries. From software
          development to data science, it empowers individuals and organizations
          to solve complex problems and create impactful solutions. Embrace the
          possibilities of the digital age and embark on a journey of discovery
          and mastery in the realm of technology.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-black dark:bg-purple-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
