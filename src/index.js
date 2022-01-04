import React from 'react';
// Main entry point for the application renders the app compenent at the root element in the html.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This is rendering the root html file. Remember Render from handlebars!
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Look in html and you will see all of the root!
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
