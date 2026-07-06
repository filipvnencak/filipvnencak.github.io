import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// User page (filipvnencak.github.io) is served from the domain root,
// so the base path stays "/".
export default defineConfig({
    base: "/",
    plugins: [react()],
});
