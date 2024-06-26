import Link from "next/link";

import { ChannelFragment } from "@/portal/api";
import { capitalize } from "@/utils/text";

import Button from "./UI/button";
import Card from "./UI/card";

interface ChannelsListProps {
  channels: ChannelFragment[];
}

export const ChannelsList = ({ channels }: ChannelsListProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
      {channels.map((channel) => (
        <Link key={channel.id} href={`/${channel.slug}`}>
          <Card>
            <h4 className="font-semibold">{capitalize(channel.name)}</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {channel.totalEntries} veículos e fornecedores
            </div>
            <Button>Acessar</Button>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ChannelsList;
