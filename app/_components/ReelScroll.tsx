"use client";

import { Project } from "@/helpers/projects";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ReelProps {
  projects: Project[];
  className?: string;
}

export default function Reel({ projects, className = "", ...rest }: ReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Prevent rapid-fire scrolls
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const changeIndex = (direction: number) => {
    let newIndex = activeIndex + direction;

    // Keep the index within bounds
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= projects.length) newIndex = projects.length - 1;

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      setIsScrolling(true);

      // Allow scrolling again after a short delay
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // Handle desktop scrolling (mouse wheel)
  const handleWheel = (event: WheelEvent) => {
    if (isScrolling) return;

    const direction = event.deltaY > 0 ? 1 : -1; // Detect scroll direction
    changeIndex(direction);
  };

  // Handle mobile touch scrolling
  const handleTouchStart = (event: TouchEvent) => {
    setTouchStart(event.touches[0].clientY); // Record the starting Y position
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (touchStart === null || isScrolling) return;

    const currentY = event.touches[0].clientY;
    const direction = touchStart - currentY > 0 ? 1 : -1; // Detect swipe direction
    changeIndex(direction);
    setTouchStart(null); // Reset touch start
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel); // For desktops
    window.addEventListener("touchstart", handleTouchStart); // For mobiles
    window.addEventListener("touchmove", handleTouchMove); // For mobiles

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeIndex, isScrolling, touchStart]);

  const lineHeight = 200 * (1 - activeIndex / (projects.length - 1));

  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${className}`}
      {...rest}
    >
      {/* Active video */}
      <video
        src={projects[activeIndex]?.videos.short}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        poster={projects[activeIndex]?.thumbnail}
        loop
        playsInline
        muted
        autoPlay
      />

      {/* Video titles or navigation */}
      <Link
        href={`/projects/${projects[activeIndex].slug}`}
        className={`hover:text-white/50 absolute bottom-4 left-4 p-4 text-white inline-flex flex-col items-start text-left transition-colors duration-500`}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      >
        <span className="text-4xl md:text-7xl font-medium leading-[4rem] tracking-tighter">
          {projects[activeIndex].title}
        </span>
      </Link>

      {/* Vertical Line Indicator */}
      <div className="absolute right-10 bottom-5 gap-4 flex flex-col items-center text-white">
        {/* Current active index */}
        {activeIndex + 1 !== 6 && (
          <span className="text-3xl md:text-4xl font-medium">
            {activeIndex + 1}
          </span>
        )}

        {/* Vertical line */}
        <div
          className="w-[2px] bg-white transition-all duration-500"
          style={{ height: `${lineHeight}px` }}
        ></div>

        {/* Total number of projects */}
        <span className="text-3xl md:text-4xl font-medium">
          {projects.length}
        </span>
      </div>
    </section>
  );
}