export default function CarouselDot({
	className = "",
	active = false,
	...rest
}) {
	return (
		<button className={`rounded-full ${className}`} {...rest}>
			{active ? "●" : "○"}
		</button>
	);
}
