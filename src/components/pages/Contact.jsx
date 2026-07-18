import React from "react";
import { Link } from "react-router-dom";

const locations = [
  "Brooklyn",
  "Bronx",
  "Manhattan",
  "Queens",
  "Staten Island",
];

function Contact() {

  return (
    <>

      <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">

        <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-xl overflow-hidden">

          {/* Main Scroll Area */}
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
                <Link to="/About">About Us</Link>

              </div>

            </div>


            {/* Contact Content */}

            <div className="flex justify-center items-center mt-16">

              <div className="w-[380px]">

                <h1 className="text-5xl font-bold text-center mb-10">
                  CONTACT
                </h1>


                <form className="space-y-6">


                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                    w-full
                    h-12
                    bg-amber-50
                    border-4
                    border-black
                    p-4
                    text-black
                    "
                  />


                  <input
                    type="email"
                    placeholder="Your Email"
                    className="
                    w-full
                    h-12
                    bg-amber-50
                    border-4
                    border-black
                    p-4
                    text-black
                    "
                  />


                  <textarea
                    placeholder="Your Message"
                    className="
                    w-full
                    h-52
                    bg-amber-50
                    border-4
                    border-black
                    p-4
                    text-black
                    resize-none
                    "
                  />


                  <div className="flex justify-center">

                    <button
                      type="submit"
                      className="
                      w-24
                      h-10
                      bg-amber-50
                      border-4
                      border-black
                      text-sm
                      font-bold
                      hover:bg-black
                      hover:text-white
                      transition
                      "
                    >
                      SUBMIT
                    </button>

                  </div>


                </form>


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


export default Contact;