import { HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";

export const createClient = (slug: string) => {
  const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_API_URI + slug + "/graphql/",
      }),
    });
  });
  const client = getClient();
  return client;
};

export default createClient;
