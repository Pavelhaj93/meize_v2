import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
	className?: string;
	mobileFull?: boolean;
	children: ReactNode;
	first?: boolean;
}

export default function Container({
	className = "",
	mobileFull = false,
	children,
	first,
	...rest
}: ContainerProps) {
	return (
		<div
			className={cn(
				"w-full max-w-[1600px] mx-auto md:px-10",
				{
					"px-4": !mobileFull,
					"pt-32 xl:pt-40 pb-10": first,
				},
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	);
}
