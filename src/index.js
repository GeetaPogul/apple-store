import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { BrowserRouter as Router, Routes,} from "react-router-dom";
// import { ProductsProvider } from './components/Context/product.context';
// import { CartProvider } from './components/Context/cart-context';
// import { WishlistProvider } from './components/Context/wishlist.context';


ReactDOM.render(
  <React.StrictMode> 
       <Router>        
         <App /> 
         </Router>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

