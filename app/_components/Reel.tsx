"use client";

import type { Project } from "@/helpers/projects";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface ReelProps {
  projects: Project[];
  images?: string[];
  className?: string;
}

export default function Reel({ projects, className = "", ...rest }: ReelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const locale = useLocale();

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);

    const video = videoRefs.current[index];

    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setActiveIndex(0);
  };

  const handleVideoEnded = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;

      if (i === activeIndex) {
        // Restart and play the active clip
        // vid.currentTime = 0;
        const p = vid.play();
        if (p !== undefined) p.catch(() => { });
      } else {
        // Stop any background clips
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <section
      className={`relative w-full h-screen overflow-hidden ${className}`}
      {...rest}
    >
      {projects.map(({ id, videos, thumbnail }, index) => (
        <video
          key={`Reel Video: ${id}`}
          ref={(el) => { videoRefs.current[index] = el }}
          src={videos?.short}
          className={cn('absolute top-0 left-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500', {
            'opacity-0': activeIndex !== index,
          })}
          poster={thumbnail}
          playsInline
          autoPlay={activeIndex === index}
          preload={activeIndex === index ? "auto" : "none"}
          muted
          onEnded={() => {
            if (activeIndex === index) {
              handleVideoEnded();
            }
          }}
        />
      ))}
      <Container className="absolute bottom-4 left-0 p-4 flex flex-col items-start">
        {projects.map(({ id, title, slug }, index) => {
          if (index === 0) return;

          return (
            <Link
              key={`Reel Link: ${id}`}
              href={`/${locale}/projects/${slug}`}
              className={cn('inline-flex flex-col items-start text-left transition-colors duration-500', {
                'text-white/50 hover:text-white': activeIndex !== index,
                'text-white': activeIndex === index,
              })}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span className="text-5xl 2xl:text-6xl font-medium tracking-tighter">
                {title}
              </span>
            </Link>
          );
        })}
      </Container>
    </section>
  );
}
