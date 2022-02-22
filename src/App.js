import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import Player from './Player';

function App() {
  console.log(window.location.pathname)
  return (
    <Router>
      <Routes>
        <Route id="Games" path='/' exact element={<Games />} />
        <Route id="Player" path='/Player' exact element={<Player/>} />
      </Routes>
    </Router>
  );
}
export default App;