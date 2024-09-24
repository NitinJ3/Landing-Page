import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='page1 h-screen bg-blue-950 text-white '>
        <div className='flex justify-center items-center h-1/2'>
          <div className='headline text-center max-w-4xl mt-28 '>
            <h1 className='font-bold text-5xl mb-2'>
              Supercharge Your Coding Skills & Ace Your Interviews with Code Champ
            </h1>
            <p className='text-lg text-red-300'>
              Solve handpicked DSA challenges, compete with top talent, and track your coding evolution.
            </p>
        </div>
        </div>
        <div className='cta flex justify-center items-center mt-8'>
          <button className='bg-teal-500 h-14 w-40 mx-10 hover:bg-teal-300'>Get Started</button>
          <button className='bg-cyan-600 h-14 w-40 mx-10 hover:bg-cyan-400'>Sign In</button>
        </div>
        <p className='text-center text-fuchsia-400 mt-4'>1,000+ Curated DSA Problems | 4 Skill Levels | Compete, Learn & Build Your Profile.</p>
      </div>
    </>
  );
}
export default App;