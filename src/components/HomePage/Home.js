import React from 'react';
import "../HomePage/home.css"

import {Route, Routes, Link} from "react-router-dom";
import Product from "../Products/Product";
function Home() {
  return (
    <div>
      
      <div className='bg-image'>
        <img className="home-image" src='../images/home-img.jpg' /> 


        <Link className='text-on-image' to ="/Product"> <a  href='#'> <h1> Explore ! </h1> </a> </Link>
       <Routes>
       <Route path='/Product' element={<Product/>} />

       </Routes>

       </div>

       {/* <Link to ="/Product"> Go to Products </Link>
       <Routes>
       <Route path='/Product' element={<Product/>} />

       </Routes> */}

          <br/> <br/>
        <h1 className="heading"> Top Categories</h1> <br></br> <br />


        <div className='cards-container'>


        <div class="card">
 
           < img class="card-image" src="../images/imac/imac1.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

           <div class="btn-bar btn-macbook">  <button class="card-btn btn1">  <Link className='products-link' to ="/Product">i-Mac </Link>  </button>  </div> 
        </div>


        
        <div class="card">
 
           < img class="card-image" src="../images/ipad/ipad1.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

               <div class="btn-bar btn-macbook">  <button class="card-btn btn1">  <Link className='products-link' to ="/Product">i-Pad </Link>  </button>  </div>
        </div>


        
        <div class="card">
 
           < img class="card-image" src="../images/watch/apple-watch2.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

             <div class="btn-bar btn-macbook">  <button class="card-btn btn1">  <Link className='products-link' to ="/Product">Apple Watch </Link>  </button>  </div>


             

             <Routes>
             <Route path='/Product' element={<Product/>} />

             </Routes>
        </div>




    </div> <br/> <br/> <br/>



    </div>
  )
}

export default Home
