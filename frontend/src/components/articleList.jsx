import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ArrowRight from "../images/svg/arrowRight.svg";

const ArticleImageList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 5vw;
  row-gap: 5vw;
  min-height: 300px;
  @media (max-width: 715px) {
    row-gap: 9vw;
  }
`

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`

const Card = styled.div`
  background-color: transparent;
  width: 25vw;
  height: 25vw;
  position: relative;
  @media (max-width: 715px) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
    height: 60vw;
  }
  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5%;
    left: -5%;
    background-color: rgba(106, 111, 125, 0.8);
    z-index: -1;
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
`

const Front = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  background-size: cover;
  color: #ffffff;
  font-size: calc(1.6vw + 10px);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  text-decoration: none;
  div {
  @media (min-width: 600px) {
    display: none
  }
  }
`

const Back = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  background-color: rgba(106, 111, 125, 0.8);
  transform: rotateY(180deg);
`

const Title = styled.div`
  font-weight: bold;
  font-family: 'Antonio', sans-serif;
  letter-spacing: 2px;
  text-shadow: 2px 2px #3d4569;
`;

const Text = styled.div`
  color: white;
  text-decoration: none;
  underline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  line-height: 1.5;
  font-size: calc(0.3vw + 11px);
  @media (min-width: 715px) and (max-width: 960px) {
    padding: 10px;
    font-size: calc(0.5vw + 8px);
  }
`

const More = styled.div`
  position: absolute;
  width: calc(40px + 10vw);
  height: calc(2vw + 10px);
  bottom: 0;
  right: 0;
  font-size: calc(0.4vw + 8px);
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  line-height: calc(2vw + 10px);;
  background-color: rgba(160, 165, 178, 0.8);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  text-shadow: none;
  margin: 10px 0;
  @media (min-width: 715px) and (max-width: 960px) {
    font-size: calc(0.5vw + 6px);
  }
  @media (max-width: 715px) {
    width: calc(60px + 12vw);
  }
`
const Arrow = styled(ArrowRight)`
width: 2.5vw;
height: calc(2vw + 10px);
@media (max-width: 715px) {
  width: 4vw;
}
`

const ArticleList = ({ articles }) => (
  <ArticleImageList>
    {articles.map(el => (
      <Card key={el.id}>
        <CardInner>
          <Front
            to={el.articlePath}
            style={{
              backgroundImage: `url(${el.imagePath})`,
            }}
          >
            <Title>{el.title}</Title>
            <More><p>CZYTAJ DALEJ</p><Arrow /></More>
          </Front>
          <Back to={el.articlePath} key={el.id}>
            <Text>{el.text?.slice(0, 130)}...</Text>
            <More><p>CZYTAJ DALEJ</p><Arrow /></More>
          </Back>
        </CardInner>
      </Card>
    ))}
  </ArticleImageList>
)

export default ArticleList
