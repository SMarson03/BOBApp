import React from 'react';
import backgroundImage from '../Images/White.jpg';
import Navbar from '../Navbar';

function NoirEats() {
    return(
    <>
       <div
              className="bg-cover bg-center h-screen overflow-auto"
              style={{backgroundImage: `url(${backgroundImage})`}}>
              <Navbar/>
              <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX Eats</h1></div>
              <div className="subheader"><h2 className='ml-6 text-orange-600 text-center bold font-bold text-2xl'>A Black Owned Directory</h2>
              </div>
            </div>
    </>
    )
}

export default NoirEats;