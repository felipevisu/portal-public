import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URI,
});

const serverApolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default serverApolloClient;
