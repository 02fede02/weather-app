import React from 'react'
import SearchBar from './SearchBar.jsx'



function Nav({ city, handleSearchInput, handleChange }) {
  return (
    <>
      <SearchBar className='search' city={city} handleSearchInput={handleSearchInput} handleChange={handleChange}/>
    </>
  );
};

export default Nav;
