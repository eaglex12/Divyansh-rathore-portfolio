"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { works } from "../data/Static";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Work() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	const openModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
		setCurrentImageIndex(0);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	const nextImage = (e) => {
		e.stopPropagation();
		if (selectedProject) {
			setCurrentImageIndex(
				(prevIndex) => (prevIndex + 1) % selectedProject.images.length
			);
		}
	};

	const prevImage = (e) => {
		e.stopPropagation();
		if (selectedProject) {
			setCurrentImageIndex(
				(prevIndex) =>
					(prevIndex - 1 + selectedProject.images.length) %
					selectedProject.images.length
			);
		}
	};

	const goToImage = (index) => {
		setCurrentImageIndex(index);
	};

	return (
		<div
			name="work"
			className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32"
		>
			<div className="max-w-7xl mx-auto p-4">
				<div className="text-white mb-12">
					<h1 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#00FFCA]">
						Recent Works
					</h1>
					<p className="text-lg sm:text-xl py-6">
						During my experience as a self-taught developer, I have created many
						projects and shared them on LinkedIn and GitHub. I am always on the
						lookout for new and challenging projects to work on.
					</p>
				</div>
				<div className="space-y-20">
					{works.map((work, index) => (
						<div
							key={work.title}
							className={`flex flex-col lg:flex-row items-center gap-8 ${
								index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
							}`}
							data-aos="fade-up"
							data-aos-duration={work.duration}
							data-aos-easing="linear"
						>
							<div
								className="w-full lg:w-1/2 relative cursor-pointer"
								onClick={() => openModal(work)}
							>
								<div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
									<img
										src={work.images[0]}
										alt={work.title}
										className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
									/>
								</div>
							</div>
							<div className="w-full lg:w-1/2">
								<div className="p-6 rounded-xl bg-[#2E0F59] shadow-[inset_-8px_-8px_16px_#1D0A3B,_inset_8px_8px_16px_#3F1477]">
									<h3 className="text-2xl font-bold text-white mb-4">
										{work.title}
									</h3>
									<p className="text-gray-300 mb-4">{work.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{work.tech.map((item) => (
											<span
												key={item}
												className="px-3 py-1 bg-[#00FFCA] text-[#21073C] rounded-full text-sm font-semibold"
											>
												{item}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										<a
											href={work.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-[#00FFCA] hover:underline"
										>
											<FaGithub size={20} />
											<span>GitHub</span>
										</a>
										{work.live && (
											<a
												href={work.live}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center space-x-2 text-[#00FFCA] hover:underline"
											>
												<ExternalLink size={20} />
												<span>Live Demo</span>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Custom Modal */}
			{isModalOpen && selectedProject && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
					onClick={closeModal}
				>
					<div
						className="relative w-full md:w-4/5 h-full md:h-auto flex items-center justify-center"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
						>
							<X size={24} />
						</button>
						<div className="relative w-full h-full">
							<img
								src={selectedProject.images[currentImageIndex]}
								alt={selectedProject.title}
								className="w-full h-full object-contain"
							/>
							<button
								onClick={prevImage}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
							>
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={nextImage}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
							>
								<ChevronRight size={24} />
							</button>
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
								{selectedProject.images.map((_, index) => (
									<button
										key={index}
										onClick={() => goToImage(index)}
										className={`w-3 h-3 rounded-full ${
											index === currentImageIndex ? "bg-white" : "bg-gray-500"
										}`}
										aria-label={`Go to image ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
