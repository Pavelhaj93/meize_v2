import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps {
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	href?: string;
	children: React.ReactNode;
	theme?: "primary" | "secondary" | "ghost";
	size?: "big" | "small" | "custom";
	textSize?: "big" | "small" | "tiny";
	className?: string;
	padding?: "none" | "small" | "big" | "custom";
	onClick?: () => void;
}

export default function Button({
	href,
	children,
	theme = "ghost",
	size = "custom",
	textSize = "small",
	className = "",
	padding = "custom",
	...rest
}: ButtonProps) {
	const buttonClasses = [
		"inline-flex border rounded-full w-full items-center justify-center transition-colors bg-white text-black hover:bg-black hover:text-white",
	];

	switch (size) {
		case "big":
			buttonClasses.push("max-w-[300px]");
			break;
		case "small":
			buttonClasses.push("max-w-[150px]");
			break;
		default:
			buttonClasses.push("max-w-none");
			break;
	}

	switch (textSize) {
		case "big":
			buttonClasses.push(
				"text-xl leading-none font-bold uppercase tracking-tight",
			);
			break;
		case "tiny":
			buttonClasses.push("text-sm leading-none");
			break;
		default:
			buttonClasses.push("text-lg leading-none");
			break;
	}

	switch (padding) {
		case "none":
			buttonClasses.push("p-0");
			break;
		case "small":
			buttonClasses.push("p-2");
			break;
		case "big":
			buttonClasses.push("p-4");
			break;
		default:
			break;
	}

	buttonClasses.push(className);

	if (href) {
		const { onClick, ...linkRest } = rest;
		return (
			<Link href={href} className={buttonClasses.join(" ")} {...linkRest}>
				{children}
			</Link>
		);
	}

	return (
		<button className={buttonClasses.join(" ")} {...rest}>
			{children}
		</button>
	);
}
