import Image, { type StaticImageData } from "next/image";
// import notWorking from "/projects/anna-von-lipa/screens/01.jpg";
// import working from "/projects/angus-farm/screens/01.jpg";

interface ScreenGrabsProps {
	images: string[] | StaticImageData[];
	className?: string;
}

export default function ScreenGrabs({
	images,
	className = "",
	...rest
}: ScreenGrabsProps) {
	// padding top for 16/9

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
			{images.map((image, key) => {
				return (
					<div className="w-full relative flex" key={`ScreenGrab: ${key}`}>
						<Image
							src={image}
							className="w-full"
							alt={`Screen Grab: ${key}`}
							width={768}
							height={432}
						/>
					</div>
				);
			})}
		</div>
	);
}
