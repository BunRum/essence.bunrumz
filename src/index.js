import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App';
console.log(window.location);
const rootElement = document.getElementById("root");
// if (window.location.pathname = "/player") {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>,
//     rootElement
//   );
// } 
// else {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Home/>
//     </React.StrictMode>,
//     rootElement
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);