import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "graphql-hooks"
import slugify from "@sindresorhus/slugify"
import Layout from "../components/layout"
import ArticleList from "../components/articleList"
import Instagram from "../components/instagram"
import Search from "../components/search"
import Content from "../components/content"
import client from "../../graphQlClient"

// const ARTICLES_QUERY = `query($limit: Int, $start: Int) {
//     articles(limit: $limit, start: $start) {
//           id
//           text
//           title
//           date
//           image {
//             url
//           }
//         }
//           articlesConnection {
//             aggregate {
//               totalCount
//             }
//           }
//       }
// `

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

const MainContent = styled(Content)`
  position: relative;
  margin-top: 4vw;
  @media (max-width: 627px) {
    margin-top: 6vw;
  }
`

const IndexPage = () => {
  // const limit = 16;
  // const [start, setStart] = useState(0)
  // const { data } = useQuery(ARTICLES_QUERY, {
  //   client,
  //   variables: { limit, start },
  // })
  // let articles = [];
  // let articlesCount;
  // if (data) {
  //   articles = data.articles.map(article => ({
  //     ...article,
  //     articlePath: `/${slugify(article.title).replace("-h-", "/h-")}`,
  //     imagePath: `${article.image.url}`,
  //   }))
  //   articlesCount = data.articlesConnection.aggregate.totalCount;
  // }

  // const sortedArticles = articles?.sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // )
  return (
    <Layout>
      <Menu>
        <Instagram />
        <Search />
      </Menu>
      <MainContent>
        {/* <ArticleList articles={sortedArticles} start={start} setStart={setStart} limit={limit} articlesCount={articlesCount}/> */}
      </MainContent>
    </Layout>
  )
}

export default IndexPage
