import React from 'react';

function SearchResultItem(props) {
  return (
    <div>
      <div className="search-result">
        <div className="left">
          <img src="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1111.jpg" alt="bat hero" />
        </div>
        <div className="right">
          <h1>Bat woman</h1>
            <div className="stats">
              <div>strength: 27</div>
              <div>speed: null</div>
              <div>durability: null</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;