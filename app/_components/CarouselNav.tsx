interface CarouselNavProps {
	items: [];
	onClick: (key: number) => void;
	active: number;
	className?: string;
}

export default function CarouselNav({
	items,
	onClick,
	active,
	className = "",
	...rest
}: CarouselNavProps) {
	return (
		<nav
			className={`flex items-center justify-center gap-6 ${className}`}
			{...rest}
		>
			{items.map((_, key) => {
				return (
					<button
						type="button"
						onClick={() => onClick(key)}
						key={`TestimonialNav: ${key}`}
						className={`inline-flex w-12 rounded-full aspect-square bg-transparent items-center justify-center leading-none border ${
							active === key
								? "border-primary text-primary"
								: "border-black/50 text-black/50 hover:border-primary hover:text-primary"
						} transition-colors duration-300`}
					>
						{key + 1}
					</button>
				);
			})}
		</nav>
	);
}
