import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

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
import Signup from "./components/pages/Signup";
import Submit from "./components/pages/Submit";

// Info
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

//Admin
import Admin from "./components/pages/Admin";

function App() {

  return (

    <Routes>

      {/* User */}
      <Route 
        path="/SignUp" 
        element={<Signup />} 
      />

      <Route 
        path="/LogIn" 
        element={<LogIn />} 
      />


      {/* Main */}
      <Route 
        path="/Home" 
        element={<Home />} 
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
      <Route path="/Admin" element={<Admin/>}/>


    </Routes>

  );

}


export default App;