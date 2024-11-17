import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	ref?: React.ForwardedRef<HTMLInputElement>;
}

export default forwardRef(function Input(
	{ className = "", error = false, ...rest }: InputProps,
	ref: React.ForwardedRef<HTMLInputElement>,
) {
	const colorClasses = error
		? "border-red-400 focus:border-red-600"
		: "border-black focus:border-primary";
	return (
		<input
			className={`block w-full border rounded-md py-2 px-4 text-black focus:outline-none transition-colors duration-300 ${colorClasses} ${className}`}
			{...rest}
			ref={ref}
		/>
	);
});
