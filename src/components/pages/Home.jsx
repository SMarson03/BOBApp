import React from 'react';
import backgroundImage from '../Images/NoirBackground6.jpg';
import Image1 from '../Images/Food.jpg'
import Image2 from '../Images/Art.jpg'
import Image3 from '../Images/NoirTherapy2.jpg'
import Image4 from '../Images/Legal.jpg'
import Image5 from '../Images/Drinks.jpg'
import Navbar from '../Navbar';



function Home() {
    return (
       <>
        <div
          className="bg-cover bg-[35%_45%] h-auto min-h-screen overflow-x-auto overflow-auto"
          style={{backgroundImage: `url(${backgroundImage})`}}>
          <Navbar/>
          <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX</h1></div>
          <div className="subheader"><h2 className='ml-6 text-orange-600 text-center bold font-bold text-2xl'>A Black Owned Directory</h2></div>
          
 
          <div className="flex flex-col pt-20 space-y-8 mb-20">
        <div className="flex space-x-10 justify-center">
        <a href='/Eats'><div className='flex m-0 border border-2 border-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105'>
         <div className="w-[200px] h-[320px] bg-black bg-opacity-80 flex p-5 justify-end flex-col">
          <div className='text-white font-bold text-2xl'>EATS</div>
          <div className='text-white text-xs'>NYC-5-BOROS</div>
          <div className='mt-1'>
          <div className='text-white text-sm'>BLACK OWNED</div>
          <div className='mt-1'>
          <div className='text-white font-bold text-xs'>RESTAURANTS</div><div className='text-white text-xs'>FAST CASUAL | CASUAL DINING | FINE DINING </div>
          <div className='text-white font-bold text-xs'>
        </div>
        </div></div>  
        </div><img src={Image1} alt="Food" width="340px" height="200px"/></div></a>

        <a href='/Drinks'><div className='flex m-0 border border-2 border-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105'>
         <div className="w-[200px] h-[320px] bg-black bg-opacity-80 flex p-5 justify-end flex-col">  
          <div className='text-white font-bold text-2xl'>DRINKS</div>
          <div className='text-white text-xs'>NYC-5-BOROS</div>
          <div className='mt-1'>
          <div className='text-white text-sm'>BLACK OWNED</div>
          <div className='mt-1'>
          
          <div className='text-white font-bold text-xs'>
          <div>BARS</div>
          <div>CAFE</div>
          <div>JUICE BARS</div></div>
          </div></div>                
        </div><img src={Image5} alt="Drinks" width="340px" height="200px"/></div></a>
        </div>

        <div className="flex justify-center">
        <a href='/Arts'><div className='flex m-0 border border-2 border-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105'>
        <div className="w-[200px] h-[320px] bg-black bg-opacity-80 flex p-5 justify-end flex-col">
        <div className='text-white font-bold text-2xl'>ARTS</div>
          <div className='text-white text-xs'>NYC-5-BOROS</div>
          <div className='mt-1'>
          <div className='text-white text-sm'>BLACK OWNED</div>
          <div className='mt-1'>
          <div className='text-white font-bold text-xs'>GALLERIES</div>
          <div className='text-white font-bold text-xs'>GRANTS · OPEN CALLS</div><div className='text-amber-100 text-xs'>| COMING SOON |</div>
          </div></div>
          </div><img src={Image2} alt="Art" width="340px" height="200px"/></div></a>
         </div>

         <div className="flex space-x-10 justify-center">
         <a href='/Therapy'><div className='flex m-0 border border-2 border-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105'>
         <div className="w-[200px] h-[320px] bg-black bg-opacity-80 flex p-5 justify-end flex-col">
         <div className='text-white font-bold text-2xl'>THERAPY</div>
          <div className='text-white text-sm text-xs'>NYC-5-BOROS</div>
          <div className='mt-1'>
          <div className='text-white text-sm text-sm'>BLACK OWNED</div>
          <div className='mt-1'>
          <div className='text-white font-bold text-xs'>THERAPISTS</div>
          <div className='text-amber-100 text-xs'>FAMILY | COUNSELOR | PSYCHOLOGIST </div>
          </div></div>
          </div><img src={Image3} alt="Art" width="340px" height="200px"/></div></a>

          <a href='/Law'><div className='flex m-0 border border-2 border-white transition-all duration-300 ease-in-out hover:bg-black hover:scale-105'>
         <div className="w-[200px] h-[320px] bg-black bg-opacity-80 flex p-5 justify-end flex-col">  
         <div className='text-white font-bold text-2xl'>LAW</div>
        <div className='text-white text-xs'>NYC-5-BOROS</div>
          <div className='mt-1'>
          <div className='text-white text-sm'>BLACK OWNED</div>
          <div className='mt-1'>
          <div className='text-white font-bold text-xs'>LAWYERS</div>
          <div className='text-amber-100 text-xs'>REAL ESTATE | IMMIGRATION | TRADEMARK </div>
          </div></div>
          </div><img src={Image4} alt="Art" width="340px" height="200px"/></div></a>
        </div></div>
        </div>
             
          
    </>

      );
}

export default Home;