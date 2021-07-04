import { GraphQLClient } from "graphql-hooks"


const client = new GraphQLClient({
    url: `${process.env.API_URL}/graphql`,
  });

  export default client;