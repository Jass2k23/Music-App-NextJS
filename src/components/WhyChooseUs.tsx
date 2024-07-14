"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import musicSchoolContent from "../data/sticky-scroll-content"

function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs;
