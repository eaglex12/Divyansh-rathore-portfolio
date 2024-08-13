import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { works } from "../data/Static";
import ProjectModal from "./ProjectModal";

const Work = () => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			name="work"
			className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
				<div>
					<h1 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#00FFCA]">
						Recent Works
					</h1>
					<p className="text-lg sm:text-xl py-6">
						During my experience as a self-taught developer, I have created many
						projects and shared them on LinkedIn and GitHub. I am always on the
						lookout for new and challenging projects to work on.
					</p>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
					{works.map((work) => (
						<div
							key={work.title}
							className="bg-slate-200 rounded-lg overflow-hidden cursor-pointer"
							onClick={() => openModal(work)}
							data-aos="fade-up"
							data-aos-duration={work.duration}
							data-aos-easing="linear"
						>
							<img
								src={work.imgUrl}
								alt="work"
								className="w-full h-32 sm:h-36 md:h-48 object-cover"
							/>
							<div className="w-full p-5 text-black">
								<h3 className="text-md sm:text-lg md:text-xl mb-2 md:mb-3 font-semibold">
									{work.title}
								</h3>
								<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs sm:text-sm">
									{work.tech.map((item) => (
										<span
											key={item}
											className="inline-block px-2 py-1 bg-slate-300 rounded-md"
										>
											{item}
										</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<ProjectModal
				isOpen={isModalOpen}
				onClose={closeModal}
				project={selectedProject}
			/>
		</div>
	);
};

export default Work;
