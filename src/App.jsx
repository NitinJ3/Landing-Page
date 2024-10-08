import { useState, useEffect } from "react";
import "./App.css";
import ImageRotator from "../ImageRotator";

function App() {
	return (
		<>
			<div className="relative page1 bg-[#0a0a0a] h-screen flex flex-col items-center justify-between font-sans overflow-hidden ">
				<div className="absolute top-0 left-100 h-[100%] w-[100%] bg-no-repeat blur-[30px] z-0 ">
					<div className="absolute -top-60 left-[400px] h-0 w-0 border-l-[70px] border-r-[70px] border-b-[1000px] border-l-transparent border-r-transparent border-[#16145c] rotate-[130deg] z-0"></div>
				</div>

				<div className="Header mt-2 border w-[1300px] h-[100px] rounded-xl border-gray-600 flex items-center justify-between px-20">
					<div className="text-white text-3xl font-semibold z-50">CodeCamp</div>
					<div className="text-white">Theme button</div>
				</div>

				<div className="relative mt-16 z-10 text-center mb-16">
					<h1 className="text-3xl text-gray-100 font-semibold pb-2">Welcome To</h1>
					<h1 className="text-8xl font-bold bg-gradient-to-b from-blue-400 to-blue-700 text-transparent bg-clip-text">
						Code Champ
					</h1>
					<p className="text-xl text-center font text-gray-100 max-w-[500px] mx-auto mt-4">
						Supercharge Your Coding Skills & Ace Your Interviews with Code Champ
					</p>
					<div className="mt-14 flex justify-center">
						<button className="mx-4 h-fit py-2 border-2 bg-black border-blue-700 text-white hover:border-black">
							Sign up
						</button>
						<button className="mx-4 h-fit py-2 bg-black border-2 border-blue-700 text-white hover:border-black">
							Sign In
						</button>
						<button className="mx-4 h-dit py-2 bg-black border-2 border-blue-700 text-white hover:border-black">
							Problems
						</button>
					</div>
					<p className="text-gray-100 text-xl font-medium mt-10 whitespace-break-spaces">
						1,000+ Curated DSA Problems | 4 Skill Levels | Compete, Learn & Build Your Profile
					</p>
				</div>

				{/* Floating icons */}
				<div className="absolute top-0 left-0 mx-[300px] mt-[300px] animate-float bg-opacity-90">
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

			{/* PAGE 2: Why you'll love Code-Champ */}
			<div className="relative page2 bg-[#0a0a0a] h-screen flex justify-between font-sans overflow-hidden px-14 justify-around">
				{/* Card 1 */}
				<div
					className="card1 border-2  max-w-[14rem] h-[300px]   p-4 shadow-lg rounded-lg flex flex-col items-center mt-32 "
					style={{ boxShadow: "0 4px 20px rgba(30, 64, 255, 0.8)" }}
				>
					<ImageRotator images={["/connection.png", "/decision-tree.png","/array.png"]} altText="Dynamic Image" />
					<h4 className="font-bold text-center text-yellow-400">Master Problem-Solving</h4>
					<p className="text-center text-white text-sm mt-2">
					Tackle DSA challenges across arrays, trees, graphs, and dynamic programming. Whether you're a beginner or pro, you'll find problems for Basic, Easy, Medium, and Hard levels.
					</p>
				</div>
				{/* Card 2 */}
				<div
					className="card1 border-2  max-w-[14rem] h-[300px]  p-4 shadow-lg rounded-lg flex flex-col items-center mt-32"
					style={{ boxShadow: "0 4px 20px rgba(30, 64, 255, 0.8)" }}
				>
					<ImageRotator images={["/medal.png", "/contestant.png"]} altText="Dynamic Image" />
					<h4 className="font-bold text-center  text-yellow-400">Compete in Contests or Create Your Own</h4>
					<p className="text-center text-white text-sm mt-2">
						Jump into thrilling contests or unleash your creativity by designing your own, challenging friends or the community!
					</p>
				</div>
				{/* Card 3 */}
				<div
					className="card1 border-2 border-white max-w-[14rem] h-[300px]  p-4 shadow-lg rounded-lg flex flex-col items-center mt-32"
					style={{ boxShadow: "0 4px 20px rgba(30, 64, 255, 0.8)" }}
				>
					<ImageRotator images={["/lightbulb.png","/jigsaw.png","/programming.png"]} altText="Dynamic Image" />
					<h4 className=" text-yellow-400 font-bold text-center">Contribute & Build Your Legacy</h4>
					<p className="text-center text-white text-sm mt-2">
					Be a community hero! Submit your own problems or test cases and leave a lasting impact. Your contributions make Code Champ stronger.
					</p>
				</div>
				{/* Card 4 */}
				<div
					className="card1 border-2 border-white max-w-[14rem] h-[300px]  p-4 shadow-lg rounded-lg flex flex-col items-center mt-32"
					style={{ boxShadow: "0 4px 20px rgba(30, 64, 255, 0.8)" }}
				>
					<ImageRotator images={["/learning.png","/blogging.png"]} altText="Dynamic Image" />
					<h4 className=" text-yellow-400 font-bold text-center">Share Your Voice Through Blogs</h4>
					<p className="text-center text-white text-sm mt-2">
					Share insights, tips, and experiences with fellow coders through our blog section. Learn, teach, and grow your knowledge while inspiring others.
					</p>
				</div>

			</div>
		</>
	);
}

export default App;
