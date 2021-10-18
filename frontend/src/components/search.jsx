import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import slugify from '@sindresorhus/slugify';
import searchIcon from '../images/magnifyingGlass.png';

const Input = styled.input`
  width: calc(50px + 18vw);
  height: calc(15px + 2vw);
  border-radius: 20px;
  margin: 0 auto;
  display: block;
  padding: 1vw;
  padding-left: calc(8px + 3vw);
  background-image: url(${searchIcon});
  background-size: 8%;
  background-repeat: no-repeat;
  background-position: 5% 50%;
  &:focus {
    outline: none;
  }
`;

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      navigate(
        `/search:${slugify(searchText)}`,
        {
          state: { searchText },
        }
      )
    }
  };

  const handleChange = (e) => {
       setSearchText(e.target.value);
  };

  return (
      <div>
        <Input
          onChange={handleChange}
          type="text"
          onKeyDown={handleSubmit}
        />
      </div>
  );
};

export default Search;
