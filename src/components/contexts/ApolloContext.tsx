import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://lobster-app-2fa5v.ondigitalocean.app/graphql",
  cache: new InMemoryCache(),
});

const ApolloContext = ({children}: React.PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloContext