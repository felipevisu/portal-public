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
  const filters = buildFilters({ categories, attributes });

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex flex-col gap-4">
      {filters.map((filter) => (
        <FilterItem key={filter.parameter} filter={filter} />
      ))}
    </div>
  );
}
