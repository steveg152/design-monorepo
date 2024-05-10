import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

export const palette = {
  primary: {
    "50": "#fdf9ed",
    "100": "#f7edce",
    "200": "#efda98",
    "300": "#e8c468",
    "400": "#e1ac3e",
    "500": "#d98f27",
    "600": "#c06d1f",
    "700": "#a0501d",
    "800": "#823f1e",
    "900": "#6b341c",
    "950": "#3d1a0b",
  },
};

const variables = {
  "--background": colors.slate["900"],
  "--text": colors.slate["50"],
  "--primary": palette.primary["400"],
  "--primary-text": colors.slate["950"],
  "--secondary": "#823f1e",
  "--secondary-text": colors.slate["950"],
  "--muted": "#6b341c",
  "--muted-text": "#fff",
  "--info": colors.sky[400],
  "--info-text": colors.slate[950],
  "--destructive": colors.red[400],
  "--destructive-text": colors.slate[950],
};

export const zeus = plugin(
  ({ addBase }) =>
    addBase({
      ":root": variables,
    }),
  {
    theme: {
      backgroundColor: ({ theme }) => ({
        ...theme("colors"),
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        success: "var(--success)",
        info: "var(--info)",
        destructive: "var(--destructive)",
      }),
      textColor: ({ theme }) => ({
        ...theme("colors"),
        primary: "var(--primary-text)",
        secondary: "var(--secondary-text)",
        muted: "var(--muted-text)",
        success: "var(--success-text)",
        info: "var(--info-text)",
        destructive: "var(--destructive-text)",
      }),
      // extend: {
      //   colors: {
      //     ...palette,
      //     brand: "var(--primary)",
      //     "brand-text": "var(--primary-text)",
      //     green: "var(--success)",
      //     blue: "var(--info)",
      //     red: "var(--danger)",
      //   },
      // },
    },
  }
);
