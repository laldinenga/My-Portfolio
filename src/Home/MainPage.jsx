import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
          <button className="bg-blue-700">Contact Me</button>
          <button className="">Download CV</button>
          <button className=""><FaLinkedin size={24}/></button>
          <button><FaGithub size={24}/></button>
        </div>
      </div>
      <div className="button-group flex border-2 border-gray-500">
        <button
          className="flex-1 border-gray-500 hover:bg-gray-100 focus:outline-none"
          id="contact-button"
          onclick="setActive('contact')"
        >
          Contact Me
        </button>
        <button
          className="flex-1 border-gray-500 hover:bg-gray-100 focus:outline-none"
          id="download-button"
          onclick="setActive('download')"
        >
          Download CV
        </button>
        <button
          className="flex-1 hover:bg-gray-100 focus:outline-none"
          id="linkedin-button"
          onclick="setActive('linkedin')"
        >
          LinkedIn
        </button>
      </div>
      <div className="mt-2 text-left bg-gray-500">
        <h2 className="bg-amber-700 rounded-2xl p-2 w-33">About My Skills</h2>
        <p>
          I am well competent with below technologies and ready to kick start a
          career in any of the areas.
        </p>
        <ol className="list-decimal ml-4">
          <li>Software Development</li>
          <ul className="list-disc ml-8">
            <li>Java</li>
            <li>SpringBoot</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>SQL</li>
          </ul>
          <li>Cloud Administration</li>
          <ul className="list-disc ml-8">
            <li>AWS</li>
            <li>Linux OS</li>
            <li>Scripting with Bash and Python</li>
            <li>AWS Cloudformation</li>
          </ul>
          <li>IT Support</li>
          <ul className="list-disc ml-8">
            <li>VMWare</li>
            <li>VM VirtualBox</li>
            <li>Microsoft 365</li>
            <li>Active Directory</li>
            <li>IT Networking</li>
            <li>etc.</li>
          </ul>
        </ol>
        <div className="">
          <h1>Project</h1>
          <div className="grid grid-cols-2 bg-blue-950">
            <div className="p-2">
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
                <li>SCSS</li>
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
