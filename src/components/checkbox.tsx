import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { InputHTMLAttributes } from "react";
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {} {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxPrimitive.Indicator asChild  {...props}>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
