import React from "react"
import { GraphQLClient, ClientContext } from "graphql-hooks"

let client;
export const onClientEntry = () => {
client = new GraphQLClient({
  url: `${process.env.API_URL}/graphql`,
});
}

export const wrapRootElement = ({ element }) => (
  <ClientContext.Provider value={client}>{element}</ClientContext.Provider>
);
