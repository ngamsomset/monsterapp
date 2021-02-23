import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ placeholder, handlechange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handlechange}
    ></input>
  )
}

export default SearchBox
