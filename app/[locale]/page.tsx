// Main page.tsx

import { getAllReels } from "@/helpers/projects";
import Nav from "../_components/Navbar";
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
		<div className="flex flex-col">
			<Nav theme="dark" />
			<main className="">
				<div className="block lg:hidden">
					<ReelScroll projects={reels} />
				</div>
				<div className="lg:block hidden">
					<Reel projects={reels} images={images} />
				</div>
			</main>
		</div>
	);
}
