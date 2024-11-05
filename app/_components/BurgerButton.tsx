interface BurgerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  scrolled: boolean;
  theme?: string;
  className?: string;
}

export default function BurgerButton({
  active,
  scrolled,
  theme = "black",
  className = "",
  ...rest
}: BurgerButtonProps) {
  const colorClasses =
    theme === "black"
      ? "bg-black"
      : active || scrolled
      ? "bg-black"
      : "bg-white";

  return (
    <button
      className={`relative w-7 h-6 transition-colors duration-300 ${className}`}
      {...rest}
    >
      <div
        className={`line line-1 absolute w-full h-[2px] top-1/2 right-0 transition-all duration-300 ${
          active ? "rotate-45" : "-translate-y-[600%]"
        } ${colorClasses}`}
      />
      <div
        className={`line line-2 absolute w-2/3 h-[2px] top-1/2 right-0 -translate-y-1/2 transition-all duration-300  ${
          active ? "opacity-0" : ""
        } ${colorClasses}`}
      />
      <div
        className={`line line-3 absolute w-full h-[2px] top-1/2 right-0 transition-all duration-300 ${
          active ? "-rotate-45" : "translate-y-[500%]"
        } ${colorClasses}`}
      />
    </button>
  );
}
