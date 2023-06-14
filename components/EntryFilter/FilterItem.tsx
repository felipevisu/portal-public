"use client";

import { capitalize } from "@/utils/text";

import { Filter } from "./utils";

export default function FilterItem({ filter }: { filter: Filter }) {
  const handleChange = (e: any) => {};

  return (
    <div>
      <h4>{capitalize(filter.title)}</h4>
      <div>
        {filter.choices.map((choice) => (
          <div key={choice.value}>
            <label>
              <input
                type="checkbox"
                value={choice.value}
                onChange={handleChange}
              />
              {choice.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
