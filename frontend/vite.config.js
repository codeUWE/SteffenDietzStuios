import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [svgr()],
	server: {
		host: "0.0.0.0",
		port: 5173,
		proxy: {
			"/api": {
				target: "https://steffendietzstuios.onrender.com",
				changeOrigin: true,
				secure: true,
			},
		},
	},
});
