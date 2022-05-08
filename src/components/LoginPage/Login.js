import React from "react";
import "./login.css";
import { Route, Routes, Link } from "react-router-dom";
import Signup from "../SignUp/Signup";

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <main>
        <div className="page-container">
          <h1 className="page-heading">Login Page</h1>
          <form>
            <label className="input-label">
              Email Address <span className="star"> *</span>
            </label>
            <br />
            <input
              className="input-box"
              type="email"
              placeholder="johndoe@example.com"
            />
            <br />
            <br />

            <label className="input-label">
              Password <span className="star"> * </span>
            </label>
            <br />

            <input
              className="input-box"
              type="password"
              placeholder="********"
            />
            <br />
            <br />

            <div className="div-ch-a">
              <input type="checkbox" />
              <label> Remember me</label>

              <a
                className="forget-pass a-blue-color"
                href="../Files/index.html"
              >
                Forget Password?
              </a>
            </div>
            <br />
            <Link to="/Login ">
              <button className="login__btn buttons"> Login</button>
            </Link>

            <br />

            <div className="bottom-div">
              <Link to="/Signup ">
                Create new account
                <i className="fas fa-chevron-circle-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
