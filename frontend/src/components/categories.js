import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const categoriesQuery = graphql`
query {
  allStrapiCategory {
    edges {
        node {
          name
        }
  }
}
}`

const Category = styled.p`
font-size: calc(6px + 0.5vw);
text-transform: uppercase;
margin-left: 6.5vw;
position: relative;
&:before {
  content: '';
  position: absolute;
  top: calc(6px + 0.5vw);
  left: -4vw;
  width: 4vw;
  height: 2px;
  background-color: #bfbfbf;
}
`

const Categories = () => {
    const data = useStaticQuery(categoriesQuery);
    return (
      <div>
        {data.allStrapiCategory.edges.map(el => <Category>{el.node.name}</Category>)}
      </div>
    )
}



export default Categories
