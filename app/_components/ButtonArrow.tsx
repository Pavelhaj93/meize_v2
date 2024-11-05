"use client";

import Link from "next/link";
import SvgArrow from "./svg/SvgArrow";
import { useLocale } from "next-intl";

interface ButtonArrowBodyProps {
  direction: "previous" | "next";
  label?: string;
}

function ButtonArrowBody({ direction, label }: ButtonArrowBodyProps) {
  if (direction === "previous") {
    return (
      <>
        <span className="sm:hidden">
          <SvgArrow direction="left" size="small" />
        </span>
        <span className="hidden md:block">
          <SvgArrow direction="left" size="large" />
        </span>
        <span className="text-xl">{label}</span>
      </>
    );
  }

  return (
    <>
      <span className="text-xl">{label}</span>
      <span className="sm:hidden">
        <SvgArrow direction="right" size="small" />
      </span>
      <span className="hidden md:block">
        <SvgArrow direction="right" size="large" />
      </span>
    </>
  );
}

interface ButtonArrowProps {
  href?: string;
  direction?: "previous" | "next";
  className?: string;
}

const ButtonArrow = ({
  href,
  direction = "next",
  className = "",
  ...rest
}: ButtonArrowProps) => {
  // const { isMobile } = useViewportWidth();
  const locale = useLocale();
  const buttonClasses = `uppercase font-bold inline-flex items-center gap-4 mouse-hover:text-primary mouse-hover:gap-2 transition-all duration-300 rounded-none ${
    direction === "next"
      ? "mouse-hover:translate-x-2"
      : "mouse-hover:-translate-x-2"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <ButtonArrowBody direction={direction} label={locale[direction]} />
      </Link>
    );
  }

  return (
    <button {...rest} className={buttonClasses}>
      <ButtonArrowBody direction={direction} />
    </button>
  );
};

export default ButtonArrow;
