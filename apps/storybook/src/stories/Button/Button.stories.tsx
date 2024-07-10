import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, expect, fireEvent } from "@storybook/test";
import { Button } from "@repo/ui/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
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
  args: { variant: "default", onClick: handleClick },
  play: checkClick,
} satisfies Story;

export const DefaultDisabled: Story = {
  args: { variant: "default", disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  },
} satisfies Story;

export const Destructive: Story = {
  args: { variant: "destructive" },
} satisfies Story;

export const Info: Story = {
  args: { variant: "info" },
} satisfies Story;

export const Ghost: Story = {
  args: { variant: "ghost" },
} satisfies Story;

export const Link: Story = {
  args: { children: "Link 😊", variant: "link" },
} satisfies Story;

export const AllButtons: Story = {
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} />
      <Button variant="primary" {...args} />
      <Button variant="destructive" {...args} />
      <Button variant="info" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
    </div>
  ),
} satisfies Story;
