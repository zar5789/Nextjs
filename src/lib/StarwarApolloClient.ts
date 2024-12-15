import { ApolloClient, InMemoryCache } from "@apollo/client";

export const starwarClient = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index", // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});
