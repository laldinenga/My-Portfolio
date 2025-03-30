import React, { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";
import { SiTerraform } from "react-icons/si";
import { FaLinux } from "react-icons/fa6";
import { VscTerminalBash } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { SiVmware } from "react-icons/si";
import { SiVirtualbox } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { CgArrowLongRightC } from "react-icons/cg";

function MainPage() {
  
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const h2s = document.querySelectorAll('h2[id]'); // Get all divs with an id
    const buttons = document.querySelectorAll('button'); // Get all buttons
    
    // Intersection Observer to track when a div is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const h2Id  = entry.target.id;

        if (entry.isIntersecting) {
          setActiveSection(h2Id); // Set the active section when it's in view
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0, // Trigger when 50% of the div is visible
    });

    // Observe each h2
    h2s.forEach(h2 => observer.observe(h2));

    // Cleanup the observer when the component is unmounted
    return () =>
      //  observer.disconnect();
    h2s.forEach(h2 =>{
      observer.unobserve(h2);
    });
  }, []);

  return (
    <div className="">
      {/* <div className="bg-fuchsia-900 "> */}
      {/* <ul className="flex justify-center gap-x-6">
          <li className="">Portfolio</li>
          <li>Home</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex justify-start gap-x-6 w-full">
          <li className="ml-6 font-bold">Portfolio</li>
          <div className="flex justify-center ml-auto gap-x-6 mr-50">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
      </div> */}
      <div className="flex flex-col h-screen w-full justify-center items-center bg-black">
        <img
          className="h-24 w-24"
          src="../../Image/myphoto.png"
          alt="tech image"
        ></img>
        <p className=" font-bold text-center text-3xl">
          Experience in IT Support <br />
          And Full Stack Development <br />
          specializing in ReactJS and SpringBoot
        </p>
        <p className="text-xl mt-3 text-gray-500">
          I have a strong foundation in HTML, CSS, JavaScript, Java, Linux and
          AWS
        </p>
        <div className="flex flex-row mt-3 space-x-4">
          <button className="bg-[#14686C] rounded-xl">Contact Me</button>
          <button className="bg-[#14686C] rounded-xl">Download CV</button>
          <button className="bg-[#14686C] rounded-xl">
            <FaLinkedin size={24} />
          </button>
          <button className="bg-[#14686C] rounded-xl">
            <FaGithub size={24} />
          </button>
        </div>
      </div>
      <div className="flex items-center bg-black justify-center sticky top-2 z-10">
        <div className="flex flex-row bg-black justify-center border-1 w-fit h-8 rounded-3xl items-center ">
          <button className={`flex rounded-3xl h-7 items-center hover:bg-neutral-800 active:bg-neutral-700 ${activeSection === 'about' ? 'bg-neutral-800' : ''}`}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
          <button className={`flex items-center rounded-3xl h-7 hover:bg-neutral-800 active:bg-neutral-700 ${activeSection === 'skills' ? 'bg-neutral-800' : ''}`}
          onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
          <button className={`flex items-center rounded-3xl h-7 hover:bg-neutral-800 active:bg-neutral-700 ${activeSection === 'project' ? 'bg-neutral-800' : ''}`}
          onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}>Project</button>
        </div>
      </div>
      <div className=" bg-black">
        <div className="pt-16 font-serif">
          <p>EXPLORE ABOUT ME</p>
        </div>
        <div id="about" className="flex flex-col justify-center items-center">
          {/* vertical line block */}
          <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>

          <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
            <p className="">1</p>
          </div>
          <h2 id="about" className="pt-4 text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit">
            About
          </h2>
          <p className="p-2">
            I'm Lal Din. <br /> I've got a year of experience in IT Support
            where I Troubleshot hardware, software and Network issues. <br />{" "}
            Installation, configuration and maintainence of systems for optimal
            performance are my expertise. <br /> I was the mastermind when it
            comes to troubleshooting.
          </p>
        </div>
        <div id="skills" className="flex flex-col justify-center items-center">
          {/* vertical line */}
          <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>
          <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
            <p className="">2</p>
          </div>
          <h2 id="skills" className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit">
            Experience and Hands on Skills
          </h2>
        </div>
        {/* <p>
          I am well competent with below technologies and ready to kick start a
          career in any of the areas.
        </p> */}
        <div className="p-2">
          <p className="">A year of experience in</p>
          <ul className="flex flex-row justify-center items-center p-2 space-x-5">
            <li>Microsoft 365</li>
            <li>Active Directory</li>
            <li>
              <SiVirtualbox size={30} />
            </li>
            <li>
              <SiVmware size={40} />
            </li>
            <li>
              <BsMicrosoft size={30} />
            </li>
            <li>
              <BiLogoMicrosoftTeams size={30} />
            </li>
            <li>IT Networking</li>
            <li>etc.</li>
          </ul>
        </div>
        <div className="p-2">
          <p>Internship Experience in Software Development with</p>
          <ul className="flex flex-row justify-center items-center p-2 space-x-5">
            <li>
              <FaJava size={30} />
            </li>
            <li>
              <SiSpringboot size={30} />
            </li>
            <li>
              <IoLogoJavascript size={30} />
            </li>
            <li>
              <GrReactjs size={30} />
            </li>
            <li>
              <FaNodeJs size={30} />
            </li>
            <li>
              <SiMysql size={30} />
            </li>
            <li>
              <BiLogoPostgresql size={30} />
            </li>
          </ul>
        </div>
        <div className="p-2">
          <p>Hands on Experience and certifications in</p>
          <ul className="flex flex-row justify-center items-center p-2 space-x-5">
            <li>
              <FaAws size={30} />
            </li>
            <li>
              <FaLinux size={30} />
            </li>
            <li>
              <SiTerraform size={30} />
            </li>
            <li>
              <VscTerminalBash size={30} />
            </li>
            <li>
              <FaPython size={30} />
            </li>
          </ul>
        </div>
        <div className="">
          <div id="project" className="flex flex-col justify-center items-center">
            {/* vertical line */}
            <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>
            <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
              <p className="">3</p>
            </div>
            <h2 id="project"
              className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] 
            bg-clip-text text-transparent w-fit"
            >
              Project
            </h2>
          </div>
          {/* <div class="border-r-4 border-blue-500 h-64"></div> */}
          <div className="relative">
            <div className="absolute w-px h-full left-1/2 bg-gradient-to-b from-[#515554] to-[#505f69]"></div>
            {/* <div className="absolute left-1/2 m-0 p-0 animate-spin animate-spin-and-fall">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 stroke-cyan-500 stroke-1.5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </div> */}
            <div className="blockAppear">
              <div className="grid grid-cols-5 justify-start mt-4 pl-4">
                <div className="text-[11px] p-2 col-span-2 border-neutral-700 rounded-md shadow-xl shadow-slate-700 text-start">
                  <h2 className="font-bold text-cyan-300">
                    My Portfolio
                  </h2>
                  <p className="py-1">ReactJS, TailwindCss</p>
                  <p>
                  A sleek, responsive, and modern portfolio built using ReactJS and Tailwind CSS.
                  Showcasing my skills, projects, and experience, this site offers a seamless user interface
                  with optimized performance. ReactJS powers the dynamic interactions, while Tailwind CSS ensures a customizable and visually appealing design. Explore my work and discover what I can create
                  </p>
                  <p>
                    <a href="https://github.com/laldinenga/My-Portfolio.git">
                      Click to view source code
                    </a>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-5 justify-end">
                <div className="col-start-4 col-end-6 text-[11px] shadow-xl p-2 border-neutral-700 shadow-slate-700 rounded-md">
                  <h2 className="font-bold">LushAITech Website</h2>
                  <p>ReactJS, SCSS, NodeJS, MySQL, AWS RDS</p>
                  <p></p>
                  <p>
                    <a href="https://www.lushaitech.com/">
                      https://www.lushaitech.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center ml-[10%]">
                <div className="text-[11px] p-2 border-[0.5px] border-neutral-700 shadow-xl shadow-slate-700 rounded-md">
                  <p className="font-bold">ApplyKart website</p>
                  <p>
                    A job posting Web Application to connect <br /> job seekers
                    with recruiters
                  </p>
                  <p>Tech stacks used for this project</p>
                  <ul>
                    <li>ReactJS</li>
                    <li>TailwindCSS</li>
                    <li>NodeJS</li>
                    <li>MySql</li>
                    <li>Azure</li>
                  </ul>
                  <p>
                    <a href="https://applykart.co/">https://applykart.co</a>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center mr-[10%]">
                <div className="text-[11px] p-2 border-[0.5px] border-neutral-700 shadow-xl shadow-slate-700 rounded-md">
                  <p className="font-bold text-md">Ecommerse Web Application</p>
                  <p>
                    An ecommerce application, <br />
                    developed to finished university requirements
                  </p>
                  <p>Tech stacks used for this project</p>
                  <ul>
                    <li>Java</li>
                    <li>SpringBoot</li>
                    <li>ReactJS</li>
                    <li>TailwindCSS</li>
                    <li>MySql</li>
                  </ul>
                  <p>
                    <a href="https://github.com/laldinenga/medistore_client_server">
                      Click to view source code
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center ml-[10%]">
                <div className="text-[11px] p-2 border-[0.5px] border-neutral-700 shadow-xl shadow-slate-700 rounded-md">
                  <p className="font-bold">Powershell Scripting</p>
                  <p>Active Directory Project to manage Users, Groups, etc.</p>
                  <p>Technology used for this project</p>
                  <ul>
                    <li>VSCode</li>
                    <li>Powershell</li>
                    <li>VMWare</li>
                    <li>Windows Server</li>
                    <li>Active Directory</li>
                    <li>Git</li>
                  </ul>
                  <p>
                    <a href="https://github.com/laldinenga/Active-Directory">
                      Click to view source code
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
