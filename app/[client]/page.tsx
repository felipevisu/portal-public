export const revalidate = 60;

import { Metadata } from "next";

import ChannelsList from "@/components/ChannelsList";
import createClient from "@/lib/client";
import { ChannelsDocument, ChannelsQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";

type Params = { client: string };

interface PageProps {
  params: Params;
}

const getData = async (params: Params) => {
  const client = createClient(params.client);
  const result: ApolloQueryResult<ChannelsQuery> =
    await client.query<ChannelsQuery>({
      query: ChannelsDocument,
    });

  return {
    channels: result?.data?.channels || [],
  };
};

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

export default async function Page({ params }: PageProps) {
  const { channels } = await getData(params);
  return <ChannelsList channels={channels} />;
}
