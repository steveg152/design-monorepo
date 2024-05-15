export const palette = {
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
} as const;

export type Palette = typeof palette;
