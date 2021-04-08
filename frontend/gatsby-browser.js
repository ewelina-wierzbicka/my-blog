import React from "react"
import { GraphQLClient, ClientContext } from "graphql-hooks"

const client = new GraphQLClient({
  url: "http://localhost:1337/graphql",
})

const wrapRootElement = ({ element }) => (
  <ClientContext.Provider value={client}>{element}</ClientContext.Provider>
)

export default wrapRootElement
