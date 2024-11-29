import { defineConfig } from "vite";
import history from "connect-history-api-fallback";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				index: "./index.html",
				register: "src/pages/register.html",
				login: "src/pages/login.html",
				surah: "src/pages/surah.html",
			},
		},
	},
	server: {
		port: 3000,
	},
	plugins: [
		{
			name: "custom-history",
			configureServer(server) {
				server.middlewares.use(
					history({
						rewrites: [
							{
								from: /^\/$/,
								to: "/index.html",
							},
							{
								from: /^\/login$/,
								to: "/src/pages/login.html",
							},
							{
								from: /^\/register$/,
								to: "/src/pages/register.html",
							},
							{
								from: /^\/surah$/,
								to: "/src/pages/surah.html",
							},
						],
					}),
				);
			},
		},
	],
});
