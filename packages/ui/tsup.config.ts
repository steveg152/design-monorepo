import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/components/index.ts", "src/variants/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  ...options,
}));
