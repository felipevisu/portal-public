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
    <div>
      {filters.map((filter) => (
        <FilterItem key={filter.parameter} filter={filter} />
      ))}
    </div>
  );
}
