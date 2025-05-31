import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


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

     <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
          <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden srollbar-hide">
          <div className= "absolute inset-0 overflow-y-auto max-h-[80vh]">
              <div className="relative z-20 p-6 flex justify-between items-start">
              <div className="text-lg font-bold">NOIREX</div>
              <div className="flex gap-6 text-sm">
                 <Link to="/Home">Home</Link>
                <a href="#">Eats</a>
                <Link to="/Drinks">Drinks</Link>
                <Link to="/Law">Law</Link>
                <Link to="/Therapy">Therapy</Link>
                <a href="#">Contact</a>
                <a href="#">About Us</a>
              </div>
              
            </div>
            <div className='container-events '>
  <div class="grid grid-cols-3 gap-5 p-5">
    {mydata.map((item, index) => {
      return (
        <>
         
         <div key={index} >
         <div className="flex flex-col items-center m-5 p-2.5 border-2 border-black
          w-[200] h-[160px] ">
<img src={item.image_Url} alt="item" className="w-full h-full object-contain" />
</div>
         <div className='px-8'>
          <div className="text-md font-bold"><p style={{display: 'flex', justifyContent:'left'}}>{item.name}</p>
          <p style={{display: 'flex', justifyContent:'left'}}>{item.address}</p>
          <p style={{display: 'flex', justifyContent:'left'}}>{item.location}</p></div></div>
          <button className="m-8 w-14 h-8 mt-6 bg-amber-50 bg-opacity-80 border border-2  border-black items-center 
    flex justify-center text-sm text-black  "><a href={item.url} target="_blank">Visit</a></button>
        
            
                     
              </div>
        
        </>
      );
     })} 
      
     </div>
     </div>   
          
            </div>
            </div>
            </div>
        </>
        
      );
  }


        
        export default Juicebars;