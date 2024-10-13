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
			className="w-full min-h-screen bg-gradient-to-l from-[#000000] to-[#633d3d] text-gray-300 dark:bg-[#21073C] flex items-center"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
					<div
						className="flex flex-col space-y-6"
						data-aos="fade-left"
						data-aos-duration="800"
						data-aos-easing="ease-in-out"
					>
						<div className="bg-[#000000] rounded-2xl p-6 shadow-[inset_-8px_-8px_16px_#1D0A3B,_inset_8px_8px_16px_#412565]">
							<h3 className="text-2xl font-bold text-[#00FFCA] mb-4">
								Hello, it's a pleasure to meet you all.
							</h3>
							<p className="text-base leading-relaxed text-gray-300">
								I am a passionate Software Development Engineer with a robust
								foundation in computer science and engineering, currently
								working at basys.ai. My experience spans developing innovative
								software solutions, including integrating advanced AI systems
								and automating processes to enhance efficiency.
							</p>
							<p className="text-base leading-relaxed text-gray-300 mt-4">
								With hands-on experience in full-stack development, I have
								successfully contributed to projects that improve user
								experiences and streamline complex workflows. I am driven by a
								strong commitment to solving challenging problems and am eager
								to bring my technical expertise and enthusiasm for innovation to
								new and exciting projects.
							</p>
						</div>

						<div className="flex justify-around">
							<button
								className="bg-[#FFFFF1] text-[#3A1078] px-8 py-3 rounded-full font-bold text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FFFFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FFCA] shadow-lg"
								onClick={() =>
									window.open(
										"https://drive.google.com/file/d/1aqCdw3Z6T3z58b1VWMwL36KMXgN1b8WW/view"
									)
								}
							>
								<span className="flex items-center justify-center">
									Check out my resume
									<BsDownload className="ml-2" />
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
