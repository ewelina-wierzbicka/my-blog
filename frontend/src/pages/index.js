import React from "react"
import Layout from "../components/layout"
import ArticleList from "../components/articleList"
import Categories from "../components/categories"
import Search from "../components/search"
import styled from "styled-components"
import LastArticles from "../components/lastArticles"

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2vw;
  @media (max-width: 425px) {
    justify-content: center;
  }
`

const HiddenLastArticles = styled(LastArticles)`
  @media(max-width: 425px) {
    display: none;
  }
`

const IndexPage = () => (
  <Layout>
    <Menu>
      <Categories></Categories>
      <Search></Search>
    </Menu>
    <Content>
      <ArticleList></ArticleList>
      <HiddenLastArticles></HiddenLastArticles>
    </Content>
  </Layout>
)

export default IndexPage
