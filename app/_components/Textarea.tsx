import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
	ref?: React.ForwardedRef<HTMLTextAreaElement>;
}

export default forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
	{ className = "", error = false, ...rest },
	ref,
) {
	return (
		<textarea
			className={cn('input resize-y min-h-[150px]', { 'input--error': error }, className)}
			{...rest}
			ref={ref}
		/>
	);
});
