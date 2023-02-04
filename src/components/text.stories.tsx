import { Text, TextProps } from "./text";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/text",
  component: Text,
  args: {
    children: "Hello Word!",
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Testando...</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
