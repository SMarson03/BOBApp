import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Home() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://bobapp-e93h.onrender.com/NoirX/places")
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-yellow-600 flex justify-center p-3 sm:p-6">
      <div className="relative min-h-screen w-full max-w-7xl bg-amber-50 overflow-hidden shadow-xl">

        {/* Header */}
        <header className="relative z-20 flex justify-between items-start gap-6 p-5">
          
          <div className="flex flex-col shrink-0">
            <h1 className="text-xl font-bold">NOIREX</h1>

            <p className="text-sm">
              Welcome, <strong>{user?.name || "Guest"}</strong>
            </p>

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
                  className="text-left text-sm text-red-700 hover:underline"
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/Home";
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <nav className="flex gap-5 text-sm whitespace-nowrap overflow-x-auto pt-2">
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About Us</Link>
          </nav>

        </header>


        {/* Cover */}
        <main className="flex justify-center items-start pt-14 sm:pt-20">
          <div className="flex items-start gap-5 sm:gap-8 px-6">

            <div className="
              text-center
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-bold
              leading-[0.85]
              tracking-tight
            ">
              <div>NOIR</div>
              <div>INDEX</div>
              <div>A BLACK</div>
              <div>OWNED GUIDE</div>
            </div>


            <aside className="
              text-right
              text-xs
              sm:text-sm
              space-y-1
              pt-2
            ">
              <div className="text-base sm:text-xl font-semibold">
                025
              </div>

              <div className="text-base sm:text-xl font-semibold">
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