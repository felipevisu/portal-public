import { capitalize } from "@/utils/text";

interface EntryAttributeProps {
  name: string;
  value: string;
}

export function EntryAttribute({ name, value }: EntryAttributeProps) {
  return (
    <div className="bg-gray-50 rounded-lg py-2 px-3">
      <div className="text-sm text-slate-500">{capitalize(name)}</div>
      <div>{capitalize(value)}</div>
    </div>
  );
}
