import React from "react"
import { ClientContext } from "graphql-hooks"
import client from "./graphQlClient"


const wrapRootElement = ({ element }) => (
  <ClientContext.Provider value={client}>{element}</ClientContext.Provider>
)

export default wrapRootElement
