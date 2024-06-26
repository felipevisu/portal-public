import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto xl:max-w-screen-xl px-3">{children}</div>
  );
}
