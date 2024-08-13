import React, { useEffect } from "react";
import pic from "../assets/pic1.JPG";
import { BsDownload } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			name="about"
			className="w-full min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C] flex items-center"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center">
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
					{/* About heading */}
					<div className="text-center sm:text-right pb-8 sm:pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
							About
						</p>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
					{/* Profile picture */}
					<div
						className="flex justify-center items-center"
						data-aos="fade-right"
						data-aos-duration="800"
						data-aos-easing="linear"
					>
						<img
							src={pic}
							alt="mahdi laith"
							className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2
               w-[20rem] h-[13rem] sm:w-[28rem] sm:h-[18rem]"
						/>
					</div>
					{/* About content */}
					<div className="flex flex-col justify-center text-center sm:text-left">
						{/* Introduction */}
						<p className="text-xl font-bold pb-2 text-[#00FFCA]">
							Hello, it's a pleasure to meet you all.
						</p>
						{/* Description */}
						<p className="text-sm leading-7 text-justify">
							I am a passionate Software Development Engineer with a robust
							foundation in computer science and engineering, currently working
							at basys.ai. My experience spans developing innovative software
							solutions, including integrating advanced AI systems and
							automating processes to enhance efficiency. With hands-on
							experience in full-stack development, I have successfully
							contributed to projects that improve user experiences and
							streamline complex workflows. I am driven by a strong commitment
							to solving challenging problems and am eager to bring my technical
							expertise and enthusiasm for innovation to new and exciting
							projects.
						</p>
						{/* Download resume button */}
						<div className="mt-4 flex justify-center sm:justify-start">
							<button
								className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
								onClick={() =>
									window.open(
										"https://drive.google.com/file/d/1aqCdw3Z6T3z58b1VWMwL36KMXgN1b8WW/view"
									)
								}
							>
								<span className="flex items-center justify-center group-hover:translate-y-1 duration-300">
									Check out my resume
									<BsDownload className="ml-4" />
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
