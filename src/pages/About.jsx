import React from "react";
import Navbar from "../components/Navbar";
import Mnav from "../components/Mnav";
import Mobile from "../admin/components/Mobile";
import { useState } from "react";
import Aut from "../components/Aut";

const About = () => {
    const[mshow,setmshow]=useState(false)
    const[show,setshow]=useState(false)
  return (
    <div className="relative w-screen h-full bg-white min-h-screen py-16 px-6">
    <div className='absolute top-0 right-2'>
        <Navbar mshow={mshow} setmshow={setmshow} show={show} setshow={setshow}/>
      </div>
      {mshow &&
            <div className='absolute z-10 lg:hidden top-17 right-6 md:right-21'>
              <Mnav/>
            </div>}
             {show && 
      <div className='absolute top-12 right-20 md:right-30'>
        <Aut/>
      </div>}
            
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Welcome to <span className="text-blue-500 font-semibold">Prescripto HMS</span>, 
          your trusted healthcare management system.  
          Our mission is to make hospital and patient management simple, 
          secure, and efficient.  
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm">
              To bridge the gap between patients and doctors with technology-driven solutions.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm">
              To become the most reliable and user-friendly healthcare management platform worldwide.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Our Values</h2>
            <p className="text-gray-600 text-sm">
              Transparency, Innovation, and Patient Care are at the heart of what we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;