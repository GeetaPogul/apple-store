import React from 'react';
import "./login.css"
import {Route, Routes, Link} from "react-router-dom";
import Signup from '../SignUp/Signup';


function Login() {
  return (
    <div>

         <Routes>
            <Route path='/Login' element={<Login /> } />
            <Route path='/Signup' element={<Signup /> } />
          </Routes>
      <main>
      <div class="page-container">
        <h1 class="page-heading">Login Page</h1>
        <form>
          <label class="input-label">
            Email Address <span class="star"> *</span></label
          >
          <br />
          <input
            class="input-box"
            type="email"
            placeholder="johndoe@example.com"
          />
          <br />
          <br />

          <label class="input-label">
            Password <span class="star"> * </span></label
          >
          <br />

          <input class="input-box" type="password" placeholder="********" />
          <br /><br />

          <div class="div-ch-a">
            <input type="checkbox" />
            <label> Remember me</label>

            <a class="forget-pass a-blue-color" href="../Files/index.html">
              Forget Password?</a
            >
          </div>
          <br />
             <Link to="/Login ">  <button className='login__btn buttons'> Login</button></Link>
          
          <br />

          <div class="bottom-div">


           <Link to="/Signup ">  Create new account <i class="fas fa-chevron-circle-right"></i> </Link> 


          </div>
        </form>
      </div>
    </main>
    </div>
  )
}

export default Login
