import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import ArrowLeftSVG from "./svg/arrow-left.svg";
import ArrowRightSVG from "./svg/arrow-right.svg";
import FacebookSVG from "./svg/facebook.svg";
import InstagramSVG from "./svg/instagram.svg";
import VimeoSVG from "./svg/vimeo.svg";
import YoutubeSVG from "./svg/youtube.svg";

const iconVariants = cva("cursor-pointer", {
	variants: {
		size: {
			sm: "size-6",
			lg: "size-10",
			custom: "",
		},
	},
	defaultVariants: {
		size: "sm",
	},
});

export type IconComponent = React.FC<
	React.SVGProps<SVGSVGElement> & VariantProps<typeof iconVariants>
>;

function withStyles(
	Icon: React.FC<React.SVGProps<SVGSVGElement>>,
): IconComponent {
	const render: IconComponent = ({ className, size, ...props }) => (
		<Icon
			aria-hidden
			{...props}
			className={cn(iconVariants({ size, className }))}
		/>
	);
	render.displayName = "Icon";

	return render;
}

export const VimeoIcon = withStyles(VimeoSVG);
export const ArrowLeftIcon = withStyles(ArrowLeftSVG);
export const ArrowRightIcon = withStyles(ArrowRightSVG);
export const FacebookIcon = withStyles(FacebookSVG);
export const InstagramIcon = withStyles(InstagramSVG);
export const YoutubeIcon = withStyles(YoutubeSVG);
