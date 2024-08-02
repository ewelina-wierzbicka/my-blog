import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const articlesQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          date
          articlePath: gatsbyPath(filePath: "/{strapiArticle.title}")
        }
      }
    }
  }
`

const ListTitle = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  position: relative;
  font-size: calc(9px + 0.6vw);
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: calc(5px + 0.35vw);
    left: 0.7vw;
    width: 4vw;
    height: 2px;
    background-color: #bfbfbf;
    @media (min-width: 870px) and (max-width: 1100px) {
      left: -1vw;
    }
    @media (max-width: 870px) {
      left: -2vw;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(5px + 0.35vw);
    right: 0.7vw;
    width: 4vw;
    height: 2px;
    background-color: #bfbfbf;
    @media (min-width: 870px) and (max-width: 1100px) {
      right: -1vw;
    }
    @media (max-width: 870px) {
      right: -2vw;
    }
  }
`

const ArticleTitleList = styled.ul`
  line-height: 1.5;
  width: 28vw;
  padding-left: 8vw;
  @media (max-width: 960px) {
    line-height: 1.2;
  }
`

const ArticleTitle = styled.li`
  font-size: calc(11px + 0.3vw);
  margin-bottom: 8px;
`

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`

const LastArticles = ({ className }) => {
  const data = useStaticQuery(articlesQuery)
  const articles = data.allStrapiArticle.edges
  const sortedLastArticles = articles
    .sort((a, b) => new Date(b.node.date) - new Date(a.node.date))
    .slice(0, 12)
  return (
    <div className={className}>
      <ListTitle>Najnowsze artykuły</ListTitle>
      <ArticleTitleList>
        {sortedLastArticles.map(el => (
          <ArticleTitle key={el.node.id}>
            <ArticleLink to={el.node.articlePath}>{el.node.title}</ArticleLink>
          </ArticleTitle>
        ))}
      </ArticleTitleList>
    </div>
  )
}

export default LastArticles
