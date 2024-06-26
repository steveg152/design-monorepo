import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@repo/ui-react-aria";
import { expect, userEvent, within } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: "React Aria/Select",
  component: Select,
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return (
      <Select {...args} placeholder="Testing Select">
        <Select.Item>Test</Select.Item>
        <Select.Item>Test</Select.Item>
        <Select.Item>Test</Select.Item>
        <Select.Item>Test</Select.Item>
      </Select>
    );
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = await canvas.findByRole("button");
    await select.click();
    await userEvent.keyboard("{ArrowDown}");
    const items = await canvas.findAllByText("Test");
    expect(items).toHaveLength(4);
  },
} satisfies Story;

export const Default: Story = {
  args: {},
} satisfies Story;
