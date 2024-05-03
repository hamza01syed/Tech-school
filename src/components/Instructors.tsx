"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    designation: "Web Development Instructor",
    image: "https://source.unsplash.com/400x400/?developer"
  },
  {
    id: 2,
    name: "Michael Smith",
    designation: "Python Programming Instructor",
    image: "https://source.unsplash.com/400x400/?python"
  },
  {
    id: 3,
    name: "Emily Davis",
    designation: "Data Science Instructor",
    image: "https://source.unsplash.com/400x400/?datascience"
  },
  {
    id: 4,
    name: "Alex Lee",
    designation: "Cybersecurity Instructor",
    image: "https://source.unsplash.com/400x400/?cybersecurity"
  }
];

const Instructors = () => {
return (
  <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
        Meet Our Instructors
      </h2>
      <p className="text-base md:text-lg text-white text-center mb-4">
        Discover the talented professionals who will guide your tech journey
      </p>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={instructors} />
      </div>
    </WavyBackground>
  </div>
);
};

export default Instructors;
