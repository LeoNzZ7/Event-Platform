import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odnflu20rh01z2e93x8uew/master',
    cache: new InMemoryCache()
})