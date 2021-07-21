import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

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
`;

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
    left: 1.8vw;
    width: 4vw;
    height: 2px;
    background-color: #bfbfbf;
    @media (min-width: 870px) and (max-width: 1100px) {
      left: 0vw;
    }
    @media (max-width: 870px) {
      left: -1vw;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(4px + 0.25vw);
    right: 1.8vw;
    width: 4vw;
    height: 2px;
    background-color: #bfbfbf;
    @media (min-width: 870px) and (max-width: 1100px) {
      right: 0vw;
    }
    @media (max-width: 870px) {
      right: -1vw;
    }
  }
`;

const ArticleTitleList = styled.ul`
  line-height: 1.5;
  width: 28vw;
  padding-left: 5vw;
  @media (max-width: 960px) {
    line-height: 1.2
  }
`;

const ArticleTitle = styled.li`
  font-size: calc(8px + 0.5vw);
  margin-bottom: 8px;
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const LastArticles = ({ className }) => {
  const data = useStaticQuery(articlesQuery);
  const lastArticles = data.allStrapiArticle.edges.slice(0,12);
  const sortedLastArticles = lastArticles.sort((a, b) => new Date(b.node.date) - new Date(a.node.date));

  return (
    <div className={className}>
      <ListTitle>Najnowsze artykuły</ListTitle>
      <ArticleTitleList>
        {sortedLastArticles.map((el) => (
          <ArticleTitle key={el.node.id}>
            <ArticleLink to={el.node.articlePath}>{el.node.title}</ArticleLink>
          </ArticleTitle>
        ))}
      </ArticleTitleList>
    </div>
  );
};

export default LastArticles;
