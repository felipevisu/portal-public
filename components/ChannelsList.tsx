import Link from "next/link";

import { ChannelFragment } from "@/portal/api";

interface ChannelsListProps {
  channels: ChannelFragment[];
}

export const ChannelsList = ({ channels }: ChannelsListProps) => {
  return (
    <div>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <Link href={`/${channel.slug}`}>{channel.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsList;
