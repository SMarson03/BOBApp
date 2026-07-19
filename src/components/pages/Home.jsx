import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://bobapp-e93h.onrender.com/NoirX/places"
        );
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-yellow-600 flex justify-center p-3 sm:p-6">
      <div className="relative min-h-screen w-full max-w-7xl bg-amber-50 overflow-hidden shadow-xl">

        {/* Header */}
        <header className="relative z-30 flex items-start justify-between gap-6 p-5">

          {/* User Section */}
          <div className="flex flex-col shrink-0">
            <div className="text-xl font-bold">
              NOIREX
            </div>

            <div className="text-sm mt-1">
              Welcome, <strong>{user?.name || "Guest"}</strong>
            </div>

            {!user ? (
              <>
                <Link to="/Login" className="text-sm hover:underline">
                  Login
                </Link>

                <Link to="/SignUp" className="text-sm hover:underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link to="/Submit" className="text-sm hover:underline">
                  Submit a Business
                </Link>

                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/Home";
                  }}
                  className="text-left text-sm text-red-700 hover:underline"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-5 text-sm whitespace-nowrap overflow-x-auto pt-2">
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About Us</Link>
          </nav>

        </header>

        {/* Main Cover */}
        <main className="relative min-h-[80vh] flex items-center justify-center">

          <div className="flex items-center justify-center gap-5 sm:gap-10 px-6">

            {/* Main Title */}
            <div className="text-center text-5xl sm:text-7xl lg:text-9xl font-bold leading-[0.82] tracking-tighter">
              <div>NOIR</div>
              <div>INDEX</div>
              <div>A BLACK</div>
              <div>OWNED GUIDE</div>
            </div>

            {/* Edition Panel */}
            <aside className="text-right text-sm sm:text-base lg:text-lg space-y-2 shrink-0">
              <div className="text-xl sm:text-3xl font-semibold">
                025
              </div>

              <div className="text-xl sm:text-3xl font-semibold">
                NYC EDITION
              </div>

              <div>Brooklyn</div>
              <div>Bronx</div>
              <div>Manhattan</div>
              <div>Queens</div>
              <div>Staten Island</div>
            </aside>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;