import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://bobapp-e93h.onrender.com/NoirX/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const user = await response.json();

      localStorage.setItem("user", JSON.stringify(user));

      navigate(user.role === "ADMIN" ? "/Admin" : "/Home");

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

            <Link to="/SignUp">
              Sign Up
            </Link>
          </nav>

        </header>


        {/* Login Section */}
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
              LOGIN
            </h1>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-bold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
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
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
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
                SIGN IN
              </button>

            </form>


            <div className="
              text-center
              mt-6
              text-sm
            ">

              <Link
                to="/ForgotPassword"
                className="text-yellow-700 hover:underline"
              >
                Forgot Password?
              </Link>


              <p className="mt-4">
                Don't have an account?{" "}

                <Link
                  to="/SignUp"
                  className="
                    font-bold
                    text-yellow-700
                    hover:underline
                  "
                >
                  Create Account
                </Link>
              </p>

            </div>

          </div>

        </main>


      </div>

    </div>
  );
}

export default LogIn;