"use client";

import { useState } from "react";

import { AttributeFragment, CategoryFragment } from "@/portal/api";
import { capitalize } from "@/utils/text";

import FilterItem from "./FilterItem";
import buildFilters from "./utils";

interface EntryFilterProps {
  attributes: AttributeFragment[];
  categories: CategoryFragment[];
}

export default function EntryFilter({
  attributes,
  categories,
}: EntryFilterProps) {
  const [open, setOpen] = useState(false);
  const filters = buildFilters({ categories, attributes });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col gap-4">
      <div
        className="bg-gray-300 rounded-lg px-4 py-2 lg:hidden font-semibold flex items-center gap-2"
        onClick={() => setOpen(!open)}
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <span>Filtro</span>
      </div>
      <div className={`p-6 ${open ? "block" : "hidden lg:block"}`}>
        {filters.map((filter) => (
          <FilterItem key={filter.parameter} filter={filter} />
        ))}
      </div>
    </div>
  );
}
