'use client'

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import webinarData from "@/data/webinarData";

function UpComingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Headings */}
        <div className="text-center">
          <h2 className="text-teal-600 font-semibold uppercase tracking-wide text-base">
            featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10">
          <HoverEffect  items={webinarData.map((i) => (
            {
                title : i.title,
                description: i.description,
                link : i.slug
            }
          ))}/>
        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <Link href={"/"}>
            <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              View All webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpComingWebinars;
