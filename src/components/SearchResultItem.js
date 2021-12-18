import React from 'react';
import "./SearchResultItem.scss"

function SearchResultItem(props) {
  const {data} = props

  console.log('data', data)
  return (
    <div className="wrapper">
      <div className="card">
        <div className='card__body'>
        
          <img src={data.image.url} className="card__image" alt="bat hero" />
        
        
          <h1 className="card__title">{data.name}</h1>
          <span 
            id="person-name">
            {data.biography['full-name']}
          </span>
           
              <div>strength: {data.powerstats.strength}</div>
              <div>speed: {data.powerstats.speed}</div>
              <div>power: {data.powerstats.power}</div>
              
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;