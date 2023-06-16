"use client";

import Link from "next/link";
import { createPortal } from "react-dom";

export default function BackButton({ href }: { href: string }) {
  const element = document?.getElementById("back-button")!;
  return createPortal(
    <Link
      href={href}
      className="
      border 
      hover:text-rose-600
      border-gray-200
      dark:border-gray-600
      bg-white 
      dark:bg-gray-800 
      dark:hover:bg-white 
      dark:hover:border-white
      font-semibold 
      px-4 
      py-2 
      rounded-md 
      shadow-sm 
      flex 
      items-center 
      gap-2
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>

      <span>Voltar</span>
    </Link>,
    element
  );
}
