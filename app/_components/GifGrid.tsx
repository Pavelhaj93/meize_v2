import Image, { type StaticImageData } from "next/image";

interface GifGridProps {
	gifs: StaticImageData[];
	bottom: number;
	top: number;
	revert?: boolean;
}

const GifGrid: React.FC<GifGridProps> = ({ gifs, bottom, top, revert }) => {
	return (
		<div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-5 lg:gap-10 my-2 sm:my-5 lg:my-10 justify-between">
			{gifs.slice(bottom, top).map((gif, index) => (
				<div
					key={gif.src}
					className={`${
						revert
							? index % 2 === 1
								? "sm:mt-40 mt-0"
								: ""
							: index % 2 === 0
								? "sm:mt-40 mt-0"
								: ""
					} `}
				>
					<Image src={gif} alt="Gif" width={768} height={432} />
				</div>
			))}
		</div>
	);
};

export default GifGrid;
