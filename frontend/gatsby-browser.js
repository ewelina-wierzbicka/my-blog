import React from "react"
import { GraphQLClient, ClientContext } from "graphql-hooks"

export const client = new GraphQLClient({
  url: `${process.env.API_URL}/graphql`,
})

const wrapRootElement = ({ element }) => (
  <ClientContext.Provider value={client}>{element}</ClientContext.Provider>
)

export default wrapRootElement
