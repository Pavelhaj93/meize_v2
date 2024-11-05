"use client";

import { useCallback, useEffect, useState } from "react";
import CarouselDots from "./CarouselDots";

let carouselInterval: NodeJS.Timeout;

interface Reel {
  thumbnail: string;
  title: string;
  videos: {
    short: string;
  };
}

interface ReelCarouselProps {
  reels: Reel[];
  className?: string;
}

export default function ReelCarousel({
  reels,
  className = "",
  ...rest
}: ReelCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndexChange = useCallback(() => {
    setActiveIndex((activeIndex + 1) % reels.length);
  }, [activeIndex, reels.length]);

  const resetInterval = useCallback(() => {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(handleIndexChange, 5000);
  }, [handleIndexChange]);

  useEffect(() => {
    resetInterval();

    return () => clearInterval(carouselInterval);
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
      className={`h-[80vh] bg-black relative overflow-hidden ${backgroundImage} bg-center`}
    >
      {reels.map((reel, key) => {
        return (
          <div
            className={`absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity duration-500 ${
              key === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            key={`Image: ${key}`}
          >
            <video
              src={reel.videos.short}
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              loop={true}
              playsInline={true}
              muted={true}
              autoPlay={true}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
          </div>
        );
      })}

      <CarouselDots
        items={reels}
        active={activeIndex}
        onClick={(index) => {
          setActiveIndex(index);
          resetInterval();
        }}
        className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10"
      />
    </section>
  );
}
