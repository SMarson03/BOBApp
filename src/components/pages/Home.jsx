import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const locations = ['Brooklyn', 'Bronx', 'Manhattan', 'Queens', 'Staten Island'];

function Home() {
  const [mydata, setMyData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/NoirX/restaurants');
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const filteredData = selectedLocation
    ? mydata.filter((item) => item.location === selectedLocation)
    : mydata;

  return (
    <>
    {/* <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
      <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
         */}
        {/* Center Title */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-black leading-none tracking-tight">
          <div>NOIR </div>
            <div>INDEX</div>
            <div>A BLACK</div>
            <div>OWNED GUIDE</div>
          </div>
        </div> */}

        {/* Header */}
        {/* <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">Noirex</div>
          <div className="flex gap-6 text-sm">
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Arts</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <a href="#">Contact</a>
            <a href="#">About Us</a>
          </div>
        </div>

      
      </div>
    </div> */}

      <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
      <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-black leading-none tracking-tight">
            <div>NOIR </div>
            <div>INDEX</div>
            <div>A BLACK</div>
            <div>OWNED GUIDE</div>
          </div>
        </div>

        
        {/* Header */}
        <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">NOIREX</div>
          <div className="flex gap-6 text-sm">
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About Us</Link>
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="absolute top-24 right-4 text-sm text-right space-y-2 z-20">
        <div className="text-2xl font-semibold">025</div>
          <div className="text-2xl font-semibold">NYC EDITION</div>
          <div>
            <div>Brooklyn</div>
            <div>Bronx</div>
            <div>Manhattan</div>
            <div>Queens</div>
            <div>Staten Island</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

  

  export default Home;
