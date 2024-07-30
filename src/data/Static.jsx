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

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";

// Array of work objects
export const works = [
	{
		title: "Apple Crafts",
		imgUrl: p1,
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
		workUrl: "https://github.com/eaglex12/AppleCraft",
		duration: "400",
	},

	{
		title: "Algorithm Visualiser",
		imgUrl: p2,
		tech: ["React", "Node", "React Inbuild Library"],
		workUrl: "https://github.com/eaglex12/MY-ALGO-VIS",
		duration: "500",
	},
	{
		title: "Blog Website",
		imgUrl: p3,
		tech: ["React", "Node", "Express", "Mongo DB"],
		workUrl: "https://github.com/eaglex12/BLOG-BACKEND",
		duration: "400",
	},
	{
		title: "React Js Portfolio",
		imgUrl: p4,
		tech: ["React", "tailwind CSS"],
		workUrl: "https://github.com/eaglex12/Divyansh-rathore-portfolio",
		duration: "700",
	},
	{
		title: "Cover Letter Generator",
		imgUrl: p5, // Replace with the appropriate image variable or URL
		 "tech": [
    "React",
    "MUI",
    "Node.js",
    "Express",
    "Google Generative AI",
    "Axios"
  ],
		workUrl: "https://github.com/eaglex12/CoverLetterGenerator", // Replace with the actual URL
		duration: "600", // Adjust as needed
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
