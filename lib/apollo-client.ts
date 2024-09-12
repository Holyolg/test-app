import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { IncomingHttpHeaders } from "http";

// URL API
const httpLink = new HttpLink({
  uri: "https://api.escuelajs.co/graphql", // замените на URL вашего GraphQL API
});

const authLink = setContext((_, headers: { headers?: IncomingHttpHeaders }) => {
  // Получаем токен из localStorage
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
