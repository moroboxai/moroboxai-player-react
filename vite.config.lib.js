import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {version} from "./package.json";
const { resolve } = require("path");

export default defineConfig({
    plugins: [react()],
    define: {
        "__VERSION__": version
    },
    build: {
        outDir: resolve(__dirname, "lib"),
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: "MoroboxAIPlayer",
            formats: ["cjs", "es", "umd"],
            fileName: (format) => {
                switch (format) {
                    case "cjs":
                        return `cjs/index.cjs`;
                    case "es":
                        return `es/index.js`;
                    case "umd":
                        return `umd/moroboxai-player-react.min.js`;
                }
            }
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        }
    }
});
