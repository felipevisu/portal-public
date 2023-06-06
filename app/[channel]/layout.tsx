import serverApolloClient from "@/lib/ssr/common";
import { ChannelDocument, ChannelQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";

export const getData = async (slug: string) => {
  const result: ApolloQueryResult<ChannelQuery> =
    await serverApolloClient.query<ChannelQuery>({
      query: ChannelDocument,
      variables: { slug: slug },
    });

  return { channel: result?.data?.channel };
};

interface PageProps {
  children: React.ReactNode;
  params: { channel: string };
}

export default async function Layout({ children, params }: PageProps) {
  const { channel } = await getData(params.channel);

  if (!channel) return null;

  return (
    <div>
      <h2>{channel.name}</h2>
      {children}
    </div>
  );
}