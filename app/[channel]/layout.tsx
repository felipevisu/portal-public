import Link from "next/link";

import client from "@/lib/client";
import { ChannelDocument, ChannelQuery } from "@/portal/api";
import { capitalize } from "@/utils/text";
import { ApolloQueryResult } from "@apollo/client";

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
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <Link href={`/${channel.slug}`}>
            <span className="hover:text-rose-500">
              {capitalize(channel.name)}
            </span>
          </Link>
        </h2>
      </div>
      {children}
    </div>
  );
}
