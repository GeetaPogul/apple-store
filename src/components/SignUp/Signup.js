import React from 'react'
import{Route, Routes, Link} from "react-router-dom";
import Login from '../LoginPage/Login';
// import Signup from '../SignUp/Signup';

function Signup() {
  return (
    <div>

       <Routes>
            <Route path='/Login' element={<Login /> } />
            <Route path='/Signup' element={<Signup /> } />
          </Routes>

          <div className='page-container' > 
     
      <h1 class="page-heading"> Signup Page</h1>
            
         <form>
                <label class="input-label"> Name
                    <span  class="star"> *</span></label> <br/>
                <input class="input-box" type="text" placeholder="johndoe" /> <br/> <br/>

                <label class="input-label"> Email Address 
                <span  class="star"> *</span></label> <br/>
            <input class="input-box" type="email" placeholder="johndoe@example.com" /> <br/> <br/>

            <label class="input-label"> Password <span class="star"> * </span></label> <br/> 

            <input class="input-box" type="password" placeholder="********" /> <br/> <br/>


            <label class="input-label"> Re-enter Password <span class="star"> * </span></label> <br/>

            <input class="input-box" type="password" placeholder="********" /> <br/><br/> 
            
           <div class="div-ch-a"> 
            <input type="checkbox"  /> <label> Remember me</label>
            </div> <br/>
            

            <Link to="/Login ">  <button className='login__btn buttons'> Create account</button></Link> <br/> <br/>

         <div class="bottom-div "> 
         <Link to="/Login ">   Already have an account <i class="fas fa-chevron-circle-right"></i></Link>
            </div>
          
        </form>

        </div>
            

             

    </div>
  )
}

export default Signup
