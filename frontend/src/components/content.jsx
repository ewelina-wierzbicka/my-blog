import React from 'react';
import styled from 'styled-components';
import LastArticles from './lastArticles';

const HiddenLastArticles = styled(LastArticles)`
  @media (max-width: 627px) {
    display: none;
  }
`;

const Content = ({ children, className }) => (
  <div className={className}>
    {children}
    <HiddenLastArticles />
  </div>
);

export default Content;
