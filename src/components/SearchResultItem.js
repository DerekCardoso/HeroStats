import React, { useState } from 'react'
import Modal from './Modal/Modal'

function SearchResultItem({ data }) {
  const [show, setShow] = useState(false)

  console.log('data', data)
  return (
    <div className="search-result">
      <div className="left">
        <img src={data.image.url} className="person-img" alt={data.name} />
      </div>

      <div className="right">
        <h1 className="person-name">{data.name}</h1>
        <div className="stats">
          <div>Nome: {data.biography['full-name']}</div>
          <div>Primeira Aparição: {data.biography['first-appearance']}</div>
          <div>Status: {data.biography['alignment']}</div>
          <button onClick={() => setShow(true)}>ver mais</button>
          <Modal onClose={() => setShow(false)} show={show} hero={data} />
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem
