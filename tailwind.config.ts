import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "selector",
	safelist: ["no-scroll"],
	theme: {
		extend: {
			fontWeight: {
				extrabold: "1000",
			},
			fontSize: {
				0: "0",
			},
			colors: {
				blue: {
					600: "#0027f5",
				},
				gray: {
					300: "#7d7d7d",
				},
			},
			maxWidth: {
				"1/2": "50%",
				"1/3": "33.3333%",
				"1/4": "25%",
				"1/5": "20%",
			},
		},
	},
};

export default config;
