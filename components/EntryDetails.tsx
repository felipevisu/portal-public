import { EntryDetailsFragment } from "@/portal/api";
import { formatDate } from "@/utils/date";
import { mapEdgesToItems } from "@/utils/maps";

import { EntryAttribute } from "./EntryAttribute";

interface EntryDetailsProps {
  entry: EntryDetailsFragment;
  type: string;
}

export const EntryDetails = ({ entry, type }: EntryDetailsProps) => {
  const documents = mapEdgesToItems(entry.documents!);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg mb-6 lg:max-w-screen-lg mx-auto">
      <div className="bg-gray-200 dark:bg-gray-700 dark:text-white rounded-t-lg px-6 py-3 text-xl font-semibold">
        {entry.name}
      </div>
      <div className="p-6">
        <div className="mb-4 text-xl">CNPJ: {entry.documentNumber}</div>
        <div className="grid grid-cols-2 gap-3">
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
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 px-6 py-3 text-xl font-semibold">
        Documentos
      </div>
      <div className="p-6 divide-y divite-gray-200 dark:divide-gray-700">
        {documents.map((document) => (
          <div key={document.id}>
            <div className="flex items-start py-3">
              <div className="grow">
                <h4>{document.name}</h4>
                {document.expires && (
                  <span className="text-sm text-gray-400">
                    Validade {formatDate(document.defaultFile?.expirationDate)}
                  </span>
                )}
              </div>
              <div>
                <a
                  target="_blank"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded-md flex items-center gap-1"
                  href={document.defaultFile?.file?.url}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  Abrir
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryDetails;
