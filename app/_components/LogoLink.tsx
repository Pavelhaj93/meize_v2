import Link from "next/link";
import SvgLogo from "./svg/SvgLogo";

export default function LogoLink({ ...rest }) {
  return (
    <Link href="/" {...rest}>
      <SvgLogo className="dark:fill-white h-20 w-24 dark:hover:fill-white/50 fill-black hover:fill-black/50 transition-colors" />
    </Link>
  );
}
