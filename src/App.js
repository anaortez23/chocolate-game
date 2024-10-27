import React from 'react';
import './App.css';
import CandyContainer from './CandyContainer';
import candies from './candyData';

function App() {
  return (
    <div className="App">
      <h1>Chocolate Candy Selection</h1>
      <CandyContainer candies={candies} />
    </div>
  );
}

export default App;
