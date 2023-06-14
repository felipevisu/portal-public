export const revalidate = 0;

import { EntryFilter } from "@/components/EntryFilter";
import EntryList from "@/components/EntryList";
import Paginator from "@/components/Pagtinator";
import client from "@/lib/client";
import {
  AttributesDocument,
  AttributesQuery,
  CategoriesDocument,
  CategoriesQuery,
  EntriesDocument,
  EntriesQuery,
} from "@/portal/api";
import { getEntryType } from "@/utils/entryType";
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

  const categories: ApolloQueryResult<CategoriesQuery> =
    await client.query<CategoriesQuery>({
      query: CategoriesDocument,
      variables: { first: 100, filter: { type: getEntryType(params.type) } },
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
    categories: categories?.data?.categories,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { attributes, entries, categories } = await getData(
    params,
    searchParams
  );

  if (!attributes || !entries || !categories) return null;

  const path = `/${params.channel}/cadastros/${params.type}`;

  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-span-2">
        <EntryFilter
          attributes={mapEdgesToItems(attributes)}
          categories={mapEdgesToItems(categories)}
        />
      </div>
      <div className="col-span-4">
        <EntryList entries={mapEdgesToItems(entries)} path={path} />
        <Paginator pageInfo={entries.pageInfo} path={path} />
      </div>
    </div>
  );
}
