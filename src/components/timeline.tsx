function ExperienceTimeline() {
  const experiences = [
      {
        company: "Capital One",
        title: "Software Engineer",
        location: "New York, NY",
        description: "Core developer and maintainer of Capital One's EMP Pipelines platform, a Kubeflow-based ML infrastructure platform enabling teams to build, orchestrate, and deploy scalable ML and GenAI workflows in production.",
        date: "Aug 2025 - Present",
        logo: "/companies/Capital.png"
        },
        {
        company: "AT&T",
        title: "Software Engineer Intern",
        location: "Dallas, TX",
        description: "Leveraged Generative AI and embedded models, including GPT-32k, MiniLLM6 and Llama3 within the Digital Enhancement and AI team to comprehensively analyze reasons and pain points for over 10 million cancellation calls using transcript data.",
        date: "June 2024 - Aug 2024",
        logo: "/companies/AT&T.png"
        },
        {
        company: "Volt (Codelab)",
        title: "Software Engineer Intern",
        location: "Remote",
        description: "Developed a full-stack web application to streamline the process of viewing data-metrics for enterprises using Volt. Made using React, FastAPI, and PostgresSQL.",
        date: "Sept 2023 - Dec 2023",
        logo: "/companies/Volt.png"
        },
        {
        company: "UnitedHealthCare Group",
        title: "Software Engineer Intern",
        location: "Irvine, CA",
        description: "Engineered a full-stack analytic dashboard to monitor and track incident tickets more effectively by location, team, and type using React, Python, Django, and PostgreSQL, saving an estimated 120 million in revenue from reduced downtime.",
        date: "Jun 2023 - August 2023",
        logo: "/companies/UHG.png"
        },  
        {
        company: "Playground (Codelab)",
        title: "Software Engineer Intern",
        location: "Davis, CA",
        description: "Operated within an AGILE framework with cross-functional teams to create and deploy 3 webpage tools on Framer for higher customer engagement using React, CSS, and HTML, resulting in over 500 interactions with HubSpot script.",
        date: "Jan 2023 - Jun 2023",
        logo: "/companies/Playground Logo.jpeg"
        },
        {
        company: "Codelab (for the AggieReview team)",
        title: "Software Engineer",
        location: "Davis, CA",
        description: "We built a web platform for students to leave constructive, unbiased reviews of professors and courses.",
        date: "Jan 2023 - Jun 2023",
        },
  ];

  return (
    <ol className="experience-list" aria-label="Work experience, most recent first">
      {experiences.map((exp, index) => (
        <li className="experience-entry" key={`${exp.company}-${exp.date}`}>
          <div className="experience-date">
            <p>{exp.date}</p>
            {index === 0 && <span className="current-role">Current role</span>}
          </div>
          <article className="experience-card">
            <div className="experience-heading">
              <div>
                <h3>{exp.company}</h3>
                <p className="experience-role">{exp.title}</p>
                <p className="experience-location">{exp.location}</p>
              </div>
              {exp.logo && (
                <div className="company-logo">
                  <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" />
                </div>
              )}
            </div>
            <p className="experience-description">{exp.description}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default ExperienceTimeline;
