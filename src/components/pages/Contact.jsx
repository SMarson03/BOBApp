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
const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>

      <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">

        <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-xl overflow-hidden">

          {/* Main Scroll Area */}
          <div className="absolute inset-0 overflow-y-auto max-h-[80vh]">


            {/* Header */}
            <div className="relative z-20 p-6 flex justify-between items-start border-b border-black  ">

              <div className="text-lg font-bold">
                 <h1 className="text-xl font-bold">NOIREX <span className="text-xs">BETA</span></h1>

                <div className="flex flex-col gap-2 min-w-0">
                      <nav className="
                            flex
                            gap-3
                            text-xs
                            sm:text-sm
                            whitespace-nowrap
                            font-semibold
                            overflow-x-auto
                            max-w-full
                          ">
                
                            <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="
                      font-semibold
                      hover:underline
                    "
                  >
                    MENU +
                  </button>
                
                  {showMenu && (
                    <div className="
                      mt-2
                      space-x-2
                    ">
                            <Link to="/Home">Home</Link>
                            <Link to="/Eats">Eats</Link>
                            <Link to="/Drinks">Drinks</Link>         
                            <Link to="/Arts">Art</Link>
                            <Link to="/Therapy">Therapy</Link>
                            <Link to="/About">About</Link>
                               
                </div>  
                  )}
                          </nav>
                    </div>
                    </div>
                 
                        
                       <aside className="
            text-right
            text-xs
            sm:text-sm
            space-y-1
          ">
            <div className="font-semibold text-sm sm:text-xl">
              2026
            </div>

            <div className="font-semibold text-sm sm:text-xl">
              NYC EDITION
            </div>
            </aside>

             

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

        


       

      </div>


    </>
  );
}


export default Contact;