import React from 'react'

function SearchBar(props) {
  const { handleChange, searchText } = props

  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Procure um super herói..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  )
}

export default SearchBar
