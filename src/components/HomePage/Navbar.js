import React from 'react'
import "../HomePage/navbar.css"

import {Link, Routes, Route} from "react-router-dom"
import Wishlist from '../Wishlist/Wishlist'

export default function Navbar() {
  return (
    <div>
      
      <nav>
        <div className="navigation-bar"> 


        <div className='logo-input-container'>

        <div className="logo-container">
            
            <a className="logo" href="./index.html"> 
        
                <img className='apple-logo' src="../images/apple-logo.png" />
             
                 <h2 className="logo-text"> -store</h2>  
            </a>
        </div>

        <div className="search-bar" >
            <input className="search-input" placeholder="  search " type="text" />
        </div>

       </div>


        <div className="right-side-navbar">
         
                <div className="btn-container"> 
            <a href="../Login/login.html"> 
                    <button className="btn btn-login"> Login</button></a> 
            
        <a href="../Wishlist/wishlist.html"> <button className="btn icons">

        {/* <Link to="/Wishlist"> Wishlist</Link>
        <Routes> 
        <Route path='/Wishlist' element={<Wishlist /> } />
             <i className="far fa-heart"></i>  

             </Routes>    */}
            </button></a> 


            <a href="../Cart/cart.html"> <button className="btn icons">
               <i className="fas fa-shopping-cart"></i> 
                
            </button> </a>     
           </div>

            
        </div>

        </div>
    </nav>



    

    </div>
  )
}
