import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../Images/Casual Dining.jpg'
import Image2 from '../Images/FineDining.jpg'
import Image3 from '../Images/Fast Casual.jpg'

function NoirEats() {
  return(
        
    <>
     <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
  <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-black leading-none tracking-tight space-y-4 whitespace-nowrap">

    {/* BARS */}
    <div className="relative group  cursor-pointer">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image3})` }}
      ></div>
      <div className="relative z-10 px-4 py-2 transition-colors group-hover:text-white">
      <Link to="/Bars">FAST</Link>
      </div>
    </div>

    {/* CAFES */}
    <div className="relative group cursor-pointer">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image1})` }}
      ></div>
      <div className="relative z-10 px-4 py-2 transition-colors group-hover:text-white">
      <Link to="/Cafes">CASUAL</Link>
      </div>
    </div>

    {/* JUICE BARS */}
    <div className="relative group cursor-pointer">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url(${Image2})` }}
      ></div>
      <div className="relative z-10 px-4  transition-colors group-hover:text-white whitespace-nowrap">
      <Link to="/Juicebars">FINE DINING</Link>
      </div>
    </div>
    </div>
  </div>

      <div className="relative z-20 p-6 flex justify-between items-start">
      <div className="text-lg font-bold">NOIREX</div>
      <div className="flex gap-6 text-sm">
        <Link to="/Home">Home</Link>
        <Link to="/Drinks">Drinks</Link>
        <Link to="/Law">Law</Link>
        <Link to="/Therapy">Therapy</Link>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </div>
    </div>
    </div>
    
    </div>
    
    </>
    )
}

export default NoirEats;