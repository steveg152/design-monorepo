// rollup.config.js
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser").terser;

const isProduction = process.env.NODE_ENV === "production";

module.exports = [
  {
    input: "src/components/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: !isProduction,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [resolve(), commonjs(), typescript(), isProduction && terser()],
  },
  {
    input: "src/components/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: !isProduction,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [resolve(), commonjs(), typescript(), isProduction && terser()],
  },
];
