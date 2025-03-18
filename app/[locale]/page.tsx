import { getAllReels } from "@/helpers/projects";
import Navbar from "../_components/Navbar";
import Reel from "../_components/Reel";
import ReelScroll from "../_components/ReelScroll";

const images = [
	"/images/hayden.jpg",
	"/images/hayden2.jpg",
	"/images/hayden3.jpg",
	"/images/hayden4.jpg",
];

export const metadata = {
	title: "Home",
	description: "Home page",
};

export default function Home() {
	const reels = getAllReels();

	return (
		<>
			<div className="block lg:hidden">
				<ReelScroll projects={reels} />
			</div>
			<div className="hidden lg:block">
				<Reel projects={reels} images={images} />
			</div>
		</>
	);
}
