import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "@repo/ui/tailwind.css";
import "@repo/ui-react-aria/dist/tailwind.css";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";

inject();

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
    // (Story) => (
    //   <div style={{ margin: "3em" }}>
    //     {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
    //     <Story />
    //     <Analytics />
    //   </div>
    // ),
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
