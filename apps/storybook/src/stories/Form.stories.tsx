import { Button, Form, TextInput } from "@repo/ui/components";
import { Meta } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = typeof meta;

const handleSubmit = fn();

export const Default: Story = {
  args: {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit(event);
    },
    children: (
      <>
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <Button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstName = await canvas.findByLabelText("First Name");
    const lastName = await canvas.findByLabelText("Last Name");
    const button = await canvas.findByRole("button");

    await userEvent.type(firstName, "John");
    await userEvent.type(lastName, "Doe");
    await userEvent.click(button);
    // await fireEvent.submit(form);

    expect(firstName).toHaveValue("John");
    expect(lastName).toHaveValue("Doe");

    expect(handleSubmit).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleSubmit(event);
    },
    children: (
      <>
        <TextInput label="First Name" disabled />
        <TextInput label="Last Name" disabled />
        <Button type="submit" style={{ marginTop: "20px" }} disabled>
          Submit
        </Button>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstName = await canvas.findByLabelText("First Name");
    const lastName = await canvas.findByLabelText("Last Name");
    const button = await canvas.findByRole("button");

    await userEvent.type(firstName, "John");
    await userEvent.type(lastName, "Doe");

    expect(firstName).not.toHaveValue("John");
    expect(lastName).not.toHaveValue("Doe");

    expect(button).toBeDisabled();
  },
};
