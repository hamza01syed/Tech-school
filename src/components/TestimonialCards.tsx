"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const techSchoolTestimonials = [
  {
    quote:
      "Enrolling in this tech school was one of the best decisions I've ever made. The instructors are knowledgeable and supportive, and the curriculum is comprehensive.",
    name: "John Doe",
    title: "Web Development Student",
  },
  {
    quote:
      "The Python programming course exceeded my expectations. I learned practical skills and gained confidence in my coding abilities.",
    name: "Jane Smith",
    title: "Python Student",
  },
  {
    quote:
      "As a data science enthusiast, I found the courses offered by this school to be incredibly valuable. The instructors are experts in the field, and the hands-on approach to learning made all the difference.",
    name: "David Lee",
    title: "Data Science Student",
  },
  {
    quote:
      "The cybersecurity program provided me with the knowledge and skills to pursue a career in cybersecurity. The hands-on labs and real-world scenarios were particularly helpful.",
    name: "Emily Davis",
    title: "Cybersecurity Student",
  },
];

const TechSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full bg-gray-100 dark:bg-gray-900 relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8 z-10">
        Discover Success Stories
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={techSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TechSchoolTestimonials;
