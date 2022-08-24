import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../images/logo.png';
import home from '../images/svg/homeWhite.svg';
import contact from '../images/svg/contactWhite.svg';
import instagram from '../images/svg/instagramWhite.svg';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vw;
  background-color: #212036;
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
  width: calc(8vw + 50px);
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

const HomeIcon = styled(home)`
color: white;
height: 100%;
`

const ContactIcon = styled(contact)`
height: 100%;
`

const InstagramIcon = styled(instagram)`
height: 100%;
`

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
       <HomeIcon />
      </Link>
      <Link to="/contact">
       <ContactIcon />
      </Link>
      <a href="https://www.instagram.com/instruktornaukijazdy/">
       <InstagramIcon/>
      </a>
    </IconsWrapper>
  </Container>
);

export default Footer;
