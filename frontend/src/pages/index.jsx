import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import ArticleList from '../components/articleList';
import Instagram from '../components/instagram';
import Search from '../components/search';
import Content from '../components/content';

const articlesQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          date
          image {
            publicURL
          }
          articlePath: gatsbyPath(filePath: "/{strapiArticle.title}")
        }
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const MainContent = styled(Content)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 4vw;
  @media (max-width: 627px) {
    justify-content: center;
    margin-top: 6vw;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(articlesQuery);
  const articles = data.allStrapiArticle.edges
    .map(el => el.node)
    .map(article => ({
      ...article,
      imagePath: `${article.image.publicURL}`,
    }));
    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Layout>
      <Menu>
        <Instagram />
        <Search />
      </Menu>
      <MainContent>
        <ArticleList articles={sortedArticles} />
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
