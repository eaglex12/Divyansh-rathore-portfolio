import html from "../assets/langues/HTML.png";
import graphql from "../assets/langues/graphql.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import bootstrap from "../assets/langues/bootstrap.png";
import cp from "../assets/langues/cp.png";
import py from "../assets/langues/py.png";
import mysql from "../assets/langues/mysql.png";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"



// Array of work objects
export const works = [
  {
    title: "Blog Website",
    imgUrl: p1,
    tech: ["React", "Node", "Express","Mongo DB"],
    workUrl:
      "https://github.com/eaglex12/BLOG-BACKEND",
    duration: "400",
  },

  {
    title: "Algorithm Visualiser",
    imgUrl: p2,
    tech: ["React", "Node", "React Inbuid library"],
    workUrl:"https://github.com/eaglex12/MY-ALGO-VIS"   ,
     duration: "500",
  },
  {
    title: "Django Ecomm site",
    imgUrl: p3,
    tech: ["Django", "CSS", "Javascript", "RazorPay API"],
    workUrl: "https://github.com/eaglex12/DJANGO-ECOMM",
    duration: "600",
  },
  {
    title: "React Js Portfolio",
    imgUrl:p4,
        tech: ["React", "tailwind CSS"],
    workUrl:"https://github.com/eaglex12/Divyansh-rathore-portfolio",
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "June 2023 - Ongoing",
    company: "MyOoumph Networks Pvt Ltd",
    position: "Full Stack Development",
    description:
      "Implemented Django and GraphQL for backend, enabling smooth data handling. Employed ReactJS, Apollo Client, and CSS for engaging user interfaces. Used Postman API for robust backend testing. Proficient in Git and GitHub for collaborative development.",
  },
  {
    date: "May 2023- June 2023",
    company: "Shaadi.com",
    position: "Bug Bounty program",
    description:
      "Resolved a rendering issue at Shaadi.com by leveraging front-end development expertise to identify and fix the bug through thorough code analysis and testing, enhancing the user experience.",
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
    title: "Graphql",
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
    title: "My SQL",
    style: "shadow-violet-500",
  },
  
];
