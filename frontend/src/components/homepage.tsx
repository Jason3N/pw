import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectcard";
import TechnologyItem from "./technologycard";
import Navbar from "./navbar.tsx";
import ExperienceTimeline from "./timeline.tsx";

function HomePage() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const [language, isLanguageInView] = useState(false);
  const [tools, isToolsInView] = useState(false);

  const scrollToSection = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
          element.scrollIntoView({ behavior: "smooth" });
      }
  };


  const languagesAndFrameworks = [
    { name: "Java", image: "../public/java.svg" },
    { name: "Python", image: "../public/python.svg" },
    { name: "C/C++", image: "../public/cplusplus.svg" },
    { name: "JavaScript", image: "../public/javascript.svg" },
    { name: "TypeScript", image: "../public/typescript.svg" },
    { name: "HTML", image: "../public/html.svg" },
    { name: "CSS", image: "../public/css.svg" },
    { name: "SQL", image: "../public/sql.svg" },
    { name: "Golang", image: "../public/golang.svg" },
    { name: "React", image: "../public/technologies/react.svg" },
    { name: "Next", image: "../public/nextjs.svg" },
    { name: "Node", image: "../public/nodejs.svg" },
    { name: "MongoDB", image: "../public/mongodb.svg" },
    { name: "Django", image: "../public/django.svg" },
    { name: "FastAPI", image: "../public/fastapi.svg" },
    { name: "Spring Boot", image: "../public/springboot.svg" },
    { name: "PostgreSQL", image: "../public/postgresql.svg" },
    { name: "AWS DynamoDB", image: "../public/aws-dynamodb.svg" },
    { name: "DB-Visualizer", image: "../public/db-visualizer.svg" },
    { name: "MySQL", image: "../public/mysql.svg" },
    { name: "Dart", image: "../public/dart.svg" },
    { name: "Flutter", image: "../public/flutter.svg" },
  ];

  const developerTools = [
    { name: "GitHub", image: "../public/github.svg" },
    { name: "Visual Studio Code", image: "../public/vscode.svg" },
    { name: "Android Studio", image: "../public/android-studio.svg" },
    { name: "Anaconda", image: "../public/anaconda.svg" },
    { name: "Jupyter Notebooks", image: "../public/jupyter.svg" },
    { name: "Insomnia", image: "../public/insomnia.svg" },
    { name: "Postman", image: "../public/postman.svg" },
    { name: "Docker", image: "../public/docker.svg" },
    { name: "Jira", image: "../public/jira.svg" },
    { name: "AWS", image: "../public/aws.svg" },
    { name: "Azure", image: "../public/azure.svg" },
    { name: "Snowflake", image: "../public/snowflake.svg" },
    { name: "Databricks", image: "../public/databricks.svg" },
    { name: "Vercel", image: "../public/vercel.svg" },
  ];

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: "10%", opacity: 1 }}
        transition={{ delay : 1.5 , duration: 2 }}
      >
        <div className="font-poppins text-white h-auto pt-96 mb-96 text-left">
          <p style={{ color: "#ADBACA" }} className="font-medium text-4xl">
            Hello! My name is
          </p>
          <p className="font-bold mt-3 text-6xl">Jason Nguyen</p>
          <p style={{ color: "#ADBACA" }} className="mt-3 text-xs">
          </p>
          <button className = "bg-white text-bold text-black text-xl mt-5 rounded-lg border-2 p-2"
                  onClick={()=> scrollToSection('about-me')}>
            Find out more about me!
          </button>
        </div>
      </motion.div>
      
        {/* About Me Section */}
      <div id = "about-me">
      <div className="min-h-screen pt-16" ref={ref3}>
          <div
            className="font-semibold ml-14 mt-10 text-6xl text-left text-white"
            style={{
              transform: isInView3 ? "translateY(0)" : "translateY(20px)",
              opacity: isInView3 ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
          About Me!
          <div className="font-medium mt-10 w-full text-lg"
                style = {{ color: "#ADBACA"}}>
            <p className = "mb-5">
              Hi! I am currently a 4th year CS student at UC Davis!
              I just finished up my work as a Software Engineer Intern at AT&T where I worked at 
              the AT&T Headquarters in Dallas, Texas.
            </p>
            <p className ="mb-5">
              I have extensive experience with creating applications and products! 
              Over the course of 4 years at my internships, clubs, classes, and hackathons, I have created
              multiple products that range from full-stack, ML models, and mobile applications.
            </p>
            <p className ="mb-5">
              Outside of school and work, I love to stay fit! 
              You'll find me either running around my neighborhood at midnight, lifting weights at the gym, or in the pool swimming some laps! 
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            <p className="text-xl">
              Here are some of the technologies I work with!
            </p>
            <div className="justify-items-center grid grid-cols-5 gap-y-5 gap-x-6 w-50 mt-5 flex-row">
              {languagesAndFrameworks.map((tech, index) => (
                <TechnologyItem key={index} imageSrc={tech.image} />
              ))}
              {developerTools.map((tech, index) => (
                <TechnologyItem key={index} imageSrc={tech.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

        <div id = "projects" className="min-h-screen pt-16" ref={ref1}>
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
            imgSrc="../public/projects/volt_web.jpg"
          />
          <ProjectCard
            title="Playground"
            description="Engineered  a full-stack web application that allows users to find out information for their careplace."
            githubLink="https://github.com/Codelab-Davis/Playground"
            mediumArticle="https://codelabdavis.medium.com/playground-762b36da1806"
            imgSrc="../public/projects/playground.png"

          />
          <ProjectCard
            title="PassPal"
            description="Mentored a full-stack mobile application that allows users to create, update, and delete their own passwords."
            githubLink="https://github.com/Codelab-Davis/password-manager"
            mediumArticle="https://codelabdavis.medium.com/passpal-9e46496ce71e"
            imgSrc="../public/projects/passpal_web.jpg"
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
            imgSrc="../public/projects/aggiereview.png"
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
      <div
        ref={ref2}
        className="ml-14 mt-48 text-left text-white"
        style={{
          transform: isInView2 ? "translateY(0)" : "translateY(20px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <p         id = "experience"
className = "font-bold text-6xl">Experience</p>
        <ExperienceTimeline />
      </div>

      {/* Contact Section */}
      <div className="mt-96 text-left text-xl"
          id = "contact">
        <p>Contact me at these links:</p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
