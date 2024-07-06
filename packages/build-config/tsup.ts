import { defineConfig, Options } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  ...options,
}));

export const config: Options = {
  entryPoints: ["src/components/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
};
