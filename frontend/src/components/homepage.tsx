import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectcard";
import TechnologyItem from "./technologycard";
import Navbar from "./navbar.tsx";

function HomePage() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

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
    { name: "React", image: "../public/react.svg" },
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
        transition={{ duration: 2 }}
      >
        <div className="font-poppins text-white h-auto mt-72 mb-80 text-left">
          <p style={{ color: "#ADBACA" }} className="text-4xl">
            Hello! My name is
          </p>
          <p className="mt-3 text-6xl">Jason Nguyen, and I'm a...</p>
          <p style={{ color: "#ADBACA" }} className="mt-3 text-xs">
            (pull the lever!)
          </p>
        </div>
      </motion.div>

      {/* About Me Section */}
      <div className="min-h-screen pt-16" ref={ref3}>
        <div
          className="ml-14 mt-10 text-6xl text-left"
          style={{
            transform: isInView3 ? "translateY(0)" : "translateY(20px)",
            opacity: isInView3 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            color: "#ADBACA",
          }}
        >
          About Me!
          <div className="mt-10 w-96 text-white text-lg">
            <p>
              I am a software engineer with experience in full-stack web
              development. I have a passion for creating applications that
              provide value to users. I am currently a student at UC Davis
              studying computer science.
            </p>
          </div>
          <div className="mt-10 flex flex-col">
            <p className="text-3xl text-xs">
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

      {/* Projects Section */}
      <div className="min-h-screen pt-16" ref={ref1}>
        <div
          className="ml-14 mt-10 text-6xl text-left"
          style={{
            transform: isInView1 ? "translateY(0)" : "translateY(20px)",
            opacity: isInView1 ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            color: "#ADBACA",
          }}
        >
          Projects
          <div className="mt-10 flex flex-row">
            <div className="mr-10">
              <ProjectCard
                title="Volt"
                description="Volt is a full-stack web application that allows users to create, update, and delete their own flashcards. Users can also study their flashcards using a spaced repetition algorithm."
                githubLink="a"
              />
            </div>
            <div className="mr-10">
              <ProjectCard
                title="Playground"
                description="Playground is a full-stack web application that allows users to create, update, and delete their own playgrounds. Users can also view other users' playgrounds and like them."
              />
            </div>
            <div className="mr-10">
              <ProjectCard
                title="PassPal"
                description="PassPal is a full-stack web application that allows users to create, update, and delete their own passwords. Users can also view other users' passwords and like them."
              />
            </div>
          </div>
          <div className="mt-10 flex flex-row">
            <div className="mr-10">
              <ProjectCard
                title="Davis Dining Commons"
                description="Davis Dining Commons is a full-stack web application that allows users to view the menu for the dining commons at UC Davis."
              />
            </div>
            <div className="mr-10">
              <ProjectCard title="Boxdup" description="WIP" />
            </div>
            <div className="mr-10">
              <ProjectCard title="JasonLB" description="WIP" />
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Section */}
      <div
        ref={ref2}
        className="min-h-screen mt-96 text-left text-xl"
        style={{
          transform: isInView2 ? "translateY(0)" : "translateY(20px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        <p>Here are my experiences:</p>
        <ul>
          <li>Codelab</li>
          <li>AT&T</li>
          <li>UnitedHealthCare Group / Optum</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="mt-96 text-left text-xl">
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
