import React from 'react';

function SearchResultItem(props) {
  const {data} = props

  console.log('data', data)
  return (
    <div>
      <div className="search-result">
        <div className="left">
          <img src={data.image.url} alt="bat hero" />
        </div>
        <div className="right">
          <h1>{data.name}</h1>
          <span 
            id="person-name">{data.biography['full-name']}</span>
           
            <div className="stats">
              <div>strength: {data.powerstats.strength}</div>
              <div>speed: {data.powerstats.speed}</div>
              <div>power: {data.powerstats.power}</div>
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;