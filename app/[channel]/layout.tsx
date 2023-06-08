import Link from "next/link";

import client from "@/lib/client";
import { ChannelDocument, ChannelQuery } from "@/portal/api";
import { ApolloQueryResult } from "@apollo/client";

const getData = async (slug: string) => {
  const result: ApolloQueryResult<ChannelQuery> =
    await client.query<ChannelQuery>({
      query: ChannelDocument,
      variables: { slug: slug },
    });

  return { channel: result?.data?.channel };
};

interface LayoutProps {
  children: React.ReactNode;
  params: { channel: string };
}

export default async function Layout({ children, params }: LayoutProps) {
  const { channel } = await getData(params.channel);

  if (!channel) return null;

  return (
    <div>
      <h2>{channel.name}</h2>
      <nav>
        <ul>
          <li>
            <Link href={`/${params.channel}`}>Início</Link>
          </li>
          <li>
            <Link href={`/${params.channel}/veiculos`}>Veículos</Link>
          </li>
          <li>
            <Link href={`/${params.channel}/fornecedores`}>Fornecedores</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
