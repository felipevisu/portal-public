export const revalidate = 0;

import Link from "next/link";

import AttributeList from "@/components/AttributeList";
import EntryList from "@/components/EntryList";
import client from "@/lib/client";
import {
  AttributesDocument,
  AttributesQuery,
  EntriesDocument,
  EntriesQuery,
} from "@/portal/api";
import { getEntryType } from "@/utils/entryType";
import { mapEdgesToItems } from "@/utils/maps";
import { ApolloQueryResult } from "@apollo/client";

type Params = { channel: string; type: string };
type SearchParams = { after?: string; before?: string };

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

const getPagination = (searchParams: SearchParams) => {
  if (searchParams.after) return { first: 10, after: searchParams.after };
  if (searchParams.before) return { last: 10, before: searchParams.before };
  return { first: 10 };
};

const getData = async (params: Params, searchParams: SearchParams) => {
  const attributes: ApolloQueryResult<AttributesQuery> =
    await client.query<AttributesQuery>({
      query: AttributesDocument,
      variables: { filter: { type: getEntryType(params.type) } },
    });

  const pagination = getPagination(searchParams);

  const entries: ApolloQueryResult<EntriesQuery> =
    await client.query<EntriesQuery>({
      query: EntriesDocument,
      variables: {
        ...pagination,
        channel: params.channel,
        filter: { type: getEntryType(params.type) },
      },
    });

  return {
    attributes: attributes?.data?.attributes,
    entries: entries?.data?.entries,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { attributes, entries } = await getData(params, searchParams);
  if (!attributes || !entries) return null;

  const { pageInfo } = entries;

  return (
    <>
      <AttributeList attributes={mapEdgesToItems(attributes) || []} />
      <EntryList entries={mapEdgesToItems(entries) || []} />
      {pageInfo.hasPreviousPage && (
        <Link
          href={{
            pathname: `/${params.channel}/${params.type}`,
            query: { before: pageInfo.startCursor },
          }}
        >
          Anterior
        </Link>
      )}
      {pageInfo.hasNextPage && (
        <Link
          href={{
            pathname: `/${params.channel}/${params.type}`,
            query: { after: pageInfo.endCursor },
          }}
        >
          Proximo
        </Link>
      )}
    </>
  );
}
