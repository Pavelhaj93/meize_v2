let themeClasses;

import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  mobileFull?: boolean;
  children: ReactNode;
  first?: boolean;
}

export default function Container({
  className = "",
  mobileFull = false,
  children,
  first,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`w-full max-w-[1600px] mx-auto md:px-10 ${
        !mobileFull ? "px-4" : ""
      } ${first ? "mt-10 md:mt-24 xl:mt-40 pb-10" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
