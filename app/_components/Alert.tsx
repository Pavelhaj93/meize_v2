import Arrow from "./Arrow";

interface AlertProps {
	arrow?: "left" | "right" | "center" | "none";
	className?: string;
	active?: boolean;
	theme?: "error" | "success" | "default";
	children: React.ReactNode;
}

export default function Alert({
	arrow = "center",
	className = "",
	active = false,
	theme = "default",
	children,
	...rest
}: AlertProps) {
	let themeClasses;
	let arrowClasses;

	switch (theme) {
		case "error":
			themeClasses = "bg-red-600";
			arrowClasses = "text-red-600";
			break;
		case "success":
			themeClasses = "bg-green-500";
			arrowClasses = "text-black";
			break;
		default:
			themeClasses = "bg-black";
			arrowClasses = "text-black";
			break;
	}

	switch (arrow) {
		case "left":
			arrowClasses += " left-2";
			break;
		case "right":
			arrowClasses += " right-2";
			break;
		default:
			arrowClasses += " left-1/2 -translate-x-1/2";
			break;
	}

	return (
		<div
			className={`w-full p-2 text-center z-10 text-white font-bold transition-all duration-300 ${
				!active ? "opacity-0 translate-y-1.5 pointer-events-none" : ""
			} ${themeClasses} ${className}`}
			{...rest}
		>
			{children}

			{arrow !== "none" && (
				<Arrow className={`absolute top-full ${arrowClasses}`} />
			)}
		</div>
	);
}
