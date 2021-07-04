import React from "react"
import { ClientContext } from "graphql-hooks"
import client from "./graphQlClient"


export const wrapRootElement = ({ element }) => (
  <ClientContext.Provider value={client}>{element}</ClientContext.Provider>
)
