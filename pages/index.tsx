import client from "@/graphql/client";
import { channelsQuery } from "./_queries";
import { ChannelFragment } from "@/graphql/types.generated";

interface PageProps {
  channels: ChannelFragment[];
}

export const Page = ({ channels }: PageProps) => {
  return <>Página inicial</>;
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: channelsQuery });
  return {
    props: {
      channels: data.channels,
    },
  };
};

export default Page;
