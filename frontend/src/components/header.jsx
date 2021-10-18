import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import contact from '../images/contact.png';
import homepage from '../images/homepage.png';
import instagram from '../images/instagram.png';
import headerPhoto from '../images/header.jpg';
import logo from '../images/logo.png';

const ContentWrapper = styled.div`
  position: relative;
  height: 27vw;
  width: 100%;
  overflow: hidden;
`;

const HeaderPhoto = styled.div`
  width: 77%;
  height: 22vw;
  position: relative;
  background-image: url(${headerPhoto});
  background-size: cover;
  background-position: bottom left;
  &:before {
    content: "";
    position: absolute;
    top: -2.2vw;
    left: 75%;
    width: 60%;
    height: 21.5vw;
    background-color: #3d4569;
    z-index: -1;
  }
`;

const IconsWrapper = styled.div`
  margin-left: 30px;
  height: calc(3.5vw + 10px);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  Link,
  a {
    height: calc(45% + 3px);
    margin-right: 15px;
    display: flex;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: calc(3.25vw + 13px);
  right: 4vw;
  width: 65vw;
  height: 14.4vw;
  @media (min-width: 1920px) {
    right: 2vw;
  }
`;

const Logo = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 13vw;
`;

const TitleFirstWord = styled.h1`
  position: absolute;
  top: 43%;
  right: 0;
  background-color: rgba(106, 111, 125, 0.8);
  font-size: 3.8vw;
  letter-spacing: calc(0.5vw + 4px);
  color: white;
`;

const TitleNextWords = styled.h1`
  position: absolute;
  right: 0;
  top: 93%;
  background-color: rgba(106, 111, 125, 0.8);
  font-size: 2.7vw;
  letter-spacing: calc(0.5vw + 4px);
  color: white;
`;

const Header = () => (
  <ContentWrapper>
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
    <HeaderPhoto />
    <TitleWrapper>
      <Logo src={logo} alt="" />
      <TitleFirstWord>INSTRUKTOR</TitleFirstWord>
      <TitleNextWords>NAUKI JAZDY</TitleNextWords>
    </TitleWrapper>
  </ContentWrapper>
);

export default Header;
