import React, { type FC } from "react";

interface PageTitleProps {
	title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
	return (
		<h1 className="text-5xl pt-10 md:pt-0 md:text-left text-center md:text-7xl font-normal tracking-tighter mb-10 dark:text-white">
			{title}
		</h1>
	);
};

export default PageTitle;
