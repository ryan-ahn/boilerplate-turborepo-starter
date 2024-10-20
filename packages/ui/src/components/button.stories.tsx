import type { Meta, StoryObj } from "@storybook/react";

import { ButtonV1 } from "./button";

const meta: Meta<typeof ButtonV1> = {
  title: "ButtonV1",
  component: ButtonV1,
};

export default meta;

type Story = StoryObj<typeof ButtonV1>;

export const Default: Story = {
  args: {
    children: "Call to Action Text",
  },
};
