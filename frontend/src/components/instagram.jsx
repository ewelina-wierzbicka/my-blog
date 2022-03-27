import React from "react"
import styled from "styled-components"
import instagram from "../images/instagram.png"

const Wrapper = styled.div`
  height: 20px;
  display: flex;
  @media(max-width: 600px) {
    height: 15px;
font-size: 12px;
  }
  & a {
    text-decoration: none;
    color: #000000;
    display: flex;
    align-items: center;
    & img {
      height: 100%;
      margin-right: 5px;
    }
  }
`

const Instagram = () => (
  <Wrapper>
    <a href="https://www.instagram.com/instruktornaukijazdy/">
      <img src={instagram} alt="instagram icon" />
      <span>instruktornaukijazdy</span>
    </a>
  </Wrapper>
)

export default Instagram
