import Link from "next/link";

import { EntryFragment } from "@/portal/api";

interface EntryListProps {
  entries: EntryFragment[];
  path: string;
}

export const EntryList = ({ entries, path }: EntryListProps) => {
  return (
    <div>
      {entries?.map((entry) => (
        <div key={entry.id}>
          <Link href={`${path}/${entry.slug}`}>
            <h4>{entry.name}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
