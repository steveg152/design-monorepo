import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  metafile: true,
  dts: true,
  skipNodeModulesBundle: true,
  external: [],
  ...options,
}));
