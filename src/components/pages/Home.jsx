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
        const response = await fetch('https://bobapp-e93h.onrender.com/NoirX/places');
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

     const user = JSON.parse(localStorage.getItem("user"));
    
  return (
  <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-3 sm:p-6">

    <div className="
      relative
      min-h-screen
      w-full
      max-w-6xl
      bg-amber-50
      shadow-lg
      overflow-hidden
    ">

      {/* Background Title */}
      <div className="
        absolute 
        inset-0 
        flex 
        items-center 
        justify-center
        pointer-events-none
      ">
        <div className="
          text-center
          text-4xl
          sm:text-6xl
          lg:text-8xl
          font-bold
          text-black
          leading-none
          tracking-tight
        ">
          <div>NOIR</div>
          <div>INDEX</div>
          <div>A BLACK</div>
          <div>OWNED GUIDE</div>
        </div>
      </div>


      {/* Header */}
      <header className="
        relative
        z-20
        p-4
        sm:p-6
        flex
        flex-col
        gap-6
        md:flex-row
        md:justify-between
        md:items-start
      ">

        {/* User Area */}
        <div className="flex flex-col">

          <div className="text-lg font-bold">
            NOIREX
          </div>

          <div className="text-sm">
            Welcome, <strong>{user?.name || "Guest"}</strong>
          </div>


          {!user ? (
            <>
              <Link 
                to="/Login"
                className="text-sm hover:underline"
              >
                Login
              </Link>

              <Link 
                to="/SignUp"
                className="text-sm hover:underline"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/Submit"
                className="text-sm hover:underline"
              >
                Submit a Business
              </Link>

              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href="/Home";
                }}
                className="
                  text-left
                  text-sm
                  text-red-700
                  hover:underline
                "
              >
                Logout
              </button>
            </>
          )}

        </div>


        {/* Navigation */}
        <nav className="
          flex
          flex-wrap
          gap-3
          sm:gap-6
          text-sm
        ">

          <Link to="/Eats">Eats</Link>
          <Link to="/Drinks">Drinks</Link>
          <Link to="/Arts">Art</Link>
          <Link to="/Law">Law</Link>
          <Link to="/Therapy">Therapy</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About Us</Link>

        </nav>


      </header>


      {/* Right Panel */}
      <aside className="
        relative
        z-20
        mt-8
        mr-6
        text-sm
        text-right
        space-y-2
        md:absolute
        md:top-24
        md:right-4
      ">

        <div className="text-xl sm:text-2xl font-semibold">
          025
        </div>

        <div className="text-xl sm:text-2xl font-semibold">
          NYC EDITION
        </div>

        <div>
          <div>Brooklyn</div>
          <div>Bronx</div>
          <div>Manhattan</div>
          <div>Queens</div>
          <div>Staten Island</div>
        </div>

      </aside>


    </div>

  </div>
);
};

  

  export default Home;
