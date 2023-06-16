import Link from "next/link";
import { useParams } from "next/navigation";

import { EntryFragment } from "@/portal/api";
import { capitalize } from "@/utils/text";

import Button from "./UI/button";
import { EntryAttribute } from "./EntryAttribute";

interface EntryListProps {
  entries: EntryFragment[];
  path: string;
  title: string;
}

export const EntryList = ({ entries, path, title }: EntryListProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg mb-6">
      <div className="bg-rose-600 dark:bg-gray-700 text-white rounded-t-lg px-6 py-3 text-xl font-semibold">
        {title}
      </div>
      {!entries.length && (
        <div className="text-center p-6">Nenhum cadastro encontrado.</div>
      )}
      {entries?.map((entry) => (
        <div
          key={entry.id}
          className="border-t border-gray-200 dark:border-gray-700  p-6"
        >
          <div className="flex items-start">
            <h4 className="text-lg grow font-semibold">{entry.name}</h4>
            <div className="text-gray-600 dark:text-gray-400">
              CNPJ: {entry.documentNumber}
            </div>
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
