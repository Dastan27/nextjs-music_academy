"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Discover Your Sound with Us
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Live Feedback & Engagement
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Cutting-Edge Curriculum
      </div>
    ),
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Limitless Learning Opportunities
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
