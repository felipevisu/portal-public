export const revalidate = 60;

import dynamic from "next/dynamic";

import EntryDetails from "@/components/EntryDetails";
import client from "@/lib/client";
import {
  ChannelsPathsDocument,
  ChannelsPathsQuery,
  EntriesPathsDocument,
  EntriesPathsQuery,
  EntryDocument,
  EntryQuery,
} from "@/portal/api";
import { getEntryType, getTypeLabel } from "@/utils/entryType";
import { ApolloQueryResult } from "@apollo/client";

const BackButton = dynamic(() => import("@/components/BackButton"), {
  ssr: false,
});

type Params = {
  slug: string;
  type: string;
  channel: string;
};

type Path = {
  channel: string;
  type: string;
  slug: string;
};

export const generateStaticParams = async () => {
  const { data: channels }: ApolloQueryResult<ChannelsPathsQuery> =
    await client.query<ChannelsPathsQuery>({
      query: ChannelsPathsDocument,
    });

  let paths: Path[] = [];
  const types = ["fornecedores", "veiculos"];

  for (const channel of channels.channels || []) {
    for (const type of types) {
      const { data: entries } = await client.query<EntriesPathsQuery>({
        query: EntriesPathsDocument,
        variables: {
          first: 100,
          channel: channel.slug,
          type: getEntryType(type),
        },
      });
      const entryNodes = entries.entries?.edges || [];

      const entryPaths = entryNodes.map((entry) => {
        return {
          channel: channel.slug,
          slug: entry.node.slug,
          type: type,
        };
      });
      paths = [...paths, ...entryPaths];
    }
  }
  return paths || [];
};

const getData = async (params: Params) => {
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
