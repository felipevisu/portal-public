export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import InvestmentList from "@/components/InvestmentList";
import Paginator from "@/components/Pagtinator";
import createClient from "@/lib/client";
import { InvestmentsDocument, InvestmentsQuery } from "@/portal/api";
import { mapEdgesToItems } from "@/utils/maps";
import { getPagination } from "@/utils/pagination";
import { ApolloQueryResult } from "@apollo/client";

type Params = { client: string; channel: string };
type SearchParams = Record<string, string>;

const BackButton = dynamic(() => import("@/components/BackButton"), {
  ssr: false,
});

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

const getData = async (params: Params, searchParams: SearchParams) => {
  const client = createClient(params.client);
  const pagination = getPagination(searchParams);

  const investments: ApolloQueryResult<InvestmentsQuery> =
    await client.query<InvestmentsQuery>({
      query: InvestmentsDocument,
      variables: { first: 100, channel: params.channel, ...pagination },
    });

  return {
    investments: investments?.data?.investments,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { investments } = await getData(params, searchParams);
  const path = `/${params.channel}/investimentos`;

  if (!investments) return null;

  return (
    <>
      <BackButton href={`/${params.channel}`} />
      <InvestmentList investments={mapEdgesToItems(investments)} />
      <Paginator pageInfo={investments.pageInfo} path={path} />
    </>
  );
}
