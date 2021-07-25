import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ArticleList from '../components/articleList';
import Categories from '../components/categories';
import Search from '../components/search';
import Content from '../components/content';

export const query = graphql`
  query($id: String, $name: String) {
    strapiCategory(id: { eq: $id }) {
      name
    }
    allStrapiArticle(
      filter: { categories: { elemMatch: { name: { eq: $name } } } }
    ) {
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
`;

const MainContent = styled(Content)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  margin-top: 2vw;
  @media (max-width: 627px) {
    justify-content: center;
  }
`;

const Category = (props) => {
  const { data } = props;
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
        <Categories />
        <Search />
      </Menu>
      <MainContent>
        <ArticleList articles={sortedArticles} />
      </MainContent>
    </Layout>
  );
};

export default Category;
