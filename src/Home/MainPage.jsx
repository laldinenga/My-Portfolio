import React from "react";
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

function MainPage() {
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
          src="../../public/Image/myphoto.png"
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
      <div className="flex items-center justify-center bg-black">
        <div className="flex flex-row bg-black justify-center border-1 w-fit rounded-3xl items-center">
          <button className=" rounded-3xl hover:bg-neutral-800">About</button>
          <button className="rounded-3xl hover:bg-neutral-800">Project</button>
          <button className="rounded-3xl hover:bg-neutral-800">
            Education
          </button>
        </div>
      </div>
      <div className=" bg-black">
        <div className="pt-16 font-serif">
          <p>EXPLORE ABOUT ME</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* vertical line block */}
          <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>

          <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
            <p className="">1</p>
          </div>
          <h2 className="pt-4 text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit">
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
        <div className="flex flex-col justify-center items-center">
          {/* vertical line */}
          <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>
          <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
            <p className="">2</p>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit">Experience and Hands on Skills</h2>
          

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
              <li><SiVirtualbox size={30}/></li>
              <li><SiVmware size={30}/></li>
              <li><BsMicrosoft size={30}/></li>
              <li><BiLogoMicrosoftTeams size={30}/></li>
              <li>IT Networking</li>
              <li>etc.</li>
            </ul>
        </div>
        <div className="p-2">
          <p>Internship Experience in Software Development with</p>
          <ul className="flex flex-row justify-center items-center p-2 space-x-5">
              <li><FaJava size={30}/></li>
              <li><SiSpringboot size={30}/></li>
              <li><IoLogoJavascript size={30}/></li>
              <li><GrReactjs size={30}/></li>
              <li><FaNodeJs size={30}/></li>
              <li><SiMysql size={30}/></li>
              <li><BiLogoPostgresql size={30}/></li>
            </ul>
        </div>
        <div className="p-2">
          <p>Hands on Experience and certifications in</p>
          <ul className="flex flex-row justify-center items-center p-2 space-x-5">
              <li><FaAws size={30}/></li>
              <li><FaLinux size={30}/></li>
              <li><SiTerraform size={30}/></li>
              <li><VscTerminalBash size={30}/></li>
              <li><FaPython size={30}/></li>
            </ul>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            {/* vertical line */}
            <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>
            <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
              <p className="">3</p>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] 
            bg-clip-text text-transparent w-fit">Project</h2>
          </div>
          {/* <div class="border-r-4 border-blue-500 h-64"></div> */}

          <div className="grid grid-cols-2 bg-black">
            <div className="p-2 border-r-1 border-blue-500 h-64">
              <img
                className="w-lg h-64"
                src="../../public/Image/1.jpg"
                alt="tech image"
              ></img>
              <p className="font-bold text-2xl">
                The website you are watching right now
              </p>
              <p>Tech stacks used for this project</p>
              <ul>
                <li>ReactJS</li>
                <li>TailwindCss</li>
              </ul>
              <p>
                <a href="">Click to view source code</a>
              </p>
            </div>
            <div className="p-2">
              <img
                className="w-lg h-64"
                src="../../public/Image/2.jpg"
                alt="tech img"
              />
              <p className="font-bold text-2xl">LushAITech Website</p>
              <p>
                This is the most recent project i was involved after graduation.
              </p>
              <p>Tech stacks used for this project</p>
              <ul>
                <li>ReactJS</li>
                <li>SASS</li>
                <li>NodeJS</li>
                <li>MySql</li>
                <li>AWS RDS</li>
              </ul>
              <p>
                <a href="https://www.lushaitech.com/">
                  https://www.lushaitech.com
                </a>
              </p>
            </div>
            <div className="p-2">
              <img
                className="w-lg h-64"
                src="../../public/Image/2.jpg"
                alt="tech img"
              />
              <p className="font-bold text-2xl">ApplyKart website</p>
              <p>
                A job posting Web Application to connect job seekers with
                recruiters
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
            <div className="p-2">
              <img
                className="w-lg h-64"
                src="../../public/Image/2.jpg"
                alt="tech img"
              />
              <p className="font-bold text-2xl">Ecommerse Web Application</p>
              <p>
                An ecommerce application, developed to finished university
                requirements{" "}
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
