// esbuild config options for building the library using jsDoc to assert a type on the object that is exported

// Environment setting
const isProduction = process.env.NODE_ENV === "production";

/**
 * @type {import('esbuild').BuildOptions}
 */
const commonOptions = {
  bundle: true,
  minify: isProduction,
  sourcemap: !isProduction,
  external: ["react", "react-dom"],
  target: ["es2020"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
  },
};

module.exports = commonOptions;
