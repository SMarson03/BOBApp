import React from 'react';
import backgroundImage from '../Images/Bronze.jpg';
import Navbar from '../Navbar';
import Image1 from '../Images/Cafes.jpg'
import Image2 from '../Images/Juicebar.jpg'
import Image3 from '../Images/Bars.jpg'

function NoirDrinks() {
    return(
        
        <>
            <div
              className="bg-cover bg-amber-600 h-screen overflow-auto">
              <Navbar/>
              <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX Drinks</h1></div>
              <div className="subheader"><h2 className='ml-6 text-orange-600 text-center  text-3xl'>A Black Owned Directory</h2>
              </div>
              <div className='container-drinks'>
                <div class="grid grid-cols-3 gap-5 p-5">
                  <a href='/Cafes'><div className="relative w-full h-full flex justify-center items-center hover:scale-105"><img src={Image1} alt="Food" className='border-4 border-black'/>
                  <div className="absolute text-white font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
                  Cafes
                  </div></div></a>
                  <a href='/Juicebars'><div className="relative w-full h-full flex justify-center items-center hover:scale-105">
                  <img src={Image2} alt="Food" className='rotate-90 border-4 border-black' style={{ width: "280px", transformOrigin: "center" }} />
                  <div className="absolute text-white font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
                  Juicebars
                  </div></div></a>
                  <a href='/Bars'><div className="relative w-full h-full flex justify-center items-center hover:scale-105" >
                  <img src={Image3} alt="Food" className='border-4 border-black'/>
                  <div className="absolute text-white font-bold text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>
                  Bars
                  </div></div></a>

                
                </div>   
              </div>
             </div>
        </>
        )
    }

        
  export default NoirDrinks;
