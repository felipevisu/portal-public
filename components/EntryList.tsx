import { EntryFragment } from "@/portal/api";

interface EntryListProps {
  entries: EntryFragment[];
}

export const EntryList = ({ entries }: EntryListProps) => {
  return (
    <div>
      {entries?.map((entry) => (
        <div key={entry.id}>
          <h4>{entry.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default EntryList;
