"use client";

import type { Project } from "@/helpers/projects";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";

let videoInterval: NodeJS.Timeout;

interface ReelProps {
  projects: Project[];
  images: string[];
  className?: string;
}

export default function Reel({ projects, className = "", ...rest }: ReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    clearInterval(videoInterval);
    setActiveIndex(index);

    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    resetInterval();

    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleIndexChange = useCallback(() => {
    setActiveIndex((activeIndex + 1) % projects.length);
  }, [activeIndex, projects.length]);

  const resetInterval = useCallback(() => {
    clearInterval(videoInterval);
    videoInterval = setInterval(handleIndexChange, 6000);
  }, [handleIndexChange]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(videoInterval);
  }, [resetInterval]);

  return (
    <section className={`relative w-full h-screen ${className}`} {...rest}>
      {projects.map(({ videos, thumbnail }, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={videos.short}
          className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none ${
            activeIndex === index ? "visible" : "invisible"
          }`}
          poster={thumbnail}
          loop={true}
          playsInline={true}
          muted={true}
        />
      ))}
      <Container className="absolute bottom-4 left-0 p-4 flex flex-col items-start">
        {projects.map(({ title, slug }, index) => (
          <Link
            key={index}
            href={`/projects/${slug}`}
            className={`${
              activeIndex === index ? "text-white/50" : "text-white"
            } hover:text-white/50 inline-flex flex-col items-start text-left transition-colors duration-500`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <span className="text-7xl font-medium tracking-tighter">
              {title}
            </span>
          </Link>
        ))}
      </Container>
    </section>
  );
}
