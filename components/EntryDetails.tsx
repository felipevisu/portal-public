import { EntryDetailsFragment } from "@/portal/api";

interface EntryDetailsProps {
  entry: EntryDetailsFragment;
}

export const EntryDetails = ({ entry }: EntryDetailsProps) => {
  return <>{entry.name}</>;
};

export default EntryDetails;
