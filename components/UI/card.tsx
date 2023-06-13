import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
      {children}
    </div>
  );
}
