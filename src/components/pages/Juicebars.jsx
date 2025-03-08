import React from 'react';
import { useEffect, useState } from 'react'
import backgroundImage from '../Images/Emerald.jpg';
import Navbar from '../Navbar';

function Juicebars(){
    const [mydata, setMyData] = useState([]);
  

    useEffect(() => {
     
        async function fetchData(){
        try {
          const response = await fetch('http://localhost:8080/NoirX/juicebars');
          const data = await response.json();
          setMyData(data);
        } catch (error) {
          console.error(error);
      }
     }
      fetchData();
    }, []);
   console.log(mydata);

    return(
        <>
            <div
              className="bg-cover bg-red-900 h-screen overflow-auto">
              <Navbar/>
              <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX Juicebars</h1></div>
              <div className="subheader"><h2 className='ml-6 text-amber-200 text-center bold font-bold text-2xl'>A Black Owned Directory</h2>
              </div>

              <div className='container-events '>
      <div class="grid grid-cols-3 gap-5 p-5">
        {mydata.map((item, index) => {
          return (
            <>
             
             <div key={index} >
             <div className="flex flex-col items-center m-5 p-2.5 border-4 rounded-3xl rounded-tl border-black w-[400px] h-[320px] bg-orange-500 bg-opacity-80">
  <img src={item.image_Url} alt="item" className="w-full h-full object-contain" />
</div>
             <div className='gallery-description'><div className='text-xl text-white'>
              <h3 style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.name}</h3>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.address}</p>
              <p style={{display: 'flex', justifyContent:'center', margin: 'auto'}}>{item.location}</p></div></div> 
              <button className="m-auto w-14 h-8 mt-6 bg-amber-200 bg-opacity-80 border border-4 rounded-3xl rounded-tl border-black items-center 
        flex justify-center text-sm text-black  "><a href={item.url} target="_blank">Visit</a></button>
            
                
                         
                  </div>
            
            </>
          );
         })} 
          
         </div>
         </div>   
        </div>
        
        </>
        
      );
  }


        
        export default Juicebars;