"use client";

import client from "@/app/apollo/client";
import { ApolloProvider } from "@apollo/client";

import { FC } from "react";

export const Providers: FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ApolloProvider client={client}>{children}</ApolloProvider>
		</>
	);
};
