import Link from "next/link";
import SvgLogo from "./svg/SvgLogo";

export default function LogoLink({
  className = "",
  ...rest
}: {
  className?: string;
}) {
  return (
    <Link href="/">
      <button
        className={`inline-flex font-extrabold uppercase tracking-tighter text-4xl mouse-hover:text-primary transition-colors duration-200 ${className}`}
        {...rest}
      >
        <SvgLogo />
      </button>
    </Link>
  );
}
