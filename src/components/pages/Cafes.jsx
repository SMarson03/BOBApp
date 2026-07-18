// import React from 'react';
// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';


// const locations = ['Brooklyn', 'Bronx', 'Manhattan', 'Queens', 'Staten Island'];

// function Cafes() {
//   const [mydata, setMyData] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:8080/NoirX/cafes');
//         const data = await response.json();
//         setMyData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   const filteredData = selectedLocation
//     ? mydata.filter((item) => item.location === selectedLocation)
//     : mydata;

   
//         return(
//         <>

//          <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
//               <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden srollbar-hide">
//               <div className= "absolute inset-0 overflow-y-auto max-h-[80vh]">
//                   <div className="relative z-20 p-6 flex justify-between items-start">
//                   <div className="text-lg font-bold">NOIREX</div>
//                   <div className="flex gap-6 text-sm">
//                     <Link to="/Home">Home</Link>
//                     <a href="#">Eats</a>
//                     <Link to="/Drinks">Drinks</Link>
//                     <Link to="/Law">Law</Link>
//                     <Link to="/Therapy">Therapy</Link>
//                     <a href="#">Contact</a>
//                     <a href="#">About Us</a>
//                   </div>
                  
//                 </div>
//                 <div className='container-events '>
//       <div class="grid grid-cols-3 gap-5 p-5">
//         {mydata.map((item, index) => {
//           return (
//             <>
             
//              <div key={index} >
//              <div className="flex flex-col items-center m-5 p-2.5 border-2 border-black
//               w-[200] h-[160px] ">
//   <img src={item.image_Url} alt="item" className="w-full h-full object-contain" />
// </div>
//              <div className='px-8'>
//               <div className="text-md font-bold"><p style={{display: 'flex', justifyContent:'left'}}>{item.name}</p>
//               <p style={{display: 'flex', justifyContent:'left'}}>{item.address}</p>
//               <p style={{display: 'flex', justifyContent:'left'}}>{item.location}</p></div></div>
//               <button className="m-8 w-14 h-8 mt-6 bg-amber-50 bg-opacity-80 border border-2  border-black items-center 
//         flex justify-center text-sm text-black  "><a href={item.url} target="_blank">Visit</a></button>
            
                
                         
//                   </div>
            
//             </>
//           );
//          })} 
          
//          </div>
//          </div>   
              
//                 </div>
//                 </div>
//                 </div>
           
//           {/* Location Filter */}
//         <div className="absolute top-24 right-4 text-sm text-right space-y-2 z-20">
//           <div className="text-2xl font-semibold">025</div>
//           <div className="text-2xl font-semibold">NYC EDITION</div>
//           <div className="space-y-1">
//             {locations.map((loc) => (
//               <div
//                 key={loc}
//                 onClick={() => setSelectedLocation(loc)}
//                 className={`cursor-pointer hover:underline ${
//                   selectedLocation === loc ? 'font-bold text-white' : ''
//                 }`}
//               >
//                 {loc}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Filtered Results */}
//         <div className="overflow-y-auto p-4 rounded-lg custom-scrollbar absolute bottom-64 right-4 text-sm text-right bg-black bg-opacity-90 space-y-2 z-30 w-36 max-h-[22vh]">
//           {filteredData.length > 0 ? (
//             filteredData.map((item, index) => (
//               <div key={index} className="mb-4 justify-center border-b pb-2">
//                 <h2 className="text-lg font-semibold text-white">{item.name}</h2>
//                 <p className="text-sm text-yellow-500">{item.location}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-white">No results found.</p>
//           )}
//         </div>
//         </>
        
//       );
//   }


        
//         export default Cafes;