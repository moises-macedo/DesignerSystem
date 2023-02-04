import { Heading, HeadingProps} from "./heading";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/heading",
  component: Heading,
  args: {
    children: "Hello Word!",
  },
} as Meta<HeadingProps>;

export const Default: StoryObj = {};
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Testando...</h1>,
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
