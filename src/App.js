import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
