import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getCookie } from "cookies-next";

const authLink = setContext((_, { headers }) => {
	const token = getCookie("access_token");
	if (token) {
		return {
			headers: {
				...headers,
				Authorization: token ? `Bearer ${token}` : "",
			},
		};
	} else return headers;
});
const httpLink = new HttpLink({
	uri: "https://api.escuelajs.co/graphql",
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default client;
