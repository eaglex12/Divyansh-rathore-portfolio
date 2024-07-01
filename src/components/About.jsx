import React, { useEffect } from "react";
import pic from "../assets/pic1.JPG";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  // const handleDownload = () => {
  //   saveAs(file, "resume.pdf");
  // };

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "50rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Hello , it's a pleasure to meet you all.
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
            I am a final-year Computer Science and Engineering student at Rajiv Gandhi Institute of Petroleum Technology, an Institute of National Importance on par with IITs. My expertise lies in C++, with a strong foundation in data structures and algorithms. In the realm of web development, I've mastered both frontend and backend stacks, leveraging React and Node.js. I've also immersed myself in competitive programming on platforms like CodeChef and Codeforces, enhancing my problem-solving skills and algorithmic thinking.
            </p>
            {/* Download resume button */}
            <div className="mt-4">
              <button
                
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
              
                   onClick={() => window.open("https://drive.google.com/file/d/1aqCdw3Z6T3z58b1VWMwL36KMXgN1b8WW/view")}>

                  
                <span className="group-hover:translate-y-1 duration-300">
                  Download 
                  {/* <BsDownload className="ml-4" /> */}
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