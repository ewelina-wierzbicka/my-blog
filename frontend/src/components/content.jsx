import React from 'react';
import styled from 'styled-components';
import LastArticles from './lastArticles';

const HiddenLastArticles = styled(LastArticles)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  @media (max-width: 700px) {
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
