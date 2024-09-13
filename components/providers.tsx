"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { FC } from "react";

export const Providers: FC<React.PropsWithChildren> = ({ children }) => {
	const client = new ApolloClient({
		uri: "https://api.escuelajs.co/graphql",
		cache: new InMemoryCache(),
	});
	return (
		<>
			<ApolloProvider client={client}>{children}</ApolloProvider>
		</>
	);
};
