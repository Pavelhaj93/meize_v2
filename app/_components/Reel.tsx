"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Container from "./Container";

let videoInterval: NodeJS.Timeout;

interface ReelProps {
  reels: {
    title: string;
    slug: string;
    videos: { short: string };
  }[];
  images: string[];
  className?: string;
}

export default function Reel({ reels, className = "", ...rest }: ReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    clearInterval(videoInterval);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => resetInterval();

  const handleIndexChange = useCallback(() => {
    setActiveIndex((activeIndex + 1) % reels.length);
  }, [activeIndex, reels.length]);

  const resetInterval = useCallback(() => {
    clearInterval(videoInterval);
    videoInterval = setInterval(handleIndexChange, 6000);
  }, [handleIndexChange]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(videoInterval);
  }, [resetInterval]);

  let backgroundImage = "";
  if (activeIndex === 0) {
    backgroundImage = 'bg-[url("/projects/anna-von-lipa/thumbnail.jpg")]';
  } else if (activeIndex === 1) {
    backgroundImage = 'bg-[url("/projects/trezor/thumbnail.jpg")]';
  } else if (activeIndex === 2) {
    backgroundImage = 'bg-[url("/projects/angus-farm/thumbnail.jpg")]';
  }

  return (
    <section
      className={`relative w-full bg-cover ${backgroundImage} pt-[56.25%] ${className}`}
      {...rest}
    >
      <video
        src={reels[activeIndex].videos.short}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        loop={true}
        playsInline={true}
        muted={true}
        autoPlay={true}
      />

      <Container className="absolute left-1/2 -translate-x-1/2 top-3/4 flex items-center justify-center gap-24">
        {reels.map(({ title, slug }, key) => {
          return (
            <Link
              key={key}
              href={`/projects/${slug}`}
              className={`${
                activeIndex === key ? "text-white" : "text-white/60"
              } mouse-hover:text-white inline-flex flex-col items-center text-center transition-colors duration-500 uppercase`}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-2xl font-extrabold tracking-tighter">
                {title}
              </span>
            </Link>
          );
        })}
      </Container>
    </section>
  );
}
