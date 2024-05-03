"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const techContent = [
    {
      title: "Web Development Fundamentals",
      description:
        "Master the basics of web development, including HTML, CSS, and JavaScript. Build your first website and learn essential front-end and back-end development skills."
    },
    {
      title: "Python Programming Essentials",
      description:
        "Explore the fundamentals of Python programming language. Learn about variables, loops, functions, and data structures, and start writing your own Python scripts."
    },
    {
      title: "Mobile App Development with React Native",
      description:
        "Dive into cross-platform mobile app development using React Native framework. Build native mobile apps for iOS and Android platforms with JavaScript and React."
    },
    {
      title: "Data Science and Machine Learning",
      description:
        "Discover the field of data science and machine learning. Learn to analyze data, build predictive models, and extract insights using popular machine learning algorithms."
    }
  ];
  

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={techContent}/>
    </div>
  )
}

export default WhyChooseUs;
