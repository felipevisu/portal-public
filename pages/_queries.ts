import { channelFragment } from "@/graphql/fragments/channels";
import { gql } from "@apollo/client";

export const channelsQuery = gql`
  ${channelFragment}
  query Channels {
    channels {
      ...Channel
    }
  }
`;
