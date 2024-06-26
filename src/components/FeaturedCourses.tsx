"use client";
import Link from "next/link"
import courseData from "../data/tech_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course
  {
    course_id: number,
    course_name: string,
    instructor: string,
    description: string,
    duration: string,
    level: string,
    topics:  string[]
    
  }


const FeaturedCourses = () => {
  const featuredCourses=courseData.courses.filter((course:Course) =>course.level)
  return (
    <div className="py-12 bg-indigo-600">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                <p className="mt-3 text-3xl leading-8 font-extrabold text-white sm:text-4xl">LEARN WITH THE BEST</p>
            </div>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {featuredCourses.map((course:Course)=>(
                <div key={course.course_id} className="flex justify-center">
                  <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center text-white flex-grow">
                      <p className="text-lg sm:text-xl mt-4 mb-2 dark:text-neutral-200 ">{course.course_name}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                      <Link href={`/courses/${course.course_id}`}>
                        Learn More
                      </Link>
                    </div>
                  </BackgroundGradient>
                </div>
              )
              
              )}
          </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"> View All Courses</Link>
        </div>
    </div>
  )
}

export default FeaturedCourses