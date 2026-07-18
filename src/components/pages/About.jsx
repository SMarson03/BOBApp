import React from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];

function About() {

  return (
    <>

      <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">

        <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-xl overflow-hidden">


          {/* Main Content */}

          <div className="absolute inset-0 overflow-y-auto max-h-[80vh]">


            {/* Header */}

            <div className="relative z-20 p-6 flex justify-between items-start">

              <div className="text-lg font-bold">
                NOIREX
              </div>


              <div className="flex gap-6 text-sm">

                <Link to="/Home">Home</Link>
                <Link to="/Eats">Eats</Link>
                <Link to="/Drinks">Drinks</Link>
                <Link to="/Arts">Art</Link>
                <Link to="/Law">Law</Link>
                <Link to="/Therapy">Therapy</Link>
                <Link to="/Contact">Contact</Link>

              </div>

            </div>



            {/* About Content */}

            <div className="flex justify-center items-center mt-20 px-12">

              <div className="max-w-3xl text-center space-y-8">


                <h1 className="text-6xl font-bold tracking-tight">
                  ABOUT NOIREX
                </h1>


                <p className="text-xl leading-relaxed">
                  Welcome to NoireX! We’re a community-driven platform
                  dedicated to supporting and showcasing Black-owned
                  businesses.
                </p>


                <p className="text-xl leading-relaxed">

                  Our mission is rooted in the belief that when we uplift
                  each other, we all rise.

                </p>


                <p className="text-xl leading-relaxed">

                  We believe in the power of collaboration and community.
                  By choosing to support a business, service, or product,
                  you’re helping create a more equitable economy where
                  everyone has the opportunity to succeed and grow.

                </p>


                <p className="text-xl leading-relaxed font-semibold">

                  Thank you for being part of this movement.
                  We’re excited to grow with you.

                </p>


              </div>

            </div>


          </div>


        </div>

      </div>




      {/* Right Info Panel */}

      <div className="absolute top-24 right-4 text-sm text-right space-y-2 z-20">

        <div className="text-2xl font-semibold">
          025
        </div>


        <div className="text-2xl font-semibold">
          NYC EDITION
        </div>


        <div className="space-y-1">

          {locations.map((loc)=>(
            <div key={loc}>
              {loc}
            </div>
          ))}

        </div>

      </div>


    </>
  );
}


export default About;