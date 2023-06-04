import * as Types from './types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const ChannelFragmentDoc = gql`
    fragment Channel on Channel {
  id
  name
  slug
}
    `;
export const ChannelsDocument = gql`
    query Channels {
  channels {
    ...Channel
  }
}
    ${ChannelFragmentDoc}`;

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChannelsQuery(baseOptions?: Apollo.QueryHookOptions<Types.ChannelsQuery, Types.ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.ChannelsQuery, Types.ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.ChannelsQuery, Types.ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.ChannelsQuery, Types.ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<Types.ChannelsQuery, Types.ChannelsQueryVariables>;