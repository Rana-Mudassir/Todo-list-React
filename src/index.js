import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './images/logo192.png'
import './App.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <div>
  <h1>Hello from React application</h1>
  <img src={reactLogo} className="logo react" alt="React logo" />
  </div>
);
