import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: string | number;
}

export default function Button(props: ButtonProps) {
  const { children, ...otherProps } = props;
  return (
    <button
      type="button"
      className="bg-amber-500 hover:bg-amber-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
      {...otherProps}
    >
      {children}
    </button>
  );
}
