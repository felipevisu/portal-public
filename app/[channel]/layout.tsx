import Link from "next/link";

import client from "@/lib/client";
import { ChannelDocument, ChannelQuery } from "@/portal/api";
import { capitalize } from "@/utils/text";
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
    <div className="">
      <div className="flex items-center py-6">
        <div className="grow">
          <div className="flex items-center gap-4">
            <Link href={`/${channel.slug}`}>
              <div className="bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-0 p-3 rounded-xl hover:text-rose-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
            </Link>
            <div>
              <h4 className="font-semibold text-sm text-gray-600 dark:text-gray-400">
                Anunciante
              </h4>
              <h2 className="text-2xl font-bold">
                <Link href={`/${channel.slug}`}>
                  <span className="hover:text-rose-600">
                    {capitalize(channel.name)}
                  </span>
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <div id="back-button" />
      </div>
      {children}
    </div>
  );
}
