import AttributeList from "@/components/AttributeList";
import EntryList from "@/components/EntryList";
import client from "@/lib/client";
import { AttributesDocument, AttributesQuery } from "@/portal/api";
import { getEntryType } from "@/utils/entryType";
import { mapEdgesToItems } from "@/utils/maps";
import { ApolloQueryResult } from "@apollo/client";

interface PageProps {
  params: { channel: string; type: string };
}

export const generateStaticParams = async () => {
  const paths = [{ type: "fornecedores" }, { type: "veiculos" }];
  return paths;
};

export const getData = async (type: string) => {
  const result: ApolloQueryResult<AttributesQuery> =
    await client.query<AttributesQuery>({
      query: AttributesDocument,
      variables: { filter: { type: getEntryType(type) } },
    });

  return { attributes: result?.data?.attributes };
};

export const Page = async ({ params }: PageProps) => {
  const { attributes } = await getData(params.type);
  if (!attributes) return null;

  return (
    <>
      <AttributeList attributes={mapEdgesToItems(attributes) || []} />
      <EntryList />
    </>
  );
};

export default Page;
