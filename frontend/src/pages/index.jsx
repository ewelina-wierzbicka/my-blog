import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import ArticleList from '../components/articleList';
import Categories from '../components/categories';
import Search from '../components/search';
import Content from '../components/content';

const articlesQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
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
`;

const MainContent = styled(Content)`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2vw;
  @media (max-width: 627px) {
    justify-content: center;
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(articlesQuery);
  const articles = data.allStrapiArticle.edges
    .map(el => el.node)
    .map(article => ({
      ...article,
      imagePath: `${process.env.GATSBY_HOST_URL}/${article.image.publicURL}`,
    }));
  return (
    <Layout>
      <Menu>
        <Categories />
        <Search />
      </Menu>
      <MainContent>
        <ArticleList articles={articles} />
      </MainContent>
    </Layout>
  );
};

export default IndexPage;
