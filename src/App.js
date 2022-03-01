import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import Player from './Player';
import Test from './test';
import Navbar from './Navbar';

function App() {
  console.log(window.location.pathname)
  return (
    <Router>
      <Navbar css={{
        "position": "sticky",
        "top": "0"
      }} />
      <Routes>
        <Route id="Games" path='/' exact element={<Games />} />
        <Route id="Player" path='/Player' exact element={<Player />} />
        <Route id="test" path='/test' exact element={<Test />} />
      </Routes>
    </Router>
  );
}
export default App;