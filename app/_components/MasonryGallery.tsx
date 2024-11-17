"use client";

import type { Project } from "@/helpers/projects";
import type { FC } from "react";
import MasonryItem from "./MasonryItem";

interface MasonryGalleryProps {
	items: Project[];
}

const MasonryGallery: FC<MasonryGalleryProps> = ({ items }) => {
	return (
		<div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-20">
			{items.map((item, index) => {
				const tallImages = [1, 2, 3, 5, 6];
				const isTall = tallImages.includes(index);

				return <MasonryItem key={index} item={item} isTall={isTall} />;
			})}
		</div>
	);
};

export default MasonryGallery;
