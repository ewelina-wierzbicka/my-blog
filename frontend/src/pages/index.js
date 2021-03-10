import React from "react"
import Layout from "../components/layout"
import ArticleList from "../components/articleList"
import Categories from "../components/categories"
import Search from "../components/search"
import styled from "styled-components"
import Content from "../components/content"

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const MainContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2vw;
  @media (max-width: 627px) {
    justify-content: center;
  }
`


const IndexPage = () => (
  <Layout>
    <Menu>
      <Categories></Categories>
      <Search></Search>
    </Menu>
    <MainContent>
      <ArticleList></ArticleList>
    </MainContent>
  </Layout>
)

export default IndexPage
