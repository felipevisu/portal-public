import { ApolloQueryResult } from "@apollo/client";
import serverApolloClient from "@/lib/ssr/common";
import { ChannelsDocument, ChannelsQuery } from "@/portal/api";
import { ChannelsList } from "@/components/channels";

export const getData = async () => {
  const result: ApolloQueryResult<ChannelsQuery> =
    await serverApolloClient.query<ChannelsQuery>({
      query: ChannelsDocument,
    });

  return {
    channels: result?.data?.channels || [],
  };
};

export const Page = async () => {
  const { channels } = await getData();
  return <ChannelsList channels={channels} />;
};

export default Page;