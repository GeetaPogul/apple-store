import React from 'react';
import "../css/home.css"

function Home() {
  return (
    <div>
      
      <div className='bg-image'>
        <img className="home-image" src='../images/home-img.jpg' /> 

        <a className='text-on-image' href='#'> <h1> Explore ! </h1> </a>
       </div>

        <h1 className="heading"> Top Categories</h1> <br></br>


        <div className='cards-container'>


        <div class="card">
 
           < img class="card-image" src="../images/imac/imac1.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

             <div class="btn-bar btn-macbook"> <a href="index.html" > <button class="card-btn btn1">   imac  </button> </a> </div>
        </div>


        
        <div class="card">
 
           < img class="card-image" src="../images/ipad/ipad1.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

             <div class="btn-bar btn-macbook"> <a href="index.html" > <button class="card-btn btn1">   ipad  </button> </a> </div>
        </div>


        
        <div class="card">
 
           < img class="card-image" src="../images/watch/apple-watch2.jpg" alt="" />

             {/* <div class="top-icon-red "> 
                  <i class="fas fa-heart card-heart-icon" > </i> 
              </div> */}

             <div class="btn-bar btn-macbook"> <a href="index.html" > <button class="card-btn btn1">   Apple watch  </button> </a> </div>
        </div>

    </div> <br/> <br/> <br/>



    </div>
  )
}

export default Home
