import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import SelectComponent from "@/components/Select";
import { theme } from "../theme"; // adjust path if needed

const meta: Meta<typeof SelectComponent> = {
  title: "Dropdown",
  component: SelectComponent,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            padding: "2rem",
            background: "var(--background)",
            minHeight: "100vh",
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    options: {
      control: "object",
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof SelectComponent>;

const defaultOptions = [
  { id: "1", name: "Option One" },
  { id: "2", name: "Option Two" },
  { id: "3", name: "Option Three" },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(args.value);

    return (
      <SelectComponent
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Select an option",
    value: "",
    options: defaultOptions,
  },
};

export const WithPreselectedValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(args.value);

    return (
      <SelectComponent
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Choose a category",
    value: "2",
    options: defaultOptions,
  },
};

export const LongOptionsList: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(args.value);

    return (
      <SelectComponent
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    );
  },
  args: {
    label: "Pick an item",
    value: "",
    options: Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      name: `Option ${i + 1}`,
    })),
  },
};
