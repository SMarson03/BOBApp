import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Signup() {


  const navigate = useNavigate();



  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    confirmPassword: ""

  });

  const [error, setError] = useState("");


  function handleChange(e){

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  }


  async function handleSubmit(e){

    e.preventDefault();

    setError("");


    if(formData.password !== formData.confirmPassword){

      setError("Passwords do not match");

      return;

    }


    try{


      const response = await fetch(

        "http://localhost:8080/NoirX/signup",

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json"

          },

          body:JSON.stringify({

            name: formData.name,

            email: formData.email,

            password: formData.password

          })

        }

      );


      if(!response.ok){

        throw new Error(
          "Signup failed. Email may already exist."
        );

      }


      const user = await response.json();


      localStorage.setItem(

        "user",

        JSON.stringify(user)

      );

      navigate("/Home");

    }


    catch(error){

      setError(error.message);

    }


  }


  return (

    <>


      {/* Header */}

      <div className="
      relative 
      z-20 
      p-6 
      flex 
      justify-between 
      items-start
      ">

        <div className="text-lg font-bold">

          NOIREX

        </div>


      </div>


      <div className="
      min-h-screen 
      bg-yellow-600 
      flex 
      items-center 
      justify-center 
      p-4
      ">



        <div className="
        relative
        min-h-[75vh]
        w-[90vw]
        max-w-md
        bg-amber-50
        shadow-xl
        rounded-xl
        p-8
        ">


          <h2 className="
          text-3xl 
          font-bold 
          text-center 
          text-black 
          mb-6
          ">

            Create Account

          </h2>


          <form

            onSubmit={handleSubmit}

            className="space-y-4"

          >


            {/* Name */}

            <div>

              <label className="
              block 
              text-sm 
              font-medium 
              text-gray-700
              ">

                Full Name

              </label>


              <input

                name="name"

                type="text"

                value={formData.name}

                onChange={handleChange}

                placeholder="Jane Doe"

                required

                className="
                mt-1 
                block 
                w-full 
                px-4 
                py-2 
                bg-white 
                border 
                rounded-md
                "

              />

            </div>

            {/* Email */}

            <div>

              <label className="
              block 
              text-sm 
              font-medium 
              text-gray-700
              ">

                Email

              </label>


              <input

                name="email"

                type="email"

                value={formData.email}

                onChange={handleChange}

                placeholder="you@example.com"

                required

                className="
                mt-1 
                block 
                w-full 
                px-4 
                py-2 
                bg-white 
                border 
                rounded-md
                "

              />

            </div>

            {/* Password */}

            <div>

              <label className="
              block 
              text-sm 
              font-medium 
              text-gray-700
              ">

                Password

              </label>


              <input

                name="password"

                type="password"

                value={formData.password}

                onChange={handleChange}

                placeholder="••••••••"

                required

                className="
                mt-1 
                block 
                w-full 
                px-4 
                py-2 
                bg-white 
                border 
                rounded-md
                "

              />


            </div>

            {/* Confirm Password */}

            <div>

              <label className="
              block 
              text-sm 
              font-medium 
              text-gray-700
              ">

                Confirm Password

              </label>


              <input

                name="confirmPassword"

                type="password"

                value={formData.confirmPassword}

                onChange={handleChange}

                placeholder="••••••••"

                required

                className="
                mt-1 
                block 
                w-full 
                px-4 
                py-2 
                bg-white 
                border 
                rounded-md
                "

              />

            </div>


            {error && (

              <p className="
              text-red-600 
              font-bold 
              text-sm
              ">

                {error}

              </p>

            )}


            <button

              type="submit"

              className="
              w-full 
              bg-yellow-600 
              hover:bg-yellow-700 
              text-white 
              font-bold 
              py-2 
              rounded-md 
              transition
              "

            >

              Sign Up

            </button>


          </form>



          <p className="
          text-sm 
          text-gray-600 
          text-center 
          mt-4
          ">


            Already have an account?


            <Link

              to="/Login"

              className="
              text-yellow-700 
              font-semibold 
              hover:underline 
              ml-1
              "

            >

              Sign in

            </Link>


          </p>


        </div>


      </div>



      {/* Right Panel */}


      <div className="
      absolute 
      top-24 
      right-4 
      text-sm 
      text-right 
      space-y-2 
      z-20
      ">


        <div className="
        text-2xl 
        font-semibold
        ">

          025

        </div>



        <div className="
        text-2xl 
        font-semibold
        ">

          NYC EDITION

        </div>



        <div>

          <div>Brooklyn</div>

          <div>Bronx</div>

          <div>Manhattan</div>

          <div>Queens</div>

          <div>Staten Island</div>

        </div>

      </div>

    </>

  );
}


export default Signup;