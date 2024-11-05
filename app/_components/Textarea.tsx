import { forwardRef } from "react";

export default forwardRef(function Textarea(
  { className = "", error = false, ...rest },
  ref
) {
  const colorClasses = error
    ? "border-red-400 focus:border-red-600"
    : "border-black focus:border-primary";

  return (
    <textarea
      className={`block w-full border rounded-none py-2 px-4 text-base resize-y min-h-[150px] focus:outline-none transition-colors duration-300 ${colorClasses} ${className}`}
      {...rest}
      ref={ref}
    />
  );
});
