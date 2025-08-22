import React from 'react';


function SignUp(){
    return (
        <>
        
        {/* Header */}
        <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">NOIREX</div>
                  </div>
                  
                  <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
  <div className="relative min-h-[75vh] w-[90vw] max-w-md bg-amber-50 shadow-xl rounded-xl p-8">
    <h2 className="text-3xl font-bold text-center text-black mb-6">Create Account</h2>

    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
      >
        Sign Up
      </button>
    </form>

    <p className="text-sm text-gray-600 text-center mt-4">
      Already have an account? <a href="/Login" className="text-yellow-700 font-semibold hover:underline">Sign in</a>
    </p>
  </div>
</div>



        
        {/* Right Info Panel */}
        <div className="absolute top-24 right-4 text-sm text-right space-y-2 z-20">
        <div className="text-2xl font-semibold">025</div>
          <div className="text-2xl font-semibold">NYC EDITION</div>
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
};

  

  export default SignUp;
