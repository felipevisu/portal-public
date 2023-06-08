"use client";

import { useParams } from "next/navigation";

import client from "@/lib/client";
import { EntryTypeEnum, useEntriesQuery } from "@/portal/api";
import { mapEdgesToItems } from "@/utils/maps";

const getType = (type: string) => {
  if (type === "fornecedores") return EntryTypeEnum.PROVIDER;
  if (type === "veiculos") return EntryTypeEnum.VEHICLE;
  return null;
};

export const EntryList = () => {
  const { channel, type } = useParams();
  const { data, loading } = useEntriesQuery({
    client: client,
    variables: {
      first: 10,
      channel: channel,
      filter: {
        type: getType(type),
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
