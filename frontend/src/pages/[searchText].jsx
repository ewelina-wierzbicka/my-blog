import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'graphql-hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import slugify from '@sindresorhus/slugify';
import Layout from '../components/layout';
import Categories from '../components/categories';
import Search from '../components/search';
import Content from '../components/content';
import ArticleList from '../components/articleList';
import { client } from '../../gatsby-browser';

const SEARCH_QUERY = `query($search: String) {
  title: articles(where: {title_contains: $search}) {
    id
    title
    image {
      url
    }
  }
  text: articles(where: {text_contains: $search}) {
    id
    title
    image {
      url
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

const LoadingWrapper = styled.div`
  width: 70%;
  text-align: center;
`;

const ErrorWrapper = styled.div`
  width: 70%;
  text-align: center;
  font-size: 2.2vw;
  font-weight: bold;
  text-transform: uppercase;
`;

const SearchText = ({ location }) => {
  const { searchText } = location.state;
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    client,
    variables: { search: searchText },
  });

  let articles = [];
  if (data) {
    articles = [...data.title, ...data.text]
      .filter(
        (el, ind, arr) => arr.findIndex(elem => elem.id === el.id) === ind
      )
      .map(article => ({
        ...article,
        articlePath: `/${slugify(article.title).replace("-h-", "/h-")}`,
        imagePath: `${process.env.API_URL}${article.image.url}`,
      }));
  };
  return (
    <Layout>
      <Menu>
        <Categories />
        <Search />
      </Menu>
      <MainContent>
        {loading && (
          <LoadingWrapper>
            <CircularProgress />
          </LoadingWrapper>
        )}
        {data && <ArticleList articles={articles} />}
        {error && (
          <ErrorWrapper>
            <div>Wystąpił błąd</div>
          </ErrorWrapper>
        )}
      </MainContent>
    </Layout>
  )
};

export default SearchText;
