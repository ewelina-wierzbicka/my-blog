import React, { useState } from "react"
import styled from "styled-components"
import { useQuery, graphql } from "gatsby"
import searchIcon from "../images/magnifyingGlass.png"

// const searchQuery = graphql`

const InputContainer = styled.div`
  width: 30%;
`

const Input = styled.input`
  width: calc(50px + 18vw);
  height: calc(15px + 2vw);
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  padding: 1vw;
  padding-left: 3vw;
  background-image: url(${searchIcon});
  background-size: 8%;
  background-repeat: no-repeat;
  background-position: 5% 50%;
  &:focus {
    outline: none;
  }
`
const Search = () => {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = e => {
    //     if (e.key === "enter") {
    //     }
  }

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  return (
    <InputContainer>
      <Input
        onChange={handleChange}
        type="text"
        onKeyDown={handleSubmit}
      ></Input>
    </InputContainer>
  )
}

export default Search
