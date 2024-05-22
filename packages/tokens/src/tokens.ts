const palette = {
  primary: {
    50: "#fdf9ed",
    100: "#f7edce",
    200: "#efda98",
    300: "#e8c468",
    400: "#e1ac3e",
    500: "#d98f27",
    600: "#c06d1f",
    700: "#a0501d",
    800: "#823f1e",
    900: "#6b341c",
    950: "#3d1a0b",
  },
  success: {
    50: "#f0f9f4",
    100: "#d9f4e6",
    200: "#b6e9c3",
    300: "#8fdca0",
    400: "#6fcf81",
    500: "#4dbf66",
    600: "#3aa14e",
    700: "#2c803f",
    800: "#1f6333",
    900: "#144b2a",
    950: "#0a2315",
  },
  danger: {
    50: "#fdf2f2",
    100: "#f9d9d9",
    200: "#f0a8a8",
    300: "#e57373",
    400: "#e04747",
    500: "#d62828",
    600: "#bb2525",
    700: "#9a1f1f",
    800: "#7a1a1a",
    900: "#601616",
    950: "#2f0b0b",
  },
};
const fontSizes = {
  xs: "12",
  sm: "14",
  base: "16",
  lg: "18",
  xl: "20",
};
const spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

export type Palette = typeof palette;

export { palette, fontSizes, spacing };
