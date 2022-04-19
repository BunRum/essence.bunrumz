import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import Games from './Games';
import Player from './Player';
// import Navbar from './Navbar';
import NotFoundPage from "./404";
import App from "./test";
import Riddleschoolseries from "./Rss";
// import { Redirect } from 'react-router'

const rootElement = document.getElementById("root");

// const App = () => useRoutes([
//   { path: "/home", element: <Home /> },
//   { path: "/users", element: <Home /> },
//   { path: "/widgets", element: <Home /> }
// ]);

ReactDOM.render(
  <Router>
    {/* <Navbar css={{
      "position": "sticky",
      "top": "0"
    }} /> */}
    <Routes>
      <Route id="Games" path="essence.bunrumz" exact element={<Games />} />
      <Route id="rss" path="essence.bunrumz/RiddleSchool" exact element={<Riddleschoolseries />} />
      <Route id="Player" path='/essence.bunrumz/Player' exact element={<Player />} />
      <Route id="404" path="*" element={<NotFoundPage />} />
      <Route id="Test" path="essence.bunrumz/test" exact element={<App />} />
      {/* <Redirect to="/404" />  */}
    </Routes>
  </Router>,
  rootElement
);