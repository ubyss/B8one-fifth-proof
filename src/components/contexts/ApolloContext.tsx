import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clhyvem1i29dl01up72o7egdg/master",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

const ApolloContext = ({children}: React.PropsWithChildren) => {
  return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  )
}

export default ApolloContext