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
  font-size: calc(8px + 0.5vw);
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: calc(4px + 0.25vw);
    left: 0;
    width: 4.5vw;
    height: 2px;
    background-color: #bfbfbf;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(4px + 0.25vw);
    right: 0;
    width: 4.5vw;
    height: 2px;
    background-color: #bfbfbf;
  }
`
const ArticleTitleList = styled.ul`
  line-height: 2;
`
const ArticleTitle = styled.li`
  font-size: calc(8px + 0.5vw);
`
const ArticleLink = styled(Link)`
text-decoration: none;
color: #000000;
`

const LastArticles = ({ className }) => {
  const data = useStaticQuery(articlesQuery)
  return (
    <div className={className}>
      <ListTitle>Najnowsze artykuły</ListTitle>
      <ArticleTitleList>
        {data.allStrapiArticle.edges.map(el => (
          <ArticleTitle key={el.node.id}><ArticleLink to={el.node.articlePath}>{el.node.title}</ArticleLink></ArticleTitle>
        ))}
      </ArticleTitleList>
    </div>
  )
}

export default LastArticles
