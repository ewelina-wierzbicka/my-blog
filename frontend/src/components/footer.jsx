import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.png';
import contact from '../images/contactW.png';
import homepage from '../images/homepageW.png';
import instagram from '../images/instagramW.png';

const Container = styled.div`
position: absolute;
bottom: 0;
  width: 100vw;
  height: 10vw;
  background-color: #3d4569;
  margin-top: 6vw;
  padding: 0 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1366px) {
    padding: 0 8%;
  }
  @media (min-width: 1920px) {
    padding: 0 12%;
  }
  @media (min-width: 2560px) {
    padding: 0 18%;
  }
`;

const TitleWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 6.5vw;
  margin: 0 20px;
`;

const Title = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const TitleFirstWord = styled.h1`
  font-size: 1.9vw;
  letter-spacing: calc(0.3vw + 3px);
  color: white;
  margin: 2px;
  width: 40vw;
`;

const TitleNextWords = styled.h1`
  font-size: 1.35vw;
  letter-spacing: calc(0.3vw + 3px);
  color: white;
  margin: 2px;
  width: 40vw;
`;

const IconsWrapper = styled.div`
  height: calc(5vw + 5px);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  Link,
  a {
    height: calc(40% + 3px);
    margin-right: 20px;
    display: flex;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Footer = () => (
  <Container>
    <TitleWrapper>
      <Logo src={logo} alt="" />
      <Title>
        <TitleFirstWord>INSTRUKTOR</TitleFirstWord>
        <TitleNextWords>NAUKI JAZDY</TitleNextWords>
      </Title>
    </TitleWrapper>
    <IconsWrapper>
      <Link to="/">
        <Image src={homepage} alt="" />
      </Link>
      <Link to="/contact">
        <Image src={contact} alt="" />
      </Link>
      <a href="https://www.instagram.com/instruktornaukijazdy/">
        <Image src={instagram} alt="" />
      </a>
    </IconsWrapper>
  </Container>
);

export default Footer;
