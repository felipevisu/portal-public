import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="bg-rose-600 hover:bg-rose-700 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
    >
      {children}
    </button>
  );
}
