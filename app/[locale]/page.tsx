import { getAllReels } from "@/helpers/projects";
import Reel from "../_components/Reel";
import ReelScroll from "../_components/ReelScroll";

// const images = [
// 	"/images/hayden.jpg",
// 	"/images/hayden2.jpg",
// 	"/images/hayden3.jpg",
// 	"/images/hayden4.jpg",
// ];

export default function Home() {
	const reels = getAllReels();

	console.log({reels});

	return (
		<>
			<div className="block lg:hidden">
				<ReelScroll projects={reels} />
			</div>
			<div className="hidden lg:block">
				<Reel
					projects={reels}
				// images={images}
				/>
			</div>
		</>
	);
}
