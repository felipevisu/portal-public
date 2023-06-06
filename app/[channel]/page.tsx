import serverApolloClient from "@/lib/ssr/common";
import { ChannelsPathsDocument, ChannelsPathsQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";
import Link from "next/link";

export const generateStaticParams = async () => {
  const { data }: ApolloQueryResult<ChannelsPathsQuery> =
    await serverApolloClient.query<ChannelsPathsQuery>({
      query: ChannelsPathsDocument,
    });

  const paths = data?.channels?.map((channel) => {
    return { channel: channel.slug };
  });

  return paths;
};

interface PageProps {
  params: { channel: string };
}

export const Page = ({ params }: PageProps) => {
  return (
    <div>
      <Link href={`${params.channel}/fornecedores`}>Fornecedores</Link>
    </div>
  );
};

export default Page;
