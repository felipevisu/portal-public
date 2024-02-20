export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import { RenderContent } from "@/components/RenderContent";
import createClient from "@/lib/client";
import { SessionDetailsDocument, SessionDetailsQuery } from "@/portal/api";
import { formatDate } from "@/utils/date";
import { ApolloQueryResult } from "@apollo/client";

const BackButton = dynamic(() => import("@/components/BackButton"), {
  ssr: false,
});

type Params = {
  id: string;
  channel: string;
  client: string;
};

const getData = async (params: Params) => {
  const client = createClient(params.client);
  const session: ApolloQueryResult<SessionDetailsQuery> =
    await client.query<SessionDetailsQuery>({
      query: SessionDetailsDocument,
      variables: { id: params.id },
    });

  return {
    session: session?.data?.session,
  };
};

interface PageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

export default async function Page({ params }: PageProps) {
  const { session } = await getData(params);
  if (!session) return null;

  return (
    <>
      <BackButton href={`/${params.channel}/sessoes`} />
      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg mb-6 lg:max-w-screen-lg mx-auto">
        <div className="divide-y divite-gray-200 dark:divide-gray-700">
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400">Sessão:</p>
            <h2 className="text-2xl font-bold">{session.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Data: {formatDate(session.date || "", "LL, h:mm a")}
            </p>
          </div>
          <div className="p-6">
            <RenderContent content={session.content || ""} />
          </div>
        </div>
      </div>
    </>
  );
}
