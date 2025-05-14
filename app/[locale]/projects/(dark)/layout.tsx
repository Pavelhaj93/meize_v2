export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-black dark">
			{children}
		</div>
	);
}
