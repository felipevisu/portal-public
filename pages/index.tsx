import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ApolloQueryResult } from "@apollo/client";
import serverApolloClient from "@/lib/ssr/common";
import { ChannelsDocument, ChannelsQuery } from "@/portal/api";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const result: ApolloQueryResult<ChannelsQuery> =
    await serverApolloClient.query<ChannelsQuery>({
      query: ChannelsDocument,
    });

  return {
    props: {
      channels: result?.data?.channels,
    },
    revalidate: 60 * 60,
  };
};

export const Page = ({
  channels,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <>Página inicial</>;
};

export default Page;
