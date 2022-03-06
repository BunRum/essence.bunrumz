import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Games from './Games';
import Player from './Player';
import Navbar from './Navbar';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
      <Navbar css={{
        "position": "sticky",
        "top": "0"
      }} />
      <Routes>
        <Route id="Games" path='/' exact element={<Games />} />
        <Route id="Player" path='/Player' exact element={<Player />} />
      </Routes>
    </Router>,
  rootElement
);