export const revalidate = 0;

import AttributeList from "@/components/AttributeList";
import EntryList from "@/components/EntryList";
import Paginator from "@/components/Pagtinator";
import client from "@/lib/client";
import {
  AttributesDocument,
  AttributesQuery,
  EntriesDocument,
  EntriesQuery,
} from "@/portal/api";
import { getEntryType, getTypeLabel } from "@/utils/entryType";
import { mapEdgesToItems } from "@/utils/maps";
import { getPagination } from "@/utils/pagination";
import { ApolloQueryResult } from "@apollo/client";

type Params = { channel: string; type: string };
type SearchParams = { after?: string; before?: string };

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

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

  const path = `/${params.channel}/cadastros/${params.type}`;

  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2">
        <AttributeList attributes={mapEdgesToItems(attributes) || []} />
      </div>
      <div className="col-span-4">
        <EntryList entries={mapEdgesToItems(entries) || []} path={path} />
        <Paginator pageInfo={entries.pageInfo} path={path} />
      </div>
    </div>
  );
}
