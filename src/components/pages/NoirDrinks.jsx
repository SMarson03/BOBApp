import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../Images/Cafes.jpg'
import Image2 from '../Images/Juicebar.jpg'
import Image3 from '../Images/Bars.jpg'

function NoirDrinks() {
    return(
        
        <>
         <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
      <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-black leading-none tracking-tight space-y-4">

        {/* BARS */}
        <div className="relative group  cursor-pointer">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
          <div className="relative z-10 px-4 py-2 transition-colors group-hover:text-white">
          <Link to="/Bars">BARS</Link>
          </div>
        </div>

        {/* CAFES */}
        <div className="relative group cursor-pointer">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
          <div className="relative z-10 px-4 py-2 transition-colors group-hover:text-white">
          <Link to="/Cafes">CAFES</Link>
          </div>
        </div>

        {/* JUICE BARS */}
        <div className="relative group cursor-pointer">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
            style={{ backgroundImage: `url(${Image2})` }}
          ></div>
          <div className="relative z-10 px-4  transition-colors group-hover:text-white whitespace-nowrap">
          <Link to="/Juicebars">JUICE BARS</Link>
          </div>
        </div>
        </div>
      </div>

          <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">NOIREX</div>
          <div className="flex gap-6 text-sm">
            <Link to="/Home">Home</Link>
            <Link to="/Eats">Eats</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <a href="#">Contact</a>
            <a href="#">About Us</a>
          </div>
        </div>
        </div>
        
        </div>
        
            {/* <div
              className="bg-cover bg-amber-600 h-screen overflow-auto">
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
             </div> */}
             
        </>
      
        )
    }

        
  export default NoirDrinks;
