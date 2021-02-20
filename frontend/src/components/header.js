import React from "react"
import styled from "styled-components"
import call from "../images/call.png"
import homepage from "../images/homepage.png"
import instagram from "../images/instagram.png"
import headerPhoto from "../images/steering-wheel.jpg"
import logo from "../images/logo.png"

const ContentWrapper = styled.div`
  position: relative;
  height: 27vw;
  width: 100%;
  overflow: hidden;
`

const HeaderPhoto = styled.div`
  width: 75%;
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
    background-color: #3d4569;
    z-index: -1;
  }
`

const IconsWrapper = styled.div`
  margin-left: 30px;
  height: calc(3vw + 5px);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const Image = styled.img`
  height: calc(40% + 3px);
  margin-right: 10px;
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 4.2vw;
  right: 6vw;
  width: 65vw;
  height: 14.4vw;
  @media (min-width: 1920px) {
    right: 2vw;
  }
`

const Logo = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 13vw;
`

const TitleFirstWord = styled.h1`
  position: absolute;
  top: 43%;
  right: 0;
  background-color: rgba(106, 111, 125, 0.8);
  font-size: 3.8vw;
  letter-spacing: 10px;
  color: white;
`

const TitleNextWords = styled.h1`
  position: absolute;
  right: 0;
  top: 93%;
  background-color: rgba(106, 111, 125, 0.8);
  font-size: 2.7vw;
  letter-spacing: 10px;
  color: white;
`

const Header = () => {
  return (
    <ContentWrapper>
      <IconsWrapper>
        <Image src={homepage} alt="" />
        <Image src={instagram} alt="" />
        <Image src={call} alt="" />
      </IconsWrapper>
      <HeaderPhoto></HeaderPhoto>
      <TitleWrapper>
        <Logo src={logo} alt=""></Logo>
        <TitleFirstWord>INSTRUKTOR</TitleFirstWord>
        <TitleNextWords>NAUKI JAZDY</TitleNextWords>
      </TitleWrapper>
    </ContentWrapper>
  )
}

export default Header
