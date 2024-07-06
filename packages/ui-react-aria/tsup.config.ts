import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  ...options,
}));
