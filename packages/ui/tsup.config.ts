import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/components/index.ts"],
  outDir: "dist",
  format: ["esm"],
  dts: true,
  sourcemap: true,
  // treeshake: true,
  external: ["react", "react-dom"],
  ...options,
}));
