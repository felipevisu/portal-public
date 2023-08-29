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
      className="bg-rose-600 hover:bg-rose-700 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
      {...otherProps}
    >
      {children}
    </button>
  );
}
