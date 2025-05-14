import { getAllReels } from "@/helpers/projects";
import Reel from "../_components/Reel";
import ReelScroll from "../_components/ReelScroll";

export default function Home() {
	const reels = getAllReels();

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
