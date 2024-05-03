"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const techWebinars = [
  {
    title: "Introduction to Web Development",
    description: "Join our webinar to learn the basics of web development, including HTML, CSS, and JavaScript.",
    slug: "introduction-to-web-development",
    isFeatured: true
  },
  {
    title: "Mastering Python Programming",
    description: "Advance your Python programming skills with our webinar, covering advanced topics and best practices.",
    slug: "mastering-python-programming",
    isFeatured: false
  },
  {
    title: "Data Science Bootcamp",
    description: "Get hands-on experience in data science with our intensive bootcamp, covering data analysis, machine learning, and more.",
    slug: "data-science-bootcamp",
    isFeatured: true
  },
  {
    title: "Cybersecurity Essentials",
    description: "Learn the fundamentals of cybersecurity in our webinar, covering threat detection, security protocols, and risk management.",
    slug: "cybersecurity-essentials",
    isFeatured: false
  }
];

const UpcomingWebinars = () => {
return (
  <div className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance your Tech Skills
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={techWebinars.map((webinar)=>{
            return {
              title: webinar.title,
              description: webinar.description,
              link: "/"
            }
          })}
        />
      </div>
      <div className="mt-10 text-center">
        <Link
          href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Webinars
        </Link>
      </div>
    </div>
  </div>
);
};

export default UpcomingWebinars;