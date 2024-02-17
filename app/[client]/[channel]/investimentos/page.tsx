export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import InvestmentList from "@/components/InvestmentList";
import createClient from "@/lib/client";
import { InvestmentsDocument, InvestmentsQuery } from "@/portal/api";
import { mapEdgesToItems } from "@/utils/maps";
import { ApolloQueryResult } from "@apollo/client";

type Params = { client: string; channel: string };

const BackButton = dynamic(() => import("@/components/BackButton"), {
  ssr: false,
});

interface PageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

const getData = async (params: Params) => {
  const client = createClient(params.client);
  const investments: ApolloQueryResult<InvestmentsQuery> =
    await client.query<InvestmentsQuery>({
      query: InvestmentsDocument,
      variables: { first: 100, channel: params.channel },
    });

  return {
    investments: investments?.data?.investments,
  };
};

export default async function Page({ params }: PageProps) {
  const { investments } = await getData(params);

  if (!investments) return null;

  return (
    <>
      <BackButton href={`/${params.channel}`} />
      <InvestmentList investments={mapEdgesToItems(investments)} />
    </>
  );
}
