import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ArticleList from '../components/articleList';
import Categories from '../components/categories';
import Search from '../components/search';
import Content from '../components/content';

export const query = graphql`
  query($id: String, $name: String){
    strapiCategory(id: {eq: $id}) {
      name
    }
    allStrapiArticle(filter: {categories: {elemMatch: {pathName: {eq: $name}}}}) {
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
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2vw;
  @media (max-width: 627px) {
    justify-content: center;
  }
`;

const Category = (props) => {
  const { data } = props;
  return (
    <Layout>
      <Menu>
        <Categories />
        <Search />
      </Menu>
      <MainContent>
        <ArticleList data={data} />
      </MainContent>
    </Layout>
  );
};

export default Category;
