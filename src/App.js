import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import LoadFlashGame from './Player';
import Player from './Player';

function App() {
  return (
    <Router>
      <Routes>
        <Route id="Games" exact path='/' exact element={<Games />} />
        <Route id="Player" exact path='/Player' exact element={<Player />} />
      </Routes>
    </Router>
  );
}

if (window.location.pathname = "/Player") {
  LoadFlashGame()
}
export default App;