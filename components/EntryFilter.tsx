import { AttributeFragment, CategoryFragment } from "@/portal/api";
import { capitalize } from "@/utils/text";

interface EntryFilterProps {
  attributes: AttributeFragment[];
  categories: CategoryFragment[];
}

export default function EntryFilter({
  attributes,
  categories,
}: EntryFilterProps) {
  return (
    <div>
      <div>Categoria</div>
      {attributes.map((attribute) => (
        <div key={attribute.id}>
          <h4>{capitalize(attribute.name || "")}</h4>
        </div>
      ))}
    </div>
  );
}
