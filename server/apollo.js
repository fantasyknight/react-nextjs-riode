import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: API_URI
    }),
    cache: new InMemoryCache()
});

export default withApollo(apolloClient);