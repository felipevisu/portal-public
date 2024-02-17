export const revalidate = 60;

import { Metadata } from "next";
import dynamic from "next/dynamic";

import { EntryFilter } from "@/components/EntryFilter";
import EntryList from "@/components/EntryList";
import Paginator from "@/components/Pagtinator";
import createClient from "@/lib/client";
import {
  CategoriesDocument,
  CategoriesQuery,
  EntriesDocument,
  EntriesQuery,
  EntryFilterInput,
  EntryTypeDetailsDocument,
  EntryTypeDetailsQuery,
} from "@/portal/api";
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

  const entryType: ApolloQueryResult<EntryTypeDetailsQuery> =
    await client.query<EntryTypeDetailsQuery>({
      query: EntryTypeDetailsDocument,
      variables: { slug: params.type },
    });

  const categories: ApolloQueryResult<CategoriesQuery> =
    await client.query<CategoriesQuery>({
      query: CategoriesDocument,
      variables: { first: 100 },
    });

  const pagination = getPagination(searchParams);

  const filter: Record<string, any> = {};
  if (searchParams.categories) {
    filter.categories = searchParams.categories;
  }
  const attributesFilter: EntryFilterInput["attributes"] = [];
  entryType?.data?.entryType?.entryAttributes?.forEach((attribute) => {
    const slug = attribute.slug;
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
        filter: { entryTypes: [entryType.data.entryType?.id], ...filter },
      },
    });

  return {
    entryType: entryType?.data.entryType,
    entries: entries?.data?.entries,
    categories: categories?.data?.categories,
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  const { entryType, entries, categories } = await getData(
    params,
    searchParams
  );

  if (!entryType || !entries || !categories) return null;

  const path = `/${params.channel}/cadastros/${params.type}`;

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
      <div className="w-full lg:w-2/6 sticky top-4">
        <EntryFilter
          attributes={entryType.entryAttributes || []}
          categories={mapEdgesToItems(categories)}
        />
      </div>
      <div className="w-full lg:w-4/6">
        <BackButton href={`/${params.channel}`} />
        <EntryList
          entries={mapEdgesToItems(entries)}
          path={path}
          title={entryType.name}
        />
        <Paginator pageInfo={entries.pageInfo} path={path} />
      </div>
    </div>
  );
}
