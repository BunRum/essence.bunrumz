import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import Player from './Player';
import Test from './test';

function App() {
  console.log(window.location.pathname)
  return (
    <Router>
      <Routes>
        <Route id="Games" path='/' exact element={<Games />} />
        <Route id="Player" path='/Player' exact element={<Player/>} />
        <Route id="test" path='/test' exact element={<Test/>} />
      </Routes>
    </Router>
  );
}
export default App;