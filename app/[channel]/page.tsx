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

export default async function Page({ params }: PageProps) {
  return (
    <div>
      <h3>Início</h3>
    </div>
  );
}
