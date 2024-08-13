import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<div
			name="home"
			className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-gray-50 text-lg sm:mt-0 mt-16">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
					Divyansh Singh Rathore
				</h1>
				<div>
					<h2 className="text-xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
						<span className="mr-2">I am</span>
						<Typewriter
							options={{
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString("Full Stack Developer")
									.pauseFor(1000)
									.deleteAll()
									.typeString("Coding Enthusiast")
									.start();
							}}
						/>
					</h2>
				</div>
				<p className="text-gray-300 py-4 leading-8">
					As a proficient full-stack developer, I harness a comprehensive skill
					set that encompasses both backend and frontend technologies. Alongside
					my prowess in development, I boast a solid foundation in Data
					Structures and Algorithms, enabling me to engineer robust and
					efficient solutions.
				</p>
				<div>
					<a
						href="#experience"
						className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold
               w-[62%] sm:w-[25%]"
					>
						Explore My Journey
						<span
							className="group-hover:translate-x-1 duration-300"
							style={{ marginLeft: "0.35rem" }}
						>
							<HiArrowNarrowRight />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
