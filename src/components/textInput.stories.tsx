import { Input, InputRootProps, } from "./input";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
export default {
  title: "Components/Input",
  component: Input.Root,
  args: {
    children: [
      <Input.Icon children={<Envelope />} />,
      <Input.Input placeholder="Hello word!" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj = {};
export const WithoutIcon: StoryObj = {
  
  args: {
    children: [      
      <Input.Input placeholder="Hello word!" />,
    ],
  },
};
