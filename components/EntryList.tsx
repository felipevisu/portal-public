import Link from "next/link";

import { EntryFragment } from "@/portal/api";
import { capitalize } from "@/utils/text";

import Button from "./UI/button";
import { EntryAttribute } from "./EntryAttribute";

interface EntryListProps {
  entries: EntryFragment[];
  path: string;
}

export const EntryList = ({ entries, path }: EntryListProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg">
      {entries?.map((entry) => (
        <div
          key={entry.id}
          className="border-b border-gray-200 dark:border-gray-700  p-6"
        >
          <div className="flex items-start">
            <h4 className="text-lg grow font-semibold">{entry.name}</h4>
            <div className="text-gray-500">CNPJ: {entry.documentNumber}</div>
          </div>
          <div className="grid grid-cols-2 py-3 gap-3">
            <EntryAttribute
              name="Categorias"
              value={(entry.categories || [])
                .map((value) => value.name)
                .join(", ")}
            />
            {entry.attributes.map((attribute) => (
              <EntryAttribute
                key={attribute.attribute.id}
                name={attribute.attribute.name || ""}
                value={attribute.values.map((value) => value.name).join(", ")}
              />
            ))}
          </div>
          <Link href={`${path}/${entry.slug}`}>
            <Button>Acessar documentos</Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
