import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Home from './Home';
import Menu from './menu';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Home /> */} 
     <Menu /> 
  </React.StrictMode>
);


