"use client";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image?: string;
}

const FeaturedCourses = () => {
  const data = courseData[0].courses;
  const featuredData = data.filter((i: Course) => i.isFeatured);
  // console.log(featuredData);
  return (
    <div className="py-12 bg-gray-900">
      {/* Headings */}
      <div className="text-center">
        <h2 className="text-teal-600 font-semibold uppercase tracking-wide text-base">
          featured courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn with the Best
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredData.map((i) => (
            <div key={i.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{i.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{i.description}</p>
                  <Link href={`/courses/${i.slug}`} className="mt-2">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
