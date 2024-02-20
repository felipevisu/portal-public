export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import Paginator from "@/components/Pagtinator";
import SessionList from "@/components/SessionList";
import createClient from "@/lib/client";
import { SessionsDocument, SessionsQuery } from "@/portal/api";
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

  const sessions: ApolloQueryResult<SessionsQuery> =
    await client.query<SessionsQuery>({
      query: SessionsDocument,
      variables: { first: 100, channel: params.channel, ...pagination },
    });

  return {
    sessions: sessions?.data?.sessions,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { sessions } = await getData(params, searchParams);
  const path = `/${params.channel}/sessoes`;

  if (!sessions) return null;

  return (
    <>
      <BackButton href={`/${params.channel}`} />
      <SessionList sessions={mapEdgesToItems(sessions)} path={path} />
      <Paginator pageInfo={sessions.pageInfo} path={path} />
    </>
  );
}
