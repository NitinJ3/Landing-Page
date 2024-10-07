import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<>
			<div className="relative page1 bg-[#0a0a0a] h-screen flex flex-col items-center justify-between font-sans overflow-hidden">
				<div className="absolute top-0 left-100 h-[100%] w-[100%] bg-no-repeat blur-[30px] z-0">
					<div className="absolute -top-60 left-[400px] h-0 w-0 border-l-[70px] border-r-[70px] border-b-[1000px] border-l-transparent border-r-transparent border-[#16145c] rotate-[130deg]"></div>
				</div>

				<div className="Header mt-2 border w-[1300px] h-[100px] rounded-xl border-gray-600 flex items-center justify-between px-20">
					<div className="text-white text-3xl font-semibold z-[1000px]">CodeCamp</div>
					<div>Theme button</div>
				</div>

				<div className="relative mt-16 z-10 text-center">
					<h1 className="text-3xl text-gray-100 font-semibold pb-2">Welcome To</h1>
					<h1 className="text-8xl font-bold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text">
						Code Champ
					</h1>
					<p className="text-xl text-center font text-gray-100 max-w-[500px] mx-auto mt-4">
						Supercharge Your Coding Skills & Ace Your Interviews with Code Champ
					</p>
					<div className="mt-14 flex justify-center">
						<button className="mx-4 h-fit py-2 border-2 border-blue-700 text-white hover:border-black">
							Sign up
						</button>
						<button className="mx-4 h-fit py-2 border-2 border-blue-700 text-white hover:border-black">
							Sign In
						</button>
						<button className="mx-4 h-dit py-2 border-2 border-blue-700 text-white hover:border-black">
							Problems
						</button>
					</div>
					<p className="text-gray-100 text-xl font-medium mt-10 whitespace-break-spaces">
						1,000+ Curated DSA Problems | 4 Skill Levels | Compete, Learn & Build Your Profile
					</p>
				</div>

				<div></div>
				<div></div>

				<div className="absolute top-0 left-0 mx-[300px] mt-[300px]  animate-float bg-opacity-90">
					<img src="c-.png" alt="Icon 1" className="w-12" />
				</div>
				<div className="absolute top-0 right-0 m-[140px] mx-[400px] animate-float">
					<img src="java.png" alt="Icon 2" className="w-12" />
				</div>
				<div className="absolute bottom-0 left-0 mx-[240px] mb-[100px] animate-float">
					<img src="python.png" alt="Icon 3" className="w-12" />
				</div>
				<div className="absolute bottom-0 right-0 mx-[220px] mb-[160px] animate-float">
					<img src="html-5.png" alt="Icon 4" className="w-12" />
				</div>
			</div>
		</>
	);
}

export default App;
