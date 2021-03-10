import React from 'react'
import LastArticles from "./lastArticles"
import styled from "styled-components"

const HiddenLastArticles = styled(LastArticles)`
  @media(max-width: 627px) {
    display: none;
  }
`

const Content = ({children, className}) => {
    return (
        <div className = {className}>
        {children}
            <HiddenLastArticles></HiddenLastArticles>
        </div>
    )
}

export default Content