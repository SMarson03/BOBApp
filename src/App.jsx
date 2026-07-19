import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Core Pages
import Home from "./components/pages/Home";
import Restaurants from "./components/pages/Restaurants";
import Drinks from "./components/pages/Drinks";
import Galleries from "./components/pages/Galleries";

// Services
import Law from "./components/pages/Law";
import Therapy from "./components/pages/Therapy";

// User
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Submit from "./components/pages/Submit";

// Info
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

//Admin
import Admin from "./components/pages/Admin";
import AuthGuard from "./components/auth/AuthGuard";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {

  return (

    <Routes>


      {/* Main */}
<Route
  path="/"
  element={<Navigate to="/Home" replace />}
/>

      <Route 
        path="/Home" 
        element={<Home />} 
      />

      {/* User */}
      <Route 
        path="/SignUp" 
        element={<SignUp />} 
      />

      <Route 
        path="/LogIn" 
        element={<LogIn />} 
      />


      {/* Eats */}
      <Route 
        path="/Eats" 
        element={<Restaurants />} 
      />
     


      {/* Drinks */}
      <Route 
        path="/Drinks" 
        element={<Drinks />} 
      />


      {/* Arts */}
      <Route 
        path="/Arts" 
        element={<Galleries />} 
      />


      {/* Services */}
      <Route 
        path="/Law" 
        element={<Law />} 
      />

      <Route 
        path="/Therapy" 
        element={<Therapy />} 
      />


      {/* Info */}
      <Route 
        path="/About" 
        element={<About />} 
      />

      <Route 
        path="/Contact" 
        element={<Contact />} 
      />

      <Route path="/Submit" 
      element={<Submit/>}/>

          {/* Admin */}
     <Route

path="/Admin"

element={

<ProtectedRoute adminOnly={true}>

<Admin/>

</ProtectedRoute>

}

/>

      {/* <Route
path="/Admin"
element={
<AuthGuard adminOnly={true}>
    <Admin/>
</AuthGuard>
}
/> */}


    </Routes>

  );

}


export default App;