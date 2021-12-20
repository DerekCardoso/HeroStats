import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import SearchResults from '../../components/SearchResults'

import './Home.css'

function Home() {
  const [searchText, setSearchText] = useState('')
  const [superheroData, setSuperHeroData] = useState([])

  async function searchHeroes() {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/4866064003433150/search/${searchText}`
    )
    const data = await response.json()
    setSuperHeroData(data.results)
  }

  function handleChange(e) {
    const searchName = e.target.value

    setSearchText(searchName)
    if (searchName.length === 0) {
      setSuperHeroData([])
    }
    if (searchName.length > 3) {
      searchHeroes()
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults superheroData={superheroData} />
      </div>
    </div>
  )
}

export default Home;
