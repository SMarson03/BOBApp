import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://bobapp-e93h.onrender.com/NoirX/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password
          })
        }
      );

      if (!response.ok) {
        throw new Error("Signup failed. Email may already exist.");
      }

      const user = await response.json();

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/Home");

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="bg-yellow-600 flex justify-center p-3 sm:p-6 min-h-screen">

      <div className="
        relative
        w-full
        max-w-7xl
        bg-amber-50
        overflow-hidden
        shadow-xl
      ">

        {/* Header */}
        <header className="
          flex
          justify-between
          items-start
          gap-4
          p-4
          sm:p-5
        ">

          <div className="text-xl font-bold">
            NOIREX
          </div>

          <nav className="
            flex
            gap-5
            text-sm
            whitespace-nowrap
          ">
            <Link to="/Home">
              Home
            </Link>

            <Link to="/Login">
              Login
            </Link>
          </nav>

        </header>


        {/* Signup Form */}
        <main className="
          flex
          justify-center
          pt-4
          pb-8
          sm:pt-8
        ">

          <div className="
            w-full
            max-w-md
            border-4
            border-black
            p-5
            sm:p-8
            bg-amber-50
          ">

            <h1 className="
              text-3xl
              sm:text-4xl
              font-bold
              text-center
              mb-6
            ">
              CREATE ACCOUNT
            </h1>


            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <div>
                <label className="block text-sm font-bold mb-2">
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
                    w-full
                    p-3
                    border-2
                    border-black
                    bg-white
                  "
                />
              </div>


              <div>
                <label className="block text-sm font-bold mb-2">
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
                    w-full
                    p-3
                    border-2
                    border-black
                    bg-white
                  "
                />
              </div>


              <div>
                <label className="block text-sm font-bold mb-2">
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
                    w-full
                    p-3
                    border-2
                    border-black
                    bg-white
                  "
                />
              </div>


              <div>
                <label className="block text-sm font-bold mb-2">
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
                    w-full
                    p-3
                    border-2
                    border-black
                    bg-white
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
                  h-10
                  border-2
                  border-black
                  bg-black
                  text-white
                  font-bold
                  hover:bg-yellow-600
                  hover:text-black
                  transition
                "
              >
                SIGN UP
              </button>

            </form>


            <p className="
              text-sm
              text-center
              mt-6
            ">
              Already have an account?{" "}

              <Link
                to="/Login"
                className="
                  text-yellow-700
                  font-bold
                  hover:underline
                "
              >
                Sign In
              </Link>

            </p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default SignUp;