import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import headerPhoto from '../images/header.png';
import logo from '../images/logo.png';
import home from '../images/svg/home.svg';
import contact from '../images/svg/contact.svg';
import instagram from '../images/svg/instagram.svg';

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
  &:before {
    content: "";
    position: absolute;
    top: -2.2vw;
    left: 75%;
    width: 60%;
    height: 21.5vw;
    background-color: #212036;
    z-index: -1;
  }
`;

const IconsWrapper = styled.div`
  margin-left: 30px;
  height: calc(3.5vw + 10px);
  width: calc(6vw + 50px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  Link,
  a {
    height: calc(40% + 5px);
    display: flex;
  }
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
  background-color: rgba(160, 165, 178, 0.8);
  font-size: 3.8vw;
  letter-spacing: calc(0.5vw + 4px);
  color: white;
`;

const TitleNextWords = styled.h1`
  position: absolute;
  right: 0;
  top: 93%;
  background-color: rgba(160, 165, 178, 0.8);
  font-size: 2.7vw;
  letter-spacing: calc(0.5vw + 4px);
  color: white;
`;

const HomeIcon = styled(home)`
height: 100%;
`

const ContactIcon = styled(contact)`
height: 100%;
`

const InstagramIcon = styled(instagram)`
height: 100%;
`

const Header = () => (
  <ContentWrapper>
    <IconsWrapper>
      <Link to="/">
       <HomeIcon />
      </Link>
      <Link to="/contact">
       <ContactIcon />
      </Link>
      <a href="https://www.instagram.com/instruktornaukijazdy/">
       <InstagramIcon/>
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
