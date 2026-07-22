import React from "react";
import { Link } from "react-router-dom";

function About() {
const[showMenu, setShowMenu] = React.useState(false);

  return (

    <div className="
      min-h-screen
      bg-yellow-600
      flex
      justify-center
      p-3
      sm:p-6
    ">


      <div className="
        w-full
        max-w-7xl
        bg-amber-50
        shadow-xl
        overflow-hidden
      ">



        {/* HEADER */}
<header className="
          flex
          justify-between
          items-start
          gap-4
          p-4
          sm:p-5 border-b border-black
        ">

          <div className="min-w-0">
 
     <h1 className="text-xl font-bold">NOIREX <span className="text-xs">BETA</span></h1>
 
    <h2 className="
      text-5xl
      sm:text-6xl
      lg:text-8xl
      font-bold
      
    ">
      ABOUT
      </h2>

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
            <Link to="/Contact">Contact</Link>
               
</div>  
  )}
          </nav>
    </div>
    </div>
 
        
          
{/* Location Filter */}
          <div className="
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

           
          </div>

          
        </header>
   







        {/* TITLE */}

        <section className="
          flex
          justify-between
          items-start
          px-5
          pt-4
          pb-6
        ">

         

        </section>








        {/* ABOUT CONTENT */}


        <main className="
          px-5
          pb-12
          flex
          justify-center
        ">



          <div className="
            max-w-3xl
            text-center
            space-y-8
          ">




            <p className="
              text-lg
              sm:text-xl
              leading-relaxed
            ">

              Welcome to NoireX! We’re a community-driven platform
              dedicated to supporting and showcasing Black-owned
              businesses.

            </p>





            <p className="
              text-lg
              sm:text-xl
              leading-relaxed
            ">

              Our mission is rooted in the belief that when we uplift
              each other, we all rise.

            </p>






            <p className="
              text-lg
              sm:text-xl
              leading-relaxed
            ">

              We believe in the power of collaboration and community.
              By choosing to support a business, service, or product,
              you’re helping create a more equitable economy where
              everyone has the opportunity to succeed and grow.

            </p>






            <p className="
              text-lg
              sm:text-xl
              leading-relaxed
              font-semibold
            ">

              Thank you for being part of this movement.
              We’re excited to grow with you.

            </p>




          </div>



        </main>




      </div>


    </div>

  );

}


export default About;