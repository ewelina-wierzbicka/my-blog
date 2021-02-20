import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import arrow from "../images/arrow.png"

const articlesQuery = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          image {
            url
          }
        }
      }
    }
  }
`

const ArticleImageList = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 5vw;
  row-gap: 5vw;
  margin-left: 1vw;
  @media (max-width: 627px) {
    justify-content: center;
  }
`

const ArticleImage = styled.div`
position: relative;
width: 25vw;
height: 25vw;
background-size: cover;
@media(max-width: 627px) {
  width: 40vw;
  height: 40vw;
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
`

const ArticleTitle = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
color: #ffffff;
font-size: 2.2vw;
font-weight: bold;
text-transform: uppercase;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 0 8px;
}
`

const ArticleLink = styled.div`
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
}
`

const ArticleList = () => {
  const data = useStaticQuery(articlesQuery)
  return (
    <ArticleImageList>
      {data.allStrapiArticle.edges.map(el => (
        <ArticleImage
          key={el.node.id}
          style={{
            backgroundImage: `url(http://localhost:1337${el.node.image[0].url})`,
          }}
        >
          <ArticleTitle>
            <span>{el.node.title}</span>
          </ArticleTitle>
          <ArticleLink>Czytaj dalej</ArticleLink>
        </ArticleImage>
      ))}
    </ArticleImageList>
  )
}

export default ArticleList
