import React from "react";
import "../HomePage/home.css";

import { Route, Routes, Link } from "react-router-dom";
import Product from "../Products/Product";
const Home = () => {
  return (
    <div>
      <div className="bg-image">
        <img
          className="home-image"
          src="../images/home-img.jpg"
          alt="home-img"
        />

        <Link className="text-on-image" to="/Product">
          <h1> Explore ! </h1>
        </Link>

        <Routes>
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
      <br /> <br />
      <h1 className="heading">Top Categories</h1>
      <br></br> <br />
      <div className="cards-container">
        <div className="card">
          <img
            className="card-image"
            src="../images/imac/imac1.jpg"
            alt="card-category-img"
          />

          <div className="btn-bar btn-macbook">
            <button className="card-btn btn1">
              <Link className="products-link" to="/Product">
                i-Mac
              </Link>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-image"
            src="../images/ipad/ipad1.jpg"
            alt="card-category-img"
          />

          <div className="btn-bar btn-macbook">
            <button className="card-btn btn1">
              <Link className="products-link" to="/Product">
                i-Pad
              </Link>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-image"
            src="../images/watch/apple-watch2.jpg"
            alt="card-category-img"
          />

          <div className="btn-bar btn-macbook">
            <button className="card-btn btn1">
              <Link className="products-link" to="/Product">
                Apple Watch
              </Link>
            </button>
          </div>

          <Routes>
            <Route path="/Product" element={<Product />} />
          </Routes>
        </div>
      </div>
      <br /> <br /> <br />
    </div>
  );
};

export default Home;
