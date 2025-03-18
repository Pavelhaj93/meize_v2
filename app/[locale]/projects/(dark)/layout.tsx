import Navbar from "@/app/_components/Navbar";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-black dark">
			<Navbar theme="dark" />
			<main>{children}</main>
		</div>
	);
}
