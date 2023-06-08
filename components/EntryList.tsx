"use client";

import { useParams } from "next/navigation";

import client from "@/lib/client";
import { useEntriesQuery } from "@/portal/api";
import { getEntryType } from "@/utils/entryType";
import { mapEdgesToItems } from "@/utils/maps";

export const EntryList = () => {
  const { channel, type } = useParams();
  const { data, loading } = useEntriesQuery({
    client: client,
    variables: {
      first: 10,
      channel: channel,
      filter: {
        type: getEntryType(type),
      },
    },
  });

  if (loading) return <>Carregando...</>;

  if (!data?.entries) return <>Erro</>;

  const entries = mapEdgesToItems(data.entries);

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
