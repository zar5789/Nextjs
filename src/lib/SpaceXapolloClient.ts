
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const spacexClient = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/", // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});

