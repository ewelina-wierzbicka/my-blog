import React from "react"
import Header from "./header"
import { createGlobalStyle } from 'styled-components'
import styled from "styled-components"
import Categories from "./categories"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Michroma', sans-serif;
  }
`

const Container = styled.div`
margin: 0 4%;
@media (min-width: 1366px) {
  margin: 0 8%;
}

@media (min-width: 1920px) {
  margin: 0 12%;
}

@media (min-width: 2560px) {
  margin: 0 18%;
}
}
`


const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
    <Container>
      <Header></Header>
      <Categories></Categories>
      {children}
    </Container>
    </>
  )
}

export default Layout
