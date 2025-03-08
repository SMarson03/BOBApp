import React from 'react';
import backgroundImage from '../Images/Bronze.jpg';
import Navbar from '../Navbar';


function About() {
    return(
    <>
        <div
          className="bg-cover bg-center h-screen overflow-auto"
          style={{backgroundImage: `url(${backgroundImage})`}}>
          <Navbar/>
          <div className="header"><h1 className='ml-6 mt-4 text-white text-center bold font-bold text-9xl'>NoireX</h1></div>
          <div className="subheader"><h2 className='ml-6 text-orange-600 text-center bold font-bold text-2xl'>A Black Owned Directory</h2></div>
          
          <div className='flex items-center justify-center'>
          <div className= "about text-white">
          <div className="mt-20 mb-20 w-[700px] h-[800px] bg-black bg-opacity-80 border border-2 border-black flex p-5 justify-center flex-col">

           <p class="indent-8 mb-4">Welcome to NoireX! We’re a community-driven platform dedicated to supporting and showcasing Black-owned businesses. 
           Our mission is rooted in the belief that when we uplift each other, we all rise. We’re here to make it easier for you 
           to discover and support incredible  entrepreneurs, while fostering economic equity and growth.</p>
           
           <p class="indent-8 mb-4">Understanding the lack of resources in finding a black doctor, lawyer, financial advisor, etc. in one space has allowed 
           for expansion into more than just where to eat for dinner. We want to see Black-owned businesses thrive, not just in one 
           neighborhood, but across cities, states, and beyond. That’s why we’re passionate about expanding our platform to more 
           cities in the future, connecting even more people that are making an impact in their communities.</p>
           
           <p class="indent-8 mb-4">We believe in the power of collaboration and community. By choosing to support one business, service, product, you’re 
           helping create a more equitable economy, where everyone has the chance to succeed and grow. Thank you for being a part of 
           this movement—we’re so excited to grow with you.</p>
           </div></div>
           </div>
          </div>
        </>
    )
}

export default About;