let themeClasses;

import type { ReactNode } from "react";

interface ContainerProps {
	className?: string;
	mobileFull?: boolean;
	children: ReactNode;
}

export default function Container({
	className = "",
	mobileFull = false,
	children,
	...rest
}: ContainerProps) {
	return (
		<div
			className={`w-full max-w-[1600px] mx-auto md:px-10 ${
				!mobileFull ? "px-4" : ""
			} ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
