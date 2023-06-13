import Link from "next/link";

import client from "@/lib/client";
import { ChannelDocument, ChannelQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";
import { HomeIcon } from "@heroicons/react/24/outline";

const getData = async (slug: string) => {
  const result: ApolloQueryResult<ChannelQuery> =
    await client.query<ChannelQuery>({
      query: ChannelDocument,
      variables: { slug: slug },
    });

  return { channel: result?.data?.channel };
};

interface LayoutProps {
  children: React.ReactNode;
  params: { channel: string };
}

export default async function Layout({ children, params }: LayoutProps) {
  const { channel } = await getData(params.channel);

  if (!channel) return null;

  return (
    <div>
      <div>
        <h2 className="mb-6 text-2xl font-bold">{channel.name}</h2>
      </div>
      {children}
    </div>
  );
}
