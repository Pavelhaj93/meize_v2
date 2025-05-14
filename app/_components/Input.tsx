import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	ref?: React.ForwardedRef<HTMLInputElement>;
}

export default forwardRef(function Input(
	{ className = "", error = false, ...rest }: InputProps,
	ref: React.ForwardedRef<HTMLInputElement>,
) {
	return (
		<input
			className={cn("input", { "input--error": error }, className)}
			{...rest}
			ref={ref}
		/>
	);
});
