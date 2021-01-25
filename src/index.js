import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
   <React.StrictMode>
     <App />
  </React.StrictMode>,
  // React.createElement("h1", {class:"input-text"}, "Hello world"),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <h1 class="input-element">Hello World</h1>,
//   document.getElementById('root')
reportWebVitals();
