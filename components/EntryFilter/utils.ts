import { AttributeFragment, CategoryFragment } from "@/portal/api";
import { mapEdgesToItems } from "@/utils/maps";

interface BuildFiltersProps {
  categories: CategoryFragment[];
  attributes: AttributeFragment[];
}

export type Choice = {
  value: string;
  label: string;
};

export type Filter = {
  title: string;
  parameter: string;
  choices: Choice[];
};

function buildCategoriesFilter(categories: CategoryFragment[]): Filter[] {
  return [
    {
      title: "Categoria",
      parameter: "categories",
      choices: categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    },
  ];
}

function buildAttributesFilter(attributes: AttributeFragment[]): Filter[] {
  return attributes.map((attribute) => {
    const choices = mapEdgesToItems(attribute.choices || { edges: [] });
    return {
      title: attribute.name || "",
      parameter: attribute.slug || "",
      choices: choices.map((choice) => ({
        label: choice.name || "",
        value: choice.slug || "",
      })),
    };
  });
}

export default function buildFilters({
  categories,
  attributes,
}: BuildFiltersProps) {
  return [
    ...buildCategoriesFilter(categories),
    ...buildAttributesFilter(attributes),
  ];
}
