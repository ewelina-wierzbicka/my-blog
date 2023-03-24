import React, { useState } from "react"
import styled from "styled-components"
import { useQuery } from "graphql-hooks"
import CircularProgress from "@material-ui/core/CircularProgress"
import slugify from "@sindresorhus/slugify"
import Layout from "../components/layout"
import Instagram from "../components/instagram"
import Search from "../components/search"
import Content from "../components/content"
import ArticleList from "../components/articleList"
import client from "../../graphQlClient"

const SEARCH_QUERY = `query($search: String, $limit: Int, $start: Int) {
  articles(where: { _or: [{title_contains: $search}, {text_contains: $search}] }, limit: $limit, start: $start) {
    id
    title
    text
    date
    image {
      url
    }
  }
  articlesConnection(where: { _or: [{title_contains: $search}, {text_contains: $search}] }) {
    aggregate {
      count
    }
  }
}
`

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

const LoadingWrapper = styled.div`
  width: 70%;
  text-align: center;
`

const ErrorWrapper = styled.div`
  width: 70%;
  text-align: center;
  font-size: 2.2vw;
  font-weight: bold;
  text-transform: uppercase;
`

const NoResultsText = styled.p`
  min-height: 300px;
`

const SearchText = ({ location }) => {
  const limit = 16;
  const [start, setStart] = useState(0);
  const searchText = location?.pathname?.replace('/search:', '');
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    client,
    variables: { search: searchText, limit, start },
  })

  let articles = [];
  let articlesCount;
  if (data) {
    articles = data.articles.map(article => ({
        ...article,
        articlePath: `/${slugify(article.title).replace("-h-", "/h-")}`,
        imagePath: `${article.image.url}`,
      }))
      articlesCount = data.articlesConnection.aggregate.count;
  }
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  return (
    <Layout>
      <Menu>
        <Instagram />
        <Search />
      </Menu>
      <MainContent>
        {loading && (
          <LoadingWrapper>
            <CircularProgress />
          </LoadingWrapper>
        )}
        {(!loading && !error) &&
          (sortedArticles.length > 0 ? (
            <ArticleList articles={sortedArticles} start={start} setStart={setStart} limit={limit} articlesCount={articlesCount} />
          ) : (
            <NoResultsText>
              Brak wyników wyszukiwania dla: {searchText}
            </NoResultsText>
          ))}
        {error && (
          <ErrorWrapper>
            <div>Wystąpił błąd</div>
          </ErrorWrapper>
        )}
      </MainContent>
    </Layout>
  )
}

export default SearchText
