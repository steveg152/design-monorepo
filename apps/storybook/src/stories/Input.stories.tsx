import { TextInput } from "@repo/ui";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {},
  tags: ["autodocs"],
  args: { label: "Input" },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: { label: "Input" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    await userEvent.type(input, "Hello, World!");
    expect(input).toHaveValue("Hello, World!");
  },
} satisfies Story;

export const Unlabeled: Story = {
  args: { unlabeled: true, label: "Input Placeholder" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Input Placeholder");
  },
} satisfies Story;

export const Placeholder: Story = {
  args: { placeholder: "Placeholder" },
  parameters: {
    docs: {
      description: { story: "A text input field with a placeholder." },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Placeholder");
  },
} satisfies Story;

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByRole("textbox");
    expect(input).toBeDisabled();
  },
} satisfies Story;
