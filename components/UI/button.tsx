import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="bg-gray-800 hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-300 text-white dark:text-gray-900 text-sm leading-6 font-medium py-2 px-3 rounded-lg"
    >
      {children}
    </button>
  );
}
