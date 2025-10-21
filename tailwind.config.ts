import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#eff6ff",
					100: "#dbeafe",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
				},
				gray: {
					50: "#f9fafb",
					100: "#f3f4f6",
					200: "#e5e7eb",
					600: "#4b5563",
					700: "#374151",
					900: "#111827",
				},
			},
			spacing: {
				18: "4.5rem",
				88: "22rem",
			},
			fontSize: {
				"2xs": ["0.625rem", { lineHeight: "0.75rem" }],
			},
			boxShadow: {
				card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
				"card-hover":
					"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
			},
			transitionDuration: {
				250: "250ms",
			},
		},
	},
	plugins: [],
} satisfies Config;
