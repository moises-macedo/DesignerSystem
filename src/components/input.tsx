import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
}
const TextInputRoot = ({ children }: InputRootProps) => {
  return (
    <div
      className={clsx(
        `py-4 px-3 rounded bg-gray-800  flex items-center gap-3
   w-full focus-within:ring-2 ring-cyan-300 h-12
  `
      )}
    >
      {children}
    </div>
  );
};
export interface TextInputIconProps {
  children: ReactNode;
}
const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const TextInput = (props: TextInputProps) => {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
};

export const Input = {
  Root: TextInputRoot,
  Input: TextInput,
  Icon: TextInputIcon,
};
