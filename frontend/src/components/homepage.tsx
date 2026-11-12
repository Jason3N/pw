import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectcard";
import TechnologyItem from "./technologycard";
import Navbar from "./navbar";
import ExperienceTimeline from "./timeline";

import {
  SiDatabricks,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFastapi,
  SiSpringboot,
  SiPostgresql,
  SiDart,
  SiFlutter,
  SiVercel,
  SiAnaconda,
  SiInsomnia,
  SiPostman,
} from "react-icons/si";
import {
  FaJava,
  FaGithub,
  FaDocker,
  FaJira,
  FaAws,
  FaRegSnowflake,
} from "react-icons/fa";
import { FaGolang, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { MdMail } from "react-icons/md";

function HomePage(): JSX.Element {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const languagesAndFrameworks = [
    { name: "Java", icon: <FaJava /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "SQL", icon: <TbFileTypeSql /> },
    { name: "Golang", icon: <FaGolang /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Visual Studio Code", icon: <DiVisualstudio /> },
    { name: "Anaconda", icon: <SiAnaconda /> },
    { name: "Insomnia", icon: <SiInsomnia /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Jira", icon: <FaJira /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <VscAzureDevops /> },
    { name: "Snowflake", icon: <FaRegSnowflake /> },
    { name: "Databricks", icon: <SiDatabricks /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-24 lg:flex-row lg:gap-24 lg:px-16">
          <div className="font-poppins text-center text-white lg:text-left">
            <p style={{ color: "#ADBACA" }} className="font-medium text-4xl">
              Hello! My name is
            </p>
            <p className="font-bold mt-3 text-6xl">Jason Nguyen</p>
            <button
              className="bg-white font-bold text-black text-xl mt-5 rounded-lg border-2 pl-5 pr-5 pt-2 pb-2"
              onClick={() => scrollToSection("about-me")}
            >
              Find out more about me!
            </button>
          </div>
          <div className="border-4 border-white bg-white rounded-lg shadow-md">
             <img src="saltbread.png" width="500" height="500" alt="Jason Nguyen"
             />
             <p className = "px-10 text-center">
              me eating saltbread
             </p>
          </div>
        </div>
      </motion.div>
      {/* About Me Section */}
      <div id="about-me">
        <div className="min-h-screen pt-16" ref={ref3}>
          <div
            className="font-semibold ml-14 mt-10 text-6xl text-left text-white"
            style={{
              transform: isInView3 ? "translateY(0)" : "translateY(20px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            About Me
            <div
              className="font-medium mt-10 w-full text-lg"
              style={{ color: "#ADBACA" }}
            >
              <div className="flex">
                <p className="w-3/5 mb-5 text-left text-3xl [word-spacing:0.5rem]">
                  <span className="text-7xl"> Helloooo! </span> I am currently a Software Engineer working at Capital One working on the EMP Pipelines team!  
                  I graduated UC Davis in 2025 where I studied Computer Science and did tons of work with my student-ran club called Codelab! (love you guys)
                </p>
                <img src="codelab.png" width="500" height="500" className="ml-12 border-4 border-white bg-white rounded-lg shadow-md"/>
             </div>
              <p className="w-3/5 ml-auto mr-12 text-right mt-36 text-3xl [word-spacing:0.5rem]">
                I have extensive experience with creating applications and
                products! Over the course of 4 years at my internships, clubs,
                classes, and hackathons, I have created multiple products that
                range from full-stack, ML models, and mobile applications.
              </p>
              <p className="w-3/5 mt-36 text-left text-3xl [word-spacing:0.5rem]">
                Outside of school and work, I love to play video games, finance, cooking, and staying fit! 
                You'll find me playing tennis, cooking at a barbecue, or in the pool swimming some laps!
              </p>
            </div>
            <div className="mt-10 flex flex-col">
              <p className="text-xl mb-4">
                Here are some of the technologies I work with!
              </p>
              <div className="justify-items-center grid grid-cols-8 gap-y-5 gap-x-6 mt-5">
                {languagesAndFrameworks.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <TechnologyItem icon={tech.icon} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="min-h-screen pt-16" ref={ref1}>
        <div
          className="font-poppins font-bold ml-14 mt-10 text-6xl text-left text-white"
          style={{
            transform: isInView1 ? "translateY(0)" : "translateY(20px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          Projects
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <ProjectCard
            title="Volt"
            description="Created a web dashboard to showcase users' costs over time, featuring summarized costs, trends, charts, and links to detailed analyses"
            mediumArticle="https://codelabdavis.medium.com/volt-1dffc4ef911a"
            imgSrc="../projects/volt_web.jpg"
          />
          <ProjectCard
            title="Playground"
            description="Engineered  a full-stack web application that allows users to find out information for their careplace."
            githubLink="https://github.com/Codelab-Davis/Playground"
            mediumArticle="https://codelabdavis.medium.com/playground-762b36da1806"
            imgSrc="../projects/playground.png"

          />
          <ProjectCard
            title="PassPal"
            description="Mentored a full-stack mobile application that allows users to create, update, and delete their own passwords."
            githubLink="https://github.com/Codelab-Davis/password-manager"
            mediumArticle="https://codelabdavis.medium.com/passpal-9e46496ce71e"
            imgSrc="../projects/passpal_web.jpg"
          />
          <ProjectCard
            title="Davis Dining Commons"
            description="Built for HackDavis 2022, Davis Dining Commons is a full-stack web application that allows users to view the menu for the dining commons at UC Davis."
            githubLink="https://github.com/HansonKLau/DDC"
          />
          <ProjectCard
            title="AggieReview"
            description="Built a web platform for students to leave constructive, unbiased reviews of professors and courses."
            githubLink="https://github.com/Codelab-Davis/Professor-Rating-Platform"
            mediumArticle="https://codelabdavis.medium.com/aggiereview-54fe34440bbe"
            imgSrc="../projects/aggiereview.png"
          />
          <ProjectCard
            title="Boxdup"
            description="Work in Progress! Check back soon!"
            githubLink="https://github.com/Jason3N/boxdup"
          />
          <ProjectCard
            title="JasonLB"
            description="Work in Progress! Check back soon!"
            githubLink="https://github.com/Jason3N/jasonLB"
          />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        ref={ref2}
        className="ml-14 mt-48 text-left text-white"
        style={{
          transform: isInView2 ? "translateY(0)" : "translateY(20px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <p id="experience" className="font-bold text-6xl">
          Experience
        </p>
        <ExperienceTimeline />
      </div>

      {/* Contact Section */}
      <div
        ref={ref4}
        className="ml-14 mt-20 text-left text-white"
        style={{
          transform: isInView4 ? "translateY(0)" : "translateY(20px)",
          opacity: isInView4 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <p id="contact" className="font-bold text-6xl mb-10">
          Contact Me!
        </p>
        <p className="max-w-4xl text-3xl mb-10">
          If you have opportunities or are interested in collaboration, please
          email me. You can also connect on social media for questions or just
          to say hi! My inbox is always open, and I'll try to get back as soon
          as possible.
        </p>
        <div className="flex flex-row mb-10">
          <a href="https://www.linkedin.com/in/iasonnguyen/">
            <FaLinkedin className="text-6xl mr-20" />
          </a>
          <a href = "https://mail.google.com/mail/?view=cm&fs=1&to=jasonnguyenphhs@gmail.com" target="_blank">
            <MdMail className="text-6xl mr-20" />
          </a>
          <a href="https://github.com/Jason3N">
            <FaGithub className="text-6xl mr-20" />
          </a>
          <a href="https://discordapp.com/users/_iason">
            <FaDiscord className="text-6xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
