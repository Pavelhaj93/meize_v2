import React, { type FC } from "react";

interface PageTitleProps {
	title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
	return (
		<h1 className="text-5xl text-center md:text-left md:text-7xl font-normal tracking-tighter dark:text-white">
			{title}
		</h1>
	);
};

export default PageTitle;
