import { Metadata } from "next";
import dynamic from "next/dynamic";

import { EntryFilter } from "@/components/EntryFilter";
import EntryList from "@/components/EntryList";
import Paginator from "@/components/Pagtinator";
import createClient from "@/lib/client";
import {
  AttributesDocument,
  AttributesQuery,
  CategoriesDocument,
  CategoriesQuery,
  EntriesDocument,
  EntriesQuery,
  EntryFilterInput,
} from "@/portal/api";
import { getEntryType, getTypeLabel } from "@/utils/entryType";
import { mapEdgesToItems } from "@/utils/maps";
import { getPagination } from "@/utils/pagination";
import { ApolloQueryResult } from "@apollo/client";

type Params = { client: string; channel: string; type: string };
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

  const filter: Record<string, any> = {};
  if (searchParams.categories) {
    filter.categories = searchParams.categories;
  }
  const attributesFilter: EntryFilterInput["attributes"] = [];
  attributes?.data?.attributes?.edges.forEach((attribute) => {
    const slug = attribute.node.slug;
    if (slug && searchParams[slug]) {
      attributesFilter.push({ slug: slug, values: [searchParams[slug]] });
    }
  });
  if (attributesFilter.length) filter.attributes = attributesFilter;

  const entries: ApolloQueryResult<EntriesQuery> =
    await client.query<EntriesQuery>({
      query: EntriesDocument,
      variables: {
        ...pagination,
        channel: params.channel,
        filter: { type: getEntryType(params.type), ...filter },
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
    <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
      <div className="w-full lg:w-2/6 sticky top-4">
        <EntryFilter
          attributes={mapEdgesToItems(attributes)}
          categories={mapEdgesToItems(categories)}
        />
      </div>
      <div className="w-full lg:w-4/6">
        <BackButton href={`/${params.channel}`} />
        <EntryList
          entries={mapEdgesToItems(entries)}
          path={path}
          title={getTypeLabel(params.type)}
        />
        <Paginator pageInfo={entries.pageInfo} path={path} />
      </div>
    </div>
  );
}
