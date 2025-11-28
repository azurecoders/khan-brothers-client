"use client"

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode } from "react";

const ApolloProviderComponent = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    link: new HttpLink({ uri: (process.env.NEXT_PUBLIC_BACKEND_URL) + "/graphql" }),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloProviderComponent
