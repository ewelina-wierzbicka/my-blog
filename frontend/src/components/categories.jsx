import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const categoriesQuery = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          name
          id
          categoryPath: gatsbyPath(filePath: "/{strapiCategory.name}")
        }
      }
    }
  }
`;

const Category = styled(Link)`
  display: block;
  color: #000000;
  font-size: calc(7px + 0.5vw);
  text-transform: uppercase;
  margin-top: 8px;
  margin-left: 4vw;
  position: relative;
  text-decoration: none;
  &:before {
    content: "";
    position: absolute;
    top: calc(6px + 0.5vw);
    left: -4vw;
    width: 4vw;
    height: 2px;
    background-color: #bfbfbf;
  }
`;

const Categories = () => {
  const data = useStaticQuery(categoriesQuery);
  return (
    <div>
      {data.allStrapiCategory.edges.map((el) => (
        <Category to={el.node.categoryPath} key={el.node.id}>{el.node.name}</Category>
      ))}
    </div>
  );
};

export default Categories;
