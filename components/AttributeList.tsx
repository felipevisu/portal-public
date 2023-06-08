import { AttributeFragment } from "@/portal/api";

interface AttributeListProps {
  attributes: AttributeFragment[];
}

export const AttributeList = ({ attributes }: AttributeListProps) => {
  return (
    <ul>
      {attributes.map((attribute) => (
        <li key={attribute.id}>{attribute.name}</li>
      ))}
    </ul>
  );
};

export default AttributeList;
