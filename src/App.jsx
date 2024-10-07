import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="relative page1 bg-black h-screen flex flex-col items-center justify-center font-sans overflow-hidden">
        
      <div className="absolute top-0 h-[100%] w-[100%] bg-[url('https://media.istockphoto.com/id/1093225048/photo/star-light.jpg?s=612x612&w=0&k=20&c=s9TvgBrgq2xde3wqTSTduqq4_rmS_huIGBnn2X7iizU=')]  bg-[length:100%] bg-no-repeat  blur-[200px] z-0"></div>


        <div className="relative z-10 text-center">  
          <h1 className='text-3xl text-gray-300 font-bold'>Welcome To</h1>
          <h1 className='text-8xl text-blue-500 font-bold'>
            Code Champ
          </h1>
          <p className='text-2xl text-center text-gray-300 max-w-2xl mx-auto mt-4'>
            Supercharge Your Coding Skills & Ace Your Interviews with Code Champ
          </p>
          <div className='mt-14 flex justify-center'>
            <button className='mx-4 h-14 bg-orange-700 hover:bg-orange-800 text-white hover:border-black'>
              Get Started
            </button>
            <button className='mx-4 h-14 w-32 bg-teal-700 hover:bg-teal-800 text-white hover:border-black'>
              Sign In
            </button>
          </div>
          <p className='text-gray-300 mt-3'>1,000+ Curated DSA Problems | 4 Skill Levels | Compete, Learn & Build Your Profile</p>
                
        </div>

       
        <div className="absolute top-0 left-0  mx-64 mt-14 animate-float">
          <img
            src="c-.png" 
            alt="Icon 1"
            className="w-12 h-10"
          />
        </div>
        <div className="absolute top-0 right-0 m-28 mx-44 animate-float">
          <img
            src="java.png" 
            alt="Icon 2"
            className="w-12 h-10"
          />
        </div>
        <div className="absolute bottom-0 left-0 mx-44 mb-12 animate-float">
          <img
            src="python.png" 
            alt="Icon 3"
            className="w-12 h-10"
          />
        </div>
        <div className="absolute bottom-0 right-0 mx-56 mb-9 animate-float">
          <img
            src="html-5.png" 
            alt="Icon 4"
            className="w-12 h-10"
          />
        </div>
      </div>
    </>
  );
}

export default App;
