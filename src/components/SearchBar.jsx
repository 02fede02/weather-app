import React from 'react'
import '../styles/SearchBar.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar({ city, handleSearchInput, handleChange }) {

  return (
    <div>
    <div className='container'>
      <form className='search-bar' onSubmit={(e) => handleSearchInput(e)}>
        <input type='text' value={city} onChange={(e) => handleChange(e)} placeholder='search city...' name='q'></input>
        <AiOutlineSearch className='search-icon' onClick={() => handleSearchInput()}/>
      </form>
    </div>
    </div>
  );
}