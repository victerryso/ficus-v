import { defineConfig } from "vite";
import dsv from "@rollup/plugin-dsv";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dsv()],
});