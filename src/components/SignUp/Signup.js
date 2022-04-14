import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "../LoginPage/Login";

function Signup() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <div className="page-container">
        <h1 className="page-heading"> Signup Page</h1>

        <form>
          <label className="input-label">
            Name
            <span className="star"> *</span>
          </label>
          <br />
          <input
            className="input-box"
            type="text"
            placeholder="johndoe"
          /> <br /> <br />
          <label className="input-label">
            Email Address
            <span className="star"> *</span>
          </label>
          <br />
          <input
            className="input-box"
            type="email"
            placeholder="johndoe@example.com"
          />
          <br /> <br />
          <label className="input-label">
            Password <span className="star"> * </span>
          </label>
          <br />
          <input className="input-box" type="password" placeholder="********" />
          <br /> <br />
          <label className="input-label">
            Re-enter Password <span className="star"> * </span>
          </label>
          <br />
          <input className="input-box" type="password" placeholder="********" />
          <br />
          <br />
          <div className="div-ch-a">
            <input type="checkbox" /> <label> Remember me</label>
          </div>
          <br />
          <Link to="/Login ">
            <button className="login__btn buttons"> Create account</button>
          </Link>
          <br /> <br />
          <div className="bottom-div ">
            <Link to="/Login ">
              Already have an account
              <i className="fas fa-chevron-circle-right"></i>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
