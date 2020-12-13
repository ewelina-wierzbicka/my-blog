/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "./header"


const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}

export default Layout
