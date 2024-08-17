import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/testSetup.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["node_modules", ".git", "dist", "__tests__"],
    },
  },
});
