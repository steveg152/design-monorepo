import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem } from "@repo/ui-radix";
import { expect, userEvent, within } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: "Radix/Select",
  component: Select,
  parameters: {},
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { id: 1, name: "Aerospace" },
  { id: 2, name: "Automotive" },
  { id: 3, name: "Construction" },
  { id: 4, name: "Electronics" },
  { id: 5, name: "Energy" },
  { id: 6, name: "Food" },
  { id: 7, name: "Healthcare" },
  { id: 8, name: "Manufacturing" },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return (
      <Select defaultValue={options[0].name} {...args}>
        {options.map((option) => (
          <SelectItem key={option.id} value={option.name}>
            {option.name}
          </SelectItem>
        ))}
      </Select>
    );
  },
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = await canvas.findByRole("button");
    await select.click();
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    expect(select).toHaveTextContent("Automotive");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{Enter}");
    expect(select).toHaveTextContent("Construction");
  },
} satisfies Story;

export const Default: Story = {
  args: {},
} satisfies Story;
