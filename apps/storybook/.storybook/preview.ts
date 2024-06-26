import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "@repo/ui/tailwind.css";
import "@repo/ui-react-aria/dist/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      defaultTheme: "dark",
      themes: {
        light: "light",
        dark: "dark",
      },
      attributeName: "data-mode",
    }),
  ],

  tags: ["autodocs"],
};

export default preview;
