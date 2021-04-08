import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Wrapper = styled.div`
min-height: 100vh;
position: relative;
`;

const Container = styled.div`
padding-bottom: 14vw;
  margin: 0 4%;
  @media (min-width: 1366px) {
    margin: 0 8%;
  }
  @media (min-width: 1920px) {
    margin: 0 12%;
  }
  @media (min-width: 2560px) {
    margin: 0 18%;
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Header />
      {children}
    </Container>
    <Footer />
  </Wrapper>
);

export default Layout;
