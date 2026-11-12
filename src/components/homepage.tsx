import ProjectCard from "./projectcard";
import TechnologyItem from "./technologycard";
import Navbar from "./navbar";
import ExperienceTimeline from "./timeline";
import Gallery from "./gallery";
import {
  SiDatabricks, SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiHtml5, SiCssmodules, SiMongodb, SiReact, SiNextdotjs, SiNodedotjs,
  SiDjango, SiFastapi, SiSpringboot, SiPostgresql, SiDart,
  SiFlutter, SiVercel, SiAnaconda, SiInsomnia, SiPostman,
} from "react-icons/si";
import { FaJava, FaGithub, FaDocker, FaJira, FaAws, FaRegSnowflake } from "react-icons/fa";
import { FaGolang, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiMail, FiMapPin } from "react-icons/fi";

const technologyGroups = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCssmodules /> },
      { name: "SQL", icon: <TbFileTypeSql /> },
      { name: "Go", icon: <FaGolang /> },
      { name: "Dart", icon: <SiDart /> },
    ],
  },
  {
    title: "Frameworks & databases",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Platforms & tools",
    items: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <DiVisualstudio /> },
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
    ],
  },
];

function HomePage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <section id="home" className="site-container hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">Hi, I’m<br /><span>Jason Nguyen.</span></h1>
            <p className="hero-description">
              Building useful things at my own pace, learning as I go.
              Currently working on ML infrastructure at <strong>Capital One.</strong>
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore my work <FiArrowDown aria-hidden="true" /></a>
              <a className="text-link" href="#about-me">A little about me <FiArrowRight aria-hidden="true" /></a>
            </div>
            <p className="hero-location"><FiMapPin aria-hidden="true" /> New York, NY <span aria-hidden="true">·</span> UC Davis ’25</p>
          </div>
          <div className="hero-photo">
            <Gallery
              images={[
                { src: "/saltbread.png", alt: "i love enjoying saltbread", caption: "me eating saltbread (saltbread ko)" },
                { src: "/projects/passpal.JPG", alt: "The PassPal team together", caption: "passpal team" },
                { src: "/projects/volt.png", alt: "The Volt team together", caption: "volt team" },
              ]}
            />
          </div>
        </section>

        <section id="about-me" className="site-container page-section" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-copy">
              <h3>Helloooo! I’m Jason.</h3>
              <p>
                I’m a software engineer on Capital One’s EMP Pipelines team,
                working on the infrastructure behind ML and GenAI workflows.
                I like data, distributed systems, and the challenge of making
                complicated things work well.
              </p>
              <p>
                I graduated from UC Davis in 2025 with a degree in Computer Science.
                A big part of that journey was <strong>Codelab</strong>, our
                student-run software club, where I built products, mentored
                teammates, and met some of my favorite people.
              </p>
              <p>
                Internships, hackathons, and team projects have taught me a lot.
                There’s always another hard problem to tackle, and that’s the part I enjoy.
              </p>
              <a className="text-link" href="#experience">See where I’ve been <FiArrowRight aria-hidden="true" /></a>
            </div>
            <figure className="memory-photo">
              <img src="/codelab.png" loading="lazy" width="1920" height="1280" />
              <figcaption><span>i love you guys, jun 2025</span><span>codelab, uc davis</span></figcaption>
            </figure>
          </div>
          <div className="offscreen-grid">
            <figure className="offscreen-photo">
              <img src="/tennis.png" loading="lazy" width="1368" height="1824" />
            </figure>
            <div className="about-copy">
              <h3>Always trying and learning something new.</h3>
              <p>
                If I'm not on the computer, then you’ll find me on a tennis court, cooking at a barbecue, or
                swimming a few laps. I also love video games, reading (history and politics), and
                learning about finance.
              </p>
              <p>
                Whether it’s climbing a rank in a game, picking up a new sport,
                or exploring a new idea in software, I’m happiest when I’m learning and competing.
              </p>
              <ul className="interest-list" aria-label="Personal interests">
                <li>Tennis</li><li>Cooking</li><li>Gaming</li><li>Reading</li>
              </ul>
            </div>
          </div>
          <div className="toolkit">
            <div className ="text-3xl">
              I mainly want to dive-deep into hard-problems involving data, ML/AI, and distributed systems for hundreds of users
            </div>
            <div className="toolkit-heading mt-5">
              Here are just some of the technologies I've worked with!
            </div>
            <div className="technology-groups">
              {technologyGroups.map((group) => (
                <div className="technology-group" key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((tech) => <TechnologyItem key={tech.name} icon={tech.icon} name={tech.name} />)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </section>

        <section id="projects" className="site-container page-section" aria-labelledby="projects-title">
          <div className="section-heading">
             <div className = "text-3xl">
                My Projects
             </div>
            <p>A few things I’ve built with talented teams and friends,<br className="desktop-break" /> and a few ideas I’m still exploring.</p>
          </div>
          <div className="project-grid">
            <ProjectCard
              title="Volt"
              category="Data & analytics"
              description="Turning enterprise cost data into a clear picture. A dashboard for tracking costs, spotting trends, and exploring the details."
              mediumArticle="https://codelabdavis.medium.com/volt-1dffc4ef911a"
              imgSrc="/projects/volt_web.jpg"
              tags={["React", "FastAPI", "PostgreSQL"]}
            />
            <ProjectCard
              title="Playground"
              category="Web application"
              description="Helping care providers find the information they need. A full-stack web application built with the Codelab team."
              githubLink="https://github.com/Codelab-Davis/Playground"
              mediumArticle="https://codelabdavis.medium.com/playground-762b36da1806"
              imgSrc="/projects/playground.png"
              tags={["React", "HTML", "CSS"]}
            />
            <ProjectCard
              title="PassPal"
              category="Mobile application · Team mentorship"
              description="A simpler way to manage passwords. I mentored the team building a mobile app to create, update, and organize credentials."
              githubLink="https://github.com/Codelab-Davis/password-manager"
              mediumArticle="https://codelabdavis.medium.com/passpal-9e46496ce71e"
              imgSrc="/projects/passpal_web.jpg"
            />
            <ProjectCard
              title="AggieReview"
              category="Student-built, student-focused"
              description="Helping students make informed choices through constructive reviews of UC Davis professors and courses."
              githubLink="https://github.com/Codelab-Davis/Professor-Rating-Platform"
              mediumArticle="https://codelabdavis.medium.com/aggiereview-54fe34440bbe"
              imgSrc="/projects/aggiereview.png"
            />
          </div>
          <div className="more-projects-heading"><h3>More to explore</h3><span>Hackathon builds & works in progress</span></div>
          <div className="small-project-grid">
            <ProjectCard
              title="Davis Dining Commons"
              category="HackDavis 2022"
              description="A full-stack app for exploring the menus at UC Davis dining commons."
              githubLink="https://github.com/HansonKLau/DDC"
            />
            <ProjectCard title="Boxdup" category="In progress" description="An ongoing personal project. Follow along on GitHub." githubLink="https://github.com/Jason3N/boxdup" />
            <ProjectCard title="JasonLB" category="In progress" description="An ongoing personal project. Follow along on GitHub." githubLink="https://github.com/Jason3N/jasonLB" />
          </div>
        </section>

        <section id="experience" className="site-container page-section" aria-labelledby="experience-title">
          <div className="section-heading text-3xl">
            Here's just a few of the things I've done in the past with my teams!
          </div>
          <ExperienceTimeline />
        </section>

        <section id="contact" className="site-container page-section contact-section" aria-labelledby="contact-title">
          <div className="contact-panel">
            <p className="eyebrow"><span>04</span> Let’s connect</p>
            <p className="contact-description">Have an idea, an opportunity, or just want to say hi?<br className="desktop-break" /> I’d love to hear from you.</p>
            <a className="button button-light" href="mailto:jasonnguyenphhs@gmail.com">Say hello <FiArrowUpRight aria-hidden="true" /></a>
            <a className="contact-email" href="mailto:jasonnguyenphhs@gmail.com"><FiMail aria-hidden="true" /> jasonnguyenphhs@gmail.com</a>
            <div className="social-links" aria-label="Social profiles">
              <a href="https://www.linkedin.com/in/iasonnguyen/" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://github.com/Jason3N" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" /></a>
              <a href="https://discordapp.com/users/_iason" target="_blank" rel="noreferrer"><FaDiscord aria-hidden="true" /> Discord <FiArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-container site-footer">
        <p>© {new Date().getFullYear()} Jason Nguyen </p>
      </footer>
    </>
  );
}

export default HomePage;
