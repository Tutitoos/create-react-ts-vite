/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTests.ts"],
    include: ["src/**/*.test.tsx"],
    exclude: [
      "src/index.tsx",
      "src/*.ts",
      "src/contexts/**",
      "src/mocks/**",
      "src/data/**",
    ],
  },
});
