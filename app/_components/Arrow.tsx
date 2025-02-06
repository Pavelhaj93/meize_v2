export default function Arrow({ className = "", ...rest }) {
	return (
		<div
			className={`h-0 w-0 border-x-8  border-x-transparent border-t-8 border-t-current ${className}`}
			{...rest}
		/>
	);
}
