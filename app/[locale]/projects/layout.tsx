import Nav from "@/app/_components/Nav";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			<Nav theme="black" />
			<main className="">{children}</main>
		</div>
	);
}
