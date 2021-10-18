import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import arrow from '../images/arrow.png';

const ArticleImageList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 5vw;
  row-gap: 5vw;
  margin-left: 1vw;
  @media (max-width: 700px) {
    justify-content: center;
    row-gap: 7vw;
  }
  @media (max-width: 600px) {
    row-gap: 9vw;
  }
`;

const ArticleImage = styled(Link)`
  position: relative;
  width: 25vw;
  height: 25vw;
  background-size: cover;
  @media (max-width: 700px) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
    height: 60vw;
  }
  &:first-child {
    width: 40vw;
    height: 40vw;
    margin: 0 38vw 0 10vw;
    @media (max-width: 700px) {
      margin: 0 10vw;
    }
    @media (max-width: 600px) {
      width: 60vw;
      height: 60vw;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5%;
    left: -5%;
    background-color: rgba(106, 111, 125, 0.8);
    z-index: -1;
  }
`;

const ArticleTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 3.2vw;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;
  font-family: 'Antonio', sans-serif;
  letter-spacing: 2px;
  text-shadow: 2px 2px #3d4569;
`;

const ArticleMore = styled.p`
  position: absolute;
  width: calc(50px + 8vw);
  height: 4vw;
  bottom: 0;
  right: 0;
  font-size: 1vw;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  line-height: 4vw;
  background-color: rgba(106, 111, 125, 0.8);
  background-image: url(${arrow});
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 94% 50%;
  padding-right: 3vw;
  text-decoration: none;
`;

const ArticleList = ({ articles }) => (
  <ArticleImageList>
    {articles.map(el => (
      <ArticleImage
        to={el.articlePath}
        key={el.id}
        style={{
          backgroundImage: `url(${el.imagePath})`,
        }}
      >
        <ArticleTitle>
          <span>{el.title}</span>
        </ArticleTitle>
        <ArticleMore>Czytaj dalej</ArticleMore>
      </ArticleImage>
    ))}
  </ArticleImageList>
);

export default ArticleList;
