import { Button, ButtonProps} from "./button";
import { Meta, StoryObj } from "@storybook/react";
export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Created account",
  },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};

