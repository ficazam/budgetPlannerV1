import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			"color-prim-one": "#072E33",
			"color-prim-two": "#0C7076",
			"color-prim-three": "#0F969C",
			"color-alt-one": "#6DA5C0",
			"color-alt-two": "#294D61",
			"color-alt-three": "#05161A",
		},
	},
	plugins: [],
};
export default config;
