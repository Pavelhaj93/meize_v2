"use client";

import type { Project } from "@/helpers/projects";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Container from "./Container";

let videoInterval: NodeJS.Timeout;

interface ReelProps {
	reels: Project[];
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

	return (
		<section className={`relative w-full h-screen ${className}`} {...rest}>
			<video
				src={reels[activeIndex].videos.short}
				className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
				poster={reels[activeIndex].thumbnail}
				loop={true}
				playsInline={true}
				muted={true}
				autoPlay={true}
			/>

			<Container className="absolute bottom-4 left-0 p-4 flex flex-col items-start">
				{reels.map(({ title, slug }, key) => {
					return (
						<Link
							key={key}
							href={`/projects/${slug}`}
							className={`${
								activeIndex === key ? "text-white/50" : "text-white"
							} hover:text-white/50 inline-flex flex-col items-start text-left transition-colors duration-500`}
							onMouseEnter={() => handleMouseEnter(key)}
							onMouseLeave={handleMouseLeave}
						>
							<span className="text-7xl font-medium leading-[4rem] tracking-tighter">
								{title}
							</span>
						</Link>
					);
				})}
			</Container>
		</section>
	);
}
