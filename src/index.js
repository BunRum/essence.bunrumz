import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App';
console.log(window.location);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);