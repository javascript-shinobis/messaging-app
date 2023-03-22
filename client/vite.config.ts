import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      utils: `${path.resolve(__dirname, "./utils/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      server: `${path.resolve(__dirname, "../server/")}`,
      context: `${path.resolve(__dirname, "./src/context/")}`
    },
  },
});
