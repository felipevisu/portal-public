export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import EntryDetails from "@/components/EntryDetails";
import createClient from "@/lib/client";
import { EntryDocument, EntryQuery } from "@/portal/api";
import { getEntryType, getTypeLabel } from "@/utils/entryType";
import { ApolloQueryResult } from "@apollo/client";

const BackButton = dynamic(() => import("@/components/BackButton"), {
  ssr: false,
});

type Params = {
  slug: string;
  type: string;
  channel: string;
  client: string;
};

const getData = async (params: Params) => {
  const client = createClient(params.client);
  const entry: ApolloQueryResult<EntryQuery> = await client.query<EntryQuery>({
    query: EntryDocument,
    variables: { slug: params.slug, channel: params.channel },
  });

  return {
    entry: entry?.data?.entry,
  };
};

interface PageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

export default async function Page({ params }: PageProps) {
  const { entry } = await getData(params);
  if (!entry) return null;

  return (
    <>
      <BackButton href={`/${params.channel}/cadastros/${params.type}`} />
      <EntryDetails entry={entry} type={getTypeLabel(params.type)} />
    </>
  );
}
