import type { Project } from "@/helpers/projects";
import Image from "next/image";
import Link from "next/link";
import React, { type FC, useRef, useState } from "react";

interface MasonryItemProps {
  item: Project;
  isTall: boolean;
}

const MasonryItem: FC<MasonryItemProps> = ({ item, isTall }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <Link
      href={`/projects/${item.slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={"break-inside-avoid flex flex-col relative overflow-hidden "}
    >
      <div
        className={`relative  w-full ${isTall ? "h-[450px]" : "h-[300px]"} `}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          layout="fill"
          className="rounded-lg object-cover"
        />
        {item.videos.short && (
          <video
            src={item.videos.short}
            className={`absolute rounded-lg w-full h-full  object-cover ${
              hovered ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            ref={videoRef}
            playsInline
            muted
            loop
          />
        )}
      </div>

      {!item.videos.short && (
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-primary/60 uppercase font-bold tracking-tight text-2xl p-4 text-center transition-opacity duration-300 ${
            hovered ? "" : "opacity-0"
          }`}
        >
          Coming soon
        </div>
      )}
      <div className="mt-4">
        <h3>
          {item.categories.map((category, index) => (
            <span key={index} className="text-sm uppercase text-gray-300">
              {category}
              {index < item.categories.length - 1 && " / "}
            </span>
          ))}
        </h3>
        <h2 className="text-left text-3xl md:text-4xl font-medium tracking-tighter dark:text-white">
          {item.title}
        </h2>
      </div>
    </Link>
  );
};

export default MasonryItem;