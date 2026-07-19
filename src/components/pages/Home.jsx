import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Home() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("https://bobapp-e93h.onrender.com/NoirX/places")
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-yellow-600 flex justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-7xl bg-amber-50 overflow-hidden shadow-xl">

        <header className="flex justify-between items-start gap-4 p-4 sm:p-5">

          <div className="flex flex-col shrink-0">
            <h1 className="text-xl font-bold">
              NOIREX
            </h1>

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

          <nav className="
            flex
            gap-4
            text-sm
            whitespace-nowrap
            overflow-x-auto
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


        <main className="flex justify-center pt-4 pb-8 sm:pt-8">

          <div className="
            flex
            items-start
            gap-3
            sm:gap-8
            px-4
          ">

            <div className="
              text-center
              text-4xl
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
              pt-1
            ">
              <div className="font-semibold text-sm sm:text-xl">
                025
              </div>

              <div className="font-semibold text-sm sm:text-xl">
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