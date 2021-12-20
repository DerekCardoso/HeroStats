import React from 'react'
import SearchResultItem from './SearchResultItem'

function SearchResults(props) {
  const { superheroData = [] } = props

  return (
    <div>
      {superheroData.map((superhero, _id) => (
        <SearchResultItem key={_id} data={superhero} />
      ))}
    </div>
  )
}

export default SearchResults
