import { Button } from "@repo/ui-nobuild";
import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, expect, fireEvent } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "No Build/Button",
  component: Button,
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
} satisfies Story;

const handleClick = fn();

const checkClick = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");
  expect(button).toHaveTextContent("Button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
};

export const Default: Story = {
  args: { variant: "primary", onClick: handleClick },
  play: checkClick,
} satisfies Story;
