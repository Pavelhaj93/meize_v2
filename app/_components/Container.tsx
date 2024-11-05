let themeClasses;

import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  mobileFull?: boolean;
  children: ReactNode;
}

export default function Container({
  className = "",
  mobileFull = false,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`container ${!mobileFull ? "px-4" : ""} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
