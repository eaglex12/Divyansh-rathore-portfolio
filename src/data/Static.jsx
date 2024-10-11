import html from "../assets/langues/HTML.png";
import graphql from "../assets/langues/graphql.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import bootstrap from "../assets/langues/bootstrap.png";
import cp from "../assets/langues/cp.png";
import py from "../assets/langues/py.png";
import mysql from "../assets/langues/mysql.png";
import next from "../assets/langues/next.png";
import nest from "../assets/langues/nest.png";
import aws from "../assets/langues/aws.png";
import postgresql from "../assets/langues/postgresql.png";
import springboot from "../assets/langues/springboot.png";
import p1Img1 from "../assets/p1/1.png";
import p1Img2 from "../assets/p1/2.png";
import p1Img3 from "../assets/p1/3.png";
import p1Img4 from "../assets/p1/4.png";
import p1Img5 from "../assets/p1/5.png";
import p1Img6 from "../assets/p1/6.png";

import p2Img1 from "../assets/p2/1.png";
// import p2Img2 from "../assets/p2/2.png";
// import p2Img3 from "../assets/p2/3.png";

import p3Img1 from "../assets/p3/1.png"; // Only 1 image for p3

import p4Img1 from "../assets/p4/1.png"; // Only 1 image for p4

import p5Img1 from "../assets/p5/1.png";
// import p5Img2 from "../assets/p5/2.png";
// import p5Img3 from "../assets/p5/3.png";
// import p5Img4 from "../assets/p5/4.png";
// import p5Img5 from "../assets/p5/5.png";
// import p5Img6 from "../assets/p5/6.png";
// import p5Img7 from "../assets/p5/7.png";

import p6Img1 from "../assets/p6/1.png"; // Only 1 image for p6
import p6Img2 from "../assets/p6/2.png";
import p6Img3 from "../assets/p6/3.png";
import p6Img4 from "../assets/p6/4.png";
import p6Img5 from "../assets/p6/5.png";
import p6Img6 from "../assets/p6/6.png";
import p6Img7 from "../assets/p6/7.png";

export const works = [
	{
		title: "AIFT - AI Insights on Financial Data",
		images: [p1Img1, p1Img2, p1Img3, p1Img4, p1Img5, p1Img6], // 6 images for AIFT
		tech: [
			"MERN Stack",
			"Gemini AI",
			"AWS S3",
			"AWS EC2",
			"Nginx",
			"socket.io",
			"Real-time Notifications",
		],
		github: "https://github.com/anubhav2102/aift-frontend",
		live: "https://www.ai-ft.in/",
		duration: "600",
		description:
			"Developed a SaaS platform using the MERN stack, integrated with Gemini AI for portfolio analysis, AI-powered calculators, and stock visualization. Enabled real-time notifications and report generation for financial advisory teams.",
	},
	{
		title: "Apple Crafts",
		images: [p2Img1], // Only 1 image for Apple Crafts
		tech: [
			"Node.js",
			"Express.js",
			"React",
			"Redux",
			"MongoDB",
			"OAuth 2.0",
			"JSON Web Token",
			"AWS EC2",
		],
		github: "https://github.com/eaglex12/AppleCraft",
		duration: "400",
		description:
			"Apple Crafts is an e-commerce platform built with a full-stack approach. It allows users to browse and purchase handcrafted products with a secure authentication system and real-time data handling.",
	},
	{
		title: "Algorithm Visualiser",
		images: [p3Img1], // 3 images for Algorithm Visualiser
		tech: ["React", "Node", "React Inbuild Library"],
		github: "https://github.com/eaglex12/MY-ALGO-VIS",
		live: "https://algo-vizzz.netlify.app/",
		duration: "500",
		description:
			"Algorithm Visualiser is a tool for visualizing various algorithms in action. It helps users understand algorithmic concepts through interactive and dynamic visual representations.",
	},
	{
		title: "Blog Website",
		images: [p4Img1], // Only 1 image for Blog Website
		tech: ["React", "Node", "Express", "MongoDB"],
		github: "https://github.com/eaglex12/BLOG-BACKEND",
		duration: "400",
		description:
			"The Blog Website project provides a platform for users to create, manage, and publish blog posts. It features a RESTful API backend for handling data and authentication, coupled with a React frontend.",
	},
	{
		title: "React Js Portfolio",
		images: [p5Img1], // Only 1 image for React Js Portfolio
		tech: ["React", "Tailwind CSS"],
		github: "https://github.com/eaglex12/Divyansh-rathore-portfolio",
		live: "https://eaglex12.github.io/Divyansh-rathore-portfolio/",
		duration: "700",
		description:
			"This portfolio website showcases various projects and skills using React and Tailwind CSS. It is designed to be a dynamic and responsive online resume for presenting professional achievements.",
	},
	{
		title: "Cover Letter Generator",
		images: [p6Img1, p6Img2, p6Img3, p6Img4, p6Img5, p6Img6, p6Img7], // 7 images for Cover Letter Generator
		tech: [
			"React",
			"MUI",
			"Node.js",
			"Express",
			"Google Generative AI",
			"Axios",
		],
		github: "https://github.com/eaglex12/CoverLetterGenerator",
		duration: "600",
		description:
			"The Cover Letter Generator uses advanced AI to create and improve cover letters. It provides an intuitive interface for users to upload their letters and receive enhanced versions tailored to specific job applications.",
	},
];

// Array of experience objects
export const experiences = [
	{
		date: "June 2024 - Current",
		company: "Basys.ai",
		position: "Software Development Engineer",
		description:
			"Developed an enterprise software solution to automate the Prior Authorization System in the US, significantly enhancing healthcare efficiency. Integrated ChatGPT, Claude.AI, and an in-house AI system, automating GPT model switching and reducing testing time by 80%. Implemented machine learning algorithms for optimized decision-making, and FHIR standards for secure, seamless data exchange, improving accuracy and interoperability. Technologies used: NextJS, NestJS, PostgreSQL, FHIR, and Spring Boot.",
	},

	{
		date: "June 2023 - Dec 2023",
		company: "MyOoumph Networks Pvt Ltd",
		position: "Full Stack Developer Internship",
		description:
			"Implemented Django and GraphQL for backend, enabling smooth data handling. Employed ReactJS, Apollo Client, and CSS for engaging user interfaces. Used Postman API for robust backend testing. Proficient in Git and GitHub for collaborative development.",
	},
	{
		date: "May 2023 - June 2023",
		company: "Shaadi.com, India's No.1 Matchmaking and Matrimony Service",
		position: "Bug Bounty Program",
		description:
			"Resolved a critical rendering issue at Shaadi.com, a leading online matchmaking platform renowned for connecting over 50 million lives. Leveraged front-end development expertise to identify and fix the bug through thorough code analysis and testing, significantly enhancing the user experience. Shaadi.com, known for its innovation-led approach, has redefined how Indian brides and grooms meet for marriage, offering trusted community-specific platforms such as TamilShaadi.com, TeluguShaadi.com, and more.",
	},

	// {
	//   date: "January 2020 - Present",
	//   company: "Self employed",
	//   position: "Freelancer",
	//   description:
	//     "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
	// },
];

// Array of langue objects
export const langues = [
	{
		id: 1,
		src: html,
		title: "HTML",
		style: "shadow-orange-500",
	},
	{
		id: 2,
		src: css,
		title: "CSS",
		style: "shadow-blue-500",
	},
	{
		id: 3,
		src: js,
		title: "JavaScript",
		style: "shadow-yellow-500",
	},
	{
		id: 4,
		src: reactLangue,
		title: "React",
		style: "shadow-sky-500",
	},
	{
		id: 5,
		src: github,
		title: "GitHub",
		style: "shadow-gray-400",
	},
	{
		id: 6,
		src: tailwind,
		title: "Tailwind",
		style: "shadow-teal-600",
	},
	{
		id: 7,
		src: graphql,
		title: "GraphQL",
		style: "shadow-rose-500",
	},
	{
		id: 8,
		src: django,
		title: "Django",
		style: "shadow-emerald-700",
	},
	{
		id: 9,
		src: bootstrap,
		title: "Bootstrap",
		style: "shadow-violet-500",
	},
	{
		id: 10,
		src: py,
		title: "Python",
		style: "shadow-yellow-400",
	},
	{
		id: 11,
		src: cp,
		title: "C++",
		style: "shadow-blue-400",
	},
	{
		id: 12,
		src: mysql,
		title: "MySQL",
		style: "shadow-violet-500",
	},
	{
		id: 13,
		src: next,
		title: "Next.js",
		style: "shadow-gray-800",
	},
	{
		id: 14,
		src: nest,
		title: "NestJS",
		style: "shadow-red-600",
	},
	{
		id: 15,
		src: postgresql,
		title: "PostgreSQL",
		style: "shadow-blue-600",
	},
	{
		id: 16,
		src: aws,
		title: "AWS",
		style: "shadow-orange-600",
	},
	{
		id: 17,
		src: springboot,
		title: "Spring Boot",
		style: "shadow-green-600",
	},
];
