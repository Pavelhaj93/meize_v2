"use client";

import type { Project } from "@/helpers/projects";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function PreviewTile({
	title,
	slug,
	thumbnail,
	videos,
}: Project) {
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
			href={`/projects/${slug}`}
			className="relative overflow-hidden bg-red-100 group text-white title-shadow aspect-video flex items-center justify-center transition-colors"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{/* THUMBNAIL */}
			<div className="absolute top-0 left-0 w-full h-full flex">
				<Image
					src={thumbnail as unknown as StaticImageData}
					className="w-full h-full object-cover"
					alt={title}
				/>
			</div>

			{/* VIDEO ON HOVER */}
			{videos?.short && (
				<video
					src={videos.short}
					className={`absolute top-0 left-0 w-full h-full bg-primary/60 ${
						hovered ? "opacity-100" : "opacity-0 pointer-events-none"
					} transition-opacity duration-300`}
					ref={videoRef}
					playsInline={true}
					muted={true}
					loop={true}
				/>
			)}

			{!videos?.short && (
				<div
					className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-primary/60 uppercase font-bold tracking-tight text-2xl p-4 text-center transition-opacity duration-300 ${
						hovered ? "" : "opacity-0"
					}`}
				>
					Coming soon
				</div>
			)}

			<div
				className={`absolute uppercase font-bold tracking-tight text-2xl p-4 text-center transition-opacity duration-300 ${
					hovered ? "opacity-0" : ""
				}`}
			>
				{title}
			</div>
		</Link>
	);
}
