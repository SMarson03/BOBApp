import React from "react";
import { Link } from "react-router-dom";


function Contact() {


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
          sm:p-5
        ">


          <div className="
            text-xl
            font-bold
          ">

            NOIREX

          </div>




          <nav className="
            flex
            gap-4
            text-sm
            whitespace-nowrap
            overflow-x-auto
          ">


            <Link to="/Home">
              Home
            </Link>


            <Link to="/Eats">
              Eats
            </Link>


            <Link to="/Drinks">
              Drinks
            </Link>


            <Link to="/Arts">
              Art
            </Link>


            <Link to="/Law">
              Law
            </Link>


            <Link to="/Therapy">
              Therapy
            </Link>


            <Link to="/About">
              About Us
            </Link>


          </nav>


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


          <h1 className="
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-bold
            leading-none
          ">

            CONTACT

          </h1>




          <aside className="
            text-right
            text-xs
            sm:text-sm
            space-y-1
          ">


            <div className="
              font-semibold
              text-sm
              sm:text-xl
            ">

              025

            </div>



            <div className="
              font-semibold
              text-sm
              sm:text-xl
            ">

              NYC EDITION

            </div>


          </aside>


        </section>







        {/* CONTACT FORM */}


        <main className="
          flex
          justify-center
          px-5
          pb-10
        ">



          <form className="
            w-full
            max-w-md
            space-y-6
          ">



            <input

              type="text"

              placeholder="Your Name"

              className="
                w-full
                h-12
                border-4
                border-black
                bg-amber-50
                p-4
              "

            />





            <input

              type="email"

              placeholder="Your Email"

              className="
                w-full
                h-12
                border-4
                border-black
                bg-amber-50
                p-4
              "

            />







            <textarea

              placeholder="Your Message"

              className="
                w-full
                h-52
                border-4
                border-black
                bg-amber-50
                p-4
                resize-none
              "

            />







            <div className="
              flex
              justify-center
            ">


              <button

                type="submit"

                className="
                  px-6
                  py-2
                  border-4
                  border-black
                  text-sm
                  font-bold
                  hover:bg-black
                  hover:text-white
                "

              >

                SUBMIT

              </button>


            </div>



          </form>


        </main>




      </div>


    </div>

  );

}


export default Contact;