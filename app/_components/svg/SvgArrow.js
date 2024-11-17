export default function SvgArrow({
	direction = "right",
	size = "small",
	...rest
}) {
	const smallArrow = (
		<svg
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			{direction === "right" ? (
				<path
					d="m15 6.3-1.4 1.5L17 11H3.3v2h13.6l-3.3 3.2 1.5 1.5 5.6-5.7L15 6.3Z"
					fill="currentColor"
				/>
			) : (
				<path
					d="M20.3 11v2H7.5l3.2 3.2-1.4 1.5L3.7 12l5.6-5.7 1.4 1.5L7.5 11h12.8Z"
					fill="currentColor"
				/>
			)}
		</svg>
	);

	const largeArrow = (
		<svg
			width="202"
			height="23"
			viewBox="0 0 202 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			{direction === "right" ? (
				<path
					d="M201.058 12.8382C201.643 12.2525 201.643 11.3027 201.058 10.7169L191.512 1.17098C190.926 0.585192 189.976 0.585192 189.39 1.17098C188.805 1.75676 188.805 2.70651 189.39 3.2923L197.876 11.7776L189.39 20.2629C188.805 20.8486 188.805 21.7984 189.39 22.3842C189.976 22.97 190.926 22.97 191.512 22.3842L201.058 12.8382ZM-0.00305176 13.2776H199.997V10.2776H-0.00305176L-0.00305176 13.2776Z"
					fill="currentColor"
				/>
			) : (
				<path
					d="M0.936288 10.7169C0.350502 11.3027 0.350502 12.2525 0.936288 12.8382L10.4822 22.3842C11.068 22.97 12.0178 22.97 12.6035 22.3842C13.1893 21.7984 13.1893 20.8486 12.6035 20.2629L4.11827 11.7776L12.6035 3.2923C13.1893 2.70651 13.1893 1.75676 12.6035 1.17098C12.0178 0.585192 11.068 0.585192 10.4822 1.17098L0.936288 10.7169ZM201.997 10.2776L1.99695 10.2776V13.2776L201.997 13.2776V10.2776Z"
					fill="currentColor"
				/>
			)}
		</svg>
	);

	return size === "small" ? smallArrow : largeArrow;
}
