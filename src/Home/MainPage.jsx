import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { expIcons } from "./Icons";
import { InternIcons } from "./Icons";
import { handsOnIcons } from "./Icons";


function MainPage() {
  const [activeSection, setActiveSection] = useState("");
  // const [activeEmail, setActiveEmail] = useState(false);

  useEffect(() => {
    const h2s = document.querySelectorAll("h2[id]"); // Get all divs with an id
    const buttons = document.querySelectorAll("button"); // Get all buttons

    // Intersection Observer to track when a div is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const h2Id = entry.target.id;

          if (entry.isIntersecting) {
            setActiveSection(h2Id); // Set the active section when it's in view
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0, // Trigger when 50% of the div is visible
      }
    );

    // Observe each h2
    h2s.forEach((h2) => observer.observe(h2));

    // Cleanup the observer when the component is unmounted
    return () =>
      //  observer.disconnect();
      h2s.forEach((h2) => {
        observer.unobserve(h2);
      });
  }, []);

  const contact = () => {
    alert("Phone: 0426479355 \nEmail: laldinenga11@gmail.com");
  };

  const { icon: reactIcon } = InternIcons.find(
    ({ label }) => label === "React"
  );
  const { icon: tailwindIcon } = InternIcons.find(
    ({ label }) => label === "TailwindCSS"
  );

  return (
    <div className="bg-black">
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <img
          className="h-24 w-24"
          src="../../Image/myphoto.png"
          alt="tech image"
        ></img>
        <p className=" font-bold text-center text-xl md:text-3xl">
          Experience in IT Support <br />
          And Full Stack Development <br />
          specializing in ReactJS and SpringBoot
        </p>
        <p className="text-xl mt-3 text-gray-500">
          I have a strong foundation in HTML, CSS, JavaScript, Java, Linux and
          AWS
        </p>
        <div className="flex flex-row mt-3 space-x-2 md:space-x-4">
          <button
            type="button"
            onClick={contact}
            // onClick={() => {
            //   setActiveEmail(true);
            // }}
            className="bg-[#14686C] rounded-xl border-2 p-2"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-[#14686C] rounded-xl border-2 p-2"
          >
            Download CV
          </button>
          <a
            href="https://www.linkedin.com/in/lal-din-enga-499097a8/"
            className="bg-[#14686C] px-3.5 py-[6.4px] rounded-xl border-2 flex items-center justify-center"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/laldinenga"
            className="bg-[#14686C] px-3.5 py-[6.4px] rounded-xl flex items-center border-2 justify-center"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="flex items-center bg-black justify-center sticky top-2 z-10">
        <div className="flex flex-row justify-center border-2 h-8 w-fit rounded-3xl items-center ">
          <button
            className={`flex rounded-3xl p-2 h-7 items-center hover:bg-neutral-600 active:bg-neutral-500 ${
              activeSection === "about" ? "bg-neutral-600" : ""
            }`}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className={`flex items-center rounded-3xl p-2 h-7 hover:bg-neutral-800 active:bg-neutral-700 ${
              activeSection === "skills" ? "bg-neutral-600" : ""
            }`}
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </button>
          <button
            className={`flex items-center rounded-3xl p-2 h-7 hover:bg-neutral-800 active:bg-neutral-700 ${
              activeSection === "project" ? "bg-neutral-600" : ""
            }`}
            onClick={() =>
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Project
          </button>
        </div>
      </div>
      <div className="">
        <div className="pt-16 font-serif">
          <p>EXPLORE ABOUT ME</p>
        </div>
        <div id="about" className="flex flex-col justify-center items-center">
          {/* vertical line block */}
          <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>

          <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
            <p className="">1</p>
          </div>
          <h2
            id="about"
            className="pt-4 text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit"
          >
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
          <h2
            id="skills"
            className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] bg-clip-text text-transparent w-fit"
          >
            Experience and Hands on Skills
          </h2>
        </div>
        {/* <p>
          I am well competent with below technologies and ready to kick start a
          career in any of the areas.
        </p> */}
        <div className="p-2">
          <p className="">A year of experience in</p>
          <div className="flex flex-row justify-center items-center p-2 space-x-5">
            {expIcons.map(({ icon, label }) => (
              <div key={label}>{icon}</div>
            ))}
          </div>
        </div>
        <div className="p-2">
          <p>Internship Experience in Software Development with</p>
          <div className="flex flex-row justify-center items-center p-2 space-x-5">
            {InternIcons.map(({ icon, label }) => (
              <div key={label}>{icon}</div>
            ))}
          </div>
        </div>
        <div className="p-2">
          <p>Hands on Experience and certifications in</p>
          <div className="flex flex-row justify-center items-center p-2 space-x-5">
            {handsOnIcons.map(({ icon, label }) => (
              <div key={label}>{icon}</div>
            ))}
          </div>
        </div>
        <div className="">
          <div
            id="project"
            className="flex flex-col justify-center items-center"
          >
            {/* vertical line */}
            <div class="w-px h-32 bg-gradient-to-b from-black to-[#198072]"></div>
            <div className="w-6 bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] rounded-full">
              <p className="">3</p>
            </div>
            <h2
              id="project"
              className="text-3xl font-bold bg-gradient-to-r from-[#2dd4bf] to-[#1f2937] 
            bg-clip-text text-transparent w-fit"
            >
              Project
            </h2>
          </div>
          {/* <div className="border-r-4 border-blue-500 h-64"></div> */}
          <div className="flex flex-col lg:hidden">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#322c64] to-[#680568] rounded-2xl border-8 border-black">
                <div className="flex flex-row gap-x-2 justify-center items-baseline">
                  <p className="text-2xl font-semibold">01.</p>
                  <p className="text-2xl font-semibold text-[#279da3]">
                    MY PORTFOLIO
                  </p>
                </div>
                <p className="p-2 text-[12px] md:text-xl text-center">
                  A sleek, responsive, and modern portfolio built using ReactJS
                  and Tailwind CSS, showcasing my skills, projects, and
                  experience.
                </p>
                <a
                  className="text-[12px] md:text-xl font-semibold text-[#53e1e9] mt-2"
                  href=""
                >
                  Source Code Available Here
                </a>
                <div className="text-[12px] text-left md:text-xl p-2">
                  <p>ReactJS</p>
                  <p className="text-[#53e1e9]">To Create Webpage</p>
                  <p>TailwindCSS</p>
                  <p className="text-[#53e1e9]">For Styling</p>
                  <p>AWS Amplify</p>
                  <p className="text-[#53e1e9]">For Hosting</p>
                  <p>AWS Route53</p>
                  <p className="text-[#53e1e9]">For Custom Domain</p>
                  <p>AWS Certificate Manager</p>
                  <p className="text-[#53e1e9]">
                    To Produce SSL/TLS Certificate
                  </p>
                </div>
              </div>
              <div className="absolute top-[43%] left-[32%] md:left-[43%]">
                <div>
                  <div className="ledlight z-10 absolute w-[258px] h-[123px] md:h-[185px] md:w-[387px] -skew-x-12"></div>
                  <img
                    className="-skew-x-12 shadow-lg rounded-md w-64 md:w-96 relative z-20"
                    src="./Image/project1.png"
                    alt="portfolio image"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#100e20] to-[#303192] rounded-2xl border-8 border-black">
                <div className="flex flex-row gap-x-2 justify-center items-baseline">
                  <p className="text-2xl font-semibold">02.</p>
                  <p className="text-2xl font-semibold text-[#279da3]">
                    LushAITech
                  </p>
                </div>
                <p className="p-2 text-[10px] md:text-xl text-center">
                  A modern website, designed and developed with ReactJS and
                  NodeJS to empower individuals and organizations with
                  cutting-edge AI, Data Engineering, and Cloud Technologies.
                </p>
                <a
                  className="text-[10px] md:text-xl font-semibold text-[#53e1e9] mt-2"
                  href="https://www.lushaitech.com/"
                >
                  Click to Open Website
                </a>
                <div className="text-[10px] md:text-xl text-left p-2">
                  <p>ReactJS</p>
                  <p className="text-[#53e1e9]">To Create Webpage</p>
                  <p>NodeJS</p>
                  <p className="text-[#53e1e9]">To Create BackEnd</p>
                  <p>SCSS</p>
                  <p className="text-[#53e1e9]">For Styling</p>
                  <p>AWS RDS/MySQL</p>
                  <p className="text-[#53e1e9]">For Database</p>
                  <p>AWS Route53</p>
                  <p className="text-[#53e1e9]">For Custom Domain</p>
                  <p>AWS Certificate Manager</p>
                  <p className="text-[#53e1e9]">
                    To Produce SSL/TLS Certificate
                  </p>
                </div>
              </div>
              <div className="absolute top-[43%] left-[32%] md:left-[43%] rounded-3xl">
                <div className="">
                  <div className="ledlight z-10 absolute w-[258px] h-[148px] md:h-[221px] md:w-[387px] -skew-x-12"></div>
                  <img
                    className="-skew-x-12 shadow-lg rounded-md w-64 md:w-96 relative z-20"
                    src="./Image/2a.png"
                    alt="portfolio image"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-full h-1 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#f75757] to-[#0094f7] opacity-50 animate-light-sweep"></div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#74a56a] to-[#184e77] rounded-2xl border-8 border-black">
                <div className="flex flex-row gap-x-2 justify-center items-baseline">
                  <p className="text-2xl font-semibold">03.</p>
                  <p className="text-2xl font-semibold text-[#279da3]">
                    ApplyKart
                  </p>
                </div>
                <p className="p-2 text-[10px] md:text-xl text-center">
                  A cutting-edge web app built with ReactJS and NodeJS powered
                  with AI, crafted to bridge the gap between talent and
                  opportunity by connecting job seekers with recruiters in
                  real-time.
                </p>
                <a
                  className="text-[10px] md:text-xl font-semibold text-[#53e1e9] mt-2"
                  href="https://applykart.co/"
                >
                  Click to Open Website
                </a>
                <div className="text-[10px] md:text-xl text-left p-2">
                  <p>ReactJS</p>
                  <p className="text-[#53e1e9]">To Create Webpage</p>
                  <p>NodeJS</p>
                  <p className="text-[#53e1e9]">To Create BackEnd</p>
                  <p>TailwindCSS</p>
                  <p className="text-[#53e1e9]">For Styling</p>
                  <p>Azure Database/MySQL</p>
                  <p className="text-[#53e1e9]">For Database</p>
                  <p>OpenAI API</p>
                  <p className="text-[#53e1e9]">Text Auto Generation</p>
                </div>
              </div>
              <div className="absolute top-[43%] left-[32%] md:left-[43%] rounded-3xl">
                <div className="">
                  <div className="ledlight z-10 absolute w-[258px] h-[140px] md:h-[210px] md:w-[387px] -skew-x-12"></div>
                  <img
                    className="-skew-x-12 shadow-lg rounded-md w-64 md:w-96 relative z-20"
                    src="./Image/3a.png"
                    alt="portfolio image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            {/* <div className="absolute w-px h-full left-1/2 bg-gradient-to-b from-[#515554] to-[#505f69]"></div> */}
            {/* blockAppear */}
            <div className="">
              <div className="grid grid-cols-7 p-2 shadow-2xl">
                <div className="col-start-1 col-end-4 pl-2 text-start pr-1">
                  <p className="text-5xl md:text-9xl font-semibold">01.</p>
                  <div className="flex items-center">
                    <div className="w-15 md:w-40 border-t-4 border-blue-500 mx-2"></div>
                    <div className="flex-grow border-t-2 border-gray-300"></div>
                  </div>
                  <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9]">
                    MY PORTFOLIO
                  </p>
                  <p className="text-left text-[8px] md:text-xl">
                    A sleek, responsive, and modern portfolio built using
                    ReactJS and Tailwind CSS, showcasing my skills, projects,
                    and experience.
                  </p>
                  <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9] mt-2">
                    Tech Stack Used for this Project
                  </p>
                  <div className="pl-2 text-[13px]">
                    <p>ReactJS</p>
                    <p className="text-[#53e1e9]">To Create Webpage</p>
                    <p>TailwindCSS</p>
                    <p className="text-[#53e1e9]">For Styling</p>
                    <p>AWS Amplify</p>
                    <p className="text-[#53e1e9]">For Hosting</p>
                    <p>AWS Route53</p>
                    <p className="text-[#53e1e9]">For Custom Domain</p>
                    <p>AWS Certificate Manager</p>
                    <p className="text-[#53e1e9]">
                      To Produce SSL/TLS Certificate For My Domain
                    </p>
                  </div>

                  <p className="text-[8px] md:text-lg text-blue-600">
                    <a href="https://github.com/laldinenga/My-Portfolio/">
                      Click to see Source Code
                    </a>
                  </p>
                </div>
                {/* w-[658px] h-[315px] */}
                <div className="col-start-4 col-span-4 gap-x-2 content-center">
                  <div className="relative">
                    <div className="absolute ledlight -skew-x-12 min-h-full w-full max-w-[652px] top-1"></div>
                    <img
                      className=" -skew-x-12 rounded-lg w-[650px] z-10"
                      src="./Image/project1.png"
                      alt="portfolio image"
                    />
                  </div>
                </div>

                {/* <div className="col-start-4 col-end-8"></div> */}

                {/* <div className="items-center pl-2 bg-gradient-to-b from-[#3d49f1] to-[#d1e4ff] w-full h-full border-8 border-zinc-800 rounded-4xl overflow-hidden">
                    <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9]">
                      Tech Stack Used for this Project
                    </p>
                    <div className="flex items-center">
                      <div className="flex-grow border-t-2 border-gray-300"></div>
                    </div>
                    {/* <div className="md:pl-2 text-[6px] md:text-[13px]">
                      <p>ReactJS</p>
                      <p className="text-[#53e1e9]">To Create Webpage</p>
                      <p>TailwindCSS</p>
                      <p className="text-[#53e1e9]">For Styling</p>
                      <p>AWS Amplify</p>
                      <p className="text-[#53e1e9]">For Hosting</p>
                      <p>AWS Route53</p>
                      <p className="text-[#53e1e9]">For Custom Domain</p>
                      <p>AWS Certificate Manager</p>
                      <p className="text-[#53e1e9]">
                        To Produce SSL/TLS Certificate For My Domain
                      </p>
                    </div> */}
                {/* <div className="flex justify-center">
                      <img
                        className="w-150 h-75 mt-10 shadow-2xl"
                        src="./Image/project1.png"
                        alt="lushaiweb"
                      />
                    </div>
                  </div> */}
                {/* </div> */}
              </div>

              <div className=" grid grid-cols-7 p-2 mt-3 shadow-2xl">
                <div className="col-span-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute ledlight -skew-y-6 -skew-x-6 min-h-full w-full max-w-[610px] top-1 left-1"></div>
                    <img
                      className="-skew-y-6 -skew-x-6 w-[600px] rounded-lg"
                      src="./Image/2a.png"
                      alt="lushaiweb"
                    />
                  </div>
                </div>
                <div className="col-span-3 text-right pr-2">
                  <p className="font-semibold text-2xl md:text-9xl ">02.</p>
                  <div className="flex items-center">
                    <div className="flex-grow border-t-2 border-gray-300"></div>
                    <div className="w-44 border-t-4 border-blue-500 mx-2"></div>
                  </div>
                  <p className="font-semibold text-[#53e1e9] text-[10px] md:text-xl">
                    LushAITech Website
                  </p>
                  <div className="text-[8px] md:text-lg">
                    I was a fullstack developer.
                    <br />
                    My task was to develop admin user interface for updating the
                    content of the website and reduce the intervention of web
                    developers.
                  </div>
                  <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9]">
                    Tech Stack Used for this Project
                  </p>

                  <div className="text-[6px] md:text-[13px]">
                    <p>ReactJS</p>
                    <p className="text-[#53e1e9]">To Create Webpage</p>
                    <p>SCSS</p>
                    <p className="text-[#53e1e9]">For Styling</p>
                    <p>NodeJS</p>
                    <p className="text-[#53e1e9]">For Backend Development</p>
                    <p>AWS RDS/MySQL</p>
                    <p className="text-[#53e1e9]">For Storing Data</p>
                  </div>
                  <p className="text-[8px] md:text-lg text-blue-600">
                    <a href="https://www.lushaitech.com/">
                      https://www.lushaitech.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-7 p-2 shadow-2xl">
                <div className="col-start-1 col-end-4 pl-2 text-start pr-1">
                  <p className="text-5xl md:text-9xl font-semibold">03.</p>
                  <div className="flex items-center">
                    <div className="w-15 md:w-40 border-t-4 border-blue-500 mx-2"></div>
                    <div className="flex-grow border-t-2 border-gray-300"></div>
                  </div>
                  <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9]">
                    ApplyKart Web App
                  </p>
                  <p className="text-left text-[8px] md:text-xl">
                    A cutting-edge web app built with ReactJS and NodeJS powered
                    with AI, crafted to bridge the gap between talent and
                    opportunity by connecting job seekers with recruiters in
                    real-time.
                  </p>
                  <p className="text-[10px] md:text-xl font-semibold text-[#53e1e9] mt-2">
                    Tech Stack Used for this Project
                  </p>
                  <div className="md:pl-2 text-[6px] md:text-[13px]">
                    <p>ReactJS</p>
                    <p className="text-[#53e1e9]">To Create Webpage</p>
                    <p>NodeJS</p>
                    <p className="text-[#53e1e9]">To Create Backend</p>
                    <p>TailwindCSS</p>
                    <p className="text-[#53e1e9]">For Styling</p>
                    <p>Azure Database/MySQL</p>
                    <p className="text-[#53e1e9]">For Database</p>
                    <p>OpenAI API</p>
                    <p className="text-[#53e1e9]">Text Auto Generation</p>
                  </div>
                  <p className="text-[8px] md:text-lg text-blue-600">
                    <a href="https://applykart.co/">https://applykart.co</a>
                  </p>
                </div>
                <div className="col-start-4 col-span-4 gap-x-2 content-center">
                  <div className="relative">
                    <div className="absolute -skew-x-12 min-h-full w-full max-w-[605px] ledlight top-2"></div>
                    <img
                      className="-skew-x-12 rounded-lg w-[600px] z-10"
                      src="./Image/3a.png"
                      alt="portfolio image"
                    />
                  </div>
                </div>
              </div>
              <div className=" md:grid grid-cols-5 place-items-start">
                <div className="col-start-4 col-end-6 text-[11px] shadow-xl p-2 border-neutral-700 shadow-slate-700 rounded-md ">
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
              <div className="md:grid grid-cols-5">
                <div className="text-[11px] p-2 col-span-2 border-neutral-700 rounded-md shadow-xl shadow-slate-700 text-start">
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
