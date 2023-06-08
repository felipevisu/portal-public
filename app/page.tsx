import ChannelsList from "@/components/ChannelsList";
import client from "@/lib/client";
import { ChannelsDocument, ChannelsQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";

const getData = async () => {
  const result: ApolloQueryResult<ChannelsQuery> =
    await client.query<ChannelsQuery>({
      query: ChannelsDocument,
    });

  return {
    channels: result?.data?.channels || [],
  };
};

export default async function Page() {
  const { channels } = await getData();
  return <ChannelsList channels={channels} />;
}
