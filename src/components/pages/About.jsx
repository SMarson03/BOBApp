import React from 'react';
import { Link } from 'react-router-dom';


function About() {
    return(
    <>
        
        <div className="min-h-screen bg-yellow-600 flex items-center justify-center p-4">
           <div className="relative min-h-screen w-[90vw] max-w-5xl bg-amber-50 shadow-red-50 overflow-hidden">
            <div className= "absolute inset-0 overflow-y-auto max-h-[80vh]">
              <div className="relative z-20 p-6 flex justify-between items-start">
          <div className="text-lg font-bold">NOIREX</div>
          <div className="flex gap-6 text-sm">
            <Link to="/Home">Home</Link>
            <Link to="/Eats">Eats</Link>
            <Link to="/Drinks">Drinks</Link>
            <Link to="/Arts">Art</Link>
            <Link to="/Law">Law</Link>
            <Link to="/Therapy">Therapy</Link>
            <Link to="/About">About Us</Link>
          </div>
          </div>
           <div className="absolute inset-0 ">
          <div className="absolute top-1/2 bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-black 
          leading-none tracking-tight">
             <div>Welcome to NoireX! We’re a community-driven platform dedicated to supporting and showcasing Black-owned businesses.</div>
           <div>Our mission is rooted in the belief that when we uplift each other, we all rise.</div>
       
           <div>We believe in the power of collaboration and community. By choosing to support one business, service, product, you’re 
           helping create a more equitable economy, where everyone has the chance to succeed and grow.</div>
           <div>Thank you for being a part of this movement we’re so excited to grow with you.</div>
           </div>
           </div>
            </div>
            </div>
        </div>
          

        </>
    )
}

export default About;