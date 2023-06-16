import { Metadata } from "next";

import GridMenu from "@/components/GridMenu";
import client from "@/lib/client";
import { ChannelsPathsDocument, ChannelsPathsQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";

export const generateStaticParams = async () => {
  const { data }: ApolloQueryResult<ChannelsPathsQuery> =
    await client.query<ChannelsPathsQuery>({
      query: ChannelsPathsDocument,
    });

  const paths = data?.channels?.map((channel) => {
    return { channel: channel.slug };
  });

  return paths || [];
};

interface PageProps {
  params: { channel: string };
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

export default async function Page({ params }: PageProps) {
  return <GridMenu channel={params.channel} />;
}
