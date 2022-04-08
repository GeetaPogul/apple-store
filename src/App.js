import "./index.css";
import React from "react";
import "./components/HomePage/navigation.css";

import { Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
import Login from "./components/LoginPage/Login";
import Signup from "./components/SignUp/Signup";
import Wishlist from "./components/Wishlist/Wishlist";
import Product from "./components/Products/Product";
import HomePage from "./components/HomePage/HomePage";
import { Link } from "react-router-dom";
import { useCart } from "./components/list/context/cart.context";
import { useWishlist } from "./components/list/context/wishlist.context";

function App() {
  const { cartState } = useCart();

  const { wishlistState } = useWishlist();

  const wishItemNum = wishlistState.length;

 
  return (
    <div className="App">
      <div>
        <nav className="navigation__bar">
          <Link className="logo-text" to="/HomePage ">
            <i className="fa fa-apple" aria-hidden="true"></i>-store
          </Link>

          <span className="input__bar">
            <input
              className="input"
              type="text"
              placeholder=" search here..."
              name="search"
            />
            <button className="nav-btn " type="submit">
              <i className="fa fa-search "></i>
            </button>
          </span>

          <span className="right-nav-bar">
            <Link to="/Login ">
              <button className="btns login-btn"> Login</button>
            </Link>

            <Link to="/Signup">
              <i className="nav-icons fa fa-sign-in" aria-hidden="true"></i>
            </Link>
            <Link to="/Wishlist">
              <i className=" notification nav-icons far fa-heart">
                <span className="badge"> {wishItemNum}</span>
              </i>
            </Link>
            <Link to="/CartPage">
              <i className=" notification nav-icons fas fa-shopping-cart">
                <span className="badge">
                  {cartState.reduce((a, b) => a + b.quantity, 0)}
                </span>
              </i>
            </Link>

          
          </span>

        </nav>

        <Routes>
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
