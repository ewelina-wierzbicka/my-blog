import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/layout';
import Content from '../components/content';

export const articlesQuery = graphql`
  query($id: String){
    strapiArticle(id: {eq: $id}) {
      title
      text
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  position: relative;
  font-size: 3vw;
`;

const Text = styled(ReactMarkdown)`
  width: 90%;
  margin: 0 auto;
  line-height: 1.5;
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

const ArticleContent = styled.div`
  width: 70%;
  & img {
    max-width: 100%;
  }
  @media (max-width: 627px) {
    width: 100%;
  }
`;

const Article = (props) => {
  const { data } = props;
  return (
    <Layout>
      <MainContent>
        <ArticleContent>
          <Title>{data.strapiArticle.title}</Title>
          <Text
            source={data.strapiArticle.text}
            transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.GATSBY_API_URL}/${uri}`)}
          />
        </ArticleContent>
      </MainContent>
    </Layout>
  );
};

export default Article;
