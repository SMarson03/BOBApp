import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoirArt from './components/pages/NoirArt';
import NoirDrinks from './components/pages/NoirDrinks';
import NoirEats from './components/pages/NoirEats';
import NoirLaw from './components/pages/NoirLaw';
import NoirTherapy from './components/pages/NoirTherapy';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Juicebars from './components/pages/Juicebars';
import Bars from './components/pages/Bars';
import Cafes from './components/pages/Cafes';
import Home from './components/pages/Home';



function App() {
     return(
     <>
       
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Arts' element={<NoirArt/>}/>
          <Route path='/Drinks' element={<NoirDrinks/>}/>
          <Route path='/Bars' element={<Bars/>}/>
          <Route path='/Cafes' element={<Cafes/>}/>
          <Route path='/Juicebars' element={<Juicebars/>}/>
          <Route path='/Eats' element={<NoirEats/>}/>
          <Route path='/Law' element={<NoirLaw/>}/>
          <Route path='/Therapy' element={<NoirTherapy/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          </Routes> 
    </>
     );
}

export default App
