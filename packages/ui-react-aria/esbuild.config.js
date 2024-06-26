const esbuild = require("esbuild");

// Environment setting
const isProduction = process.env.NODE_ENV === "production";

// Common build settings
const commonBuildOptions = {
  entryPoints: ["src/components/index.ts"],
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  external: ["react", "react-dom"],
  target: ["es2020"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
  },
  inject: ["./react-shim.js"],
};

// Build for ESM
esbuild
  .build({
    ...commonBuildOptions,
    outfile: "dist/index.esm.js",
    format: "esm",
  })
  .catch(() => process.exit(1));

// Build for CommonJS
esbuild
  .build({
    ...commonBuildOptions,
    outfile: "dist/index.js",
    format: "cjs",
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["src/variants/index.ts"],
    bundle: true,
    outfile: "dist/variants.js",
    format: "cjs",
    minify: isProduction,
    sourcemap: !isProduction,
    platform: "neutral",
    target: ["es2020"],
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    },
  })
  .catch(() => process.exit(1));
