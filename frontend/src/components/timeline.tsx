import React from "react";

function ExperienceTimeline() {
  const experiences = [
    {
        company: "AT&T",
        title: "Software Engineer Intern",
        location: "Dallas, TX",
        description: "Leveraged Generative AI and embedded models, including GPT-32k, MiniLLM6 and Llama3 within the Digital Enhancement and AI team to comprehensively analyze reasons and pain points for over 10 million cancellation calls using transcript data.",
        date: "June 2024 - Aug 2024"
        },
        {
        company: "Volt (Codelab)",
        title: "Software Engineer Intern",
        location: "Remote",
        description: "Developed a full-stack web application to streamline the process of viewing data-metrics for enterprises using Volt. Made using React, FastAPI, and PostgresSQL.",
        date: "Sept 2023 - Dec 2023"
        },
        {
        company: "UnitedHealthCare Group",
        title: "Software Engineer Intern",
        location: "Irvine, CA",
        description: "Engineered a full-stack analytic dashboard to monitor and track incident tickets more effectively by location, team, and type using React, Python, Django, and PostgreSQL, saving an estimated 120 million in revenue from reduced downtime.",
        date: "Jun 2023 - August 2023"
        },  
        {
        company: "Playground (Codelab)",
        title: "Software Engineer Intern",
        location: "Davis, CA",
        description: "Operated within an AGILE framework with cross-functional teams to create and deploy 3 webpage tools on Framer for higher customer engagement using React, CSS, and HTML, resulting in over 500 interactions with HubSpot script.",
        date: "Jan 2023 - Jun 2023"
        },
        {
        company: "Codelab (for the AggieReview team)",
        title: "Software Engineer",
        location: "Davis, CA",
        description: "We built a web platform for students to leave constructive, unbiased reviews of professors and courses.",
        date: "Jan 2023 - Jun 2023"
        },
  ];

  return (
    <div className="font-poppins min-h-screen py-16 flex flex-col items-center">
      <div className="relative w-full max-w-5xl">
        <div className="absolute h-full border-l-2"></div>

        {/* Experience entries */}
        {experiences.map((exp, index) => (
          <div key={index} className="text-left mb-40 flex items-center w-full">

              <div className="-ml-10 w-1/12 flex justify-center relative">
                <div className="bg-white p-3 rounded-full shadow-lg"></div>
              </div>

                <div className="w-10/12 p-4 rounded-lg shadow-lg"
                     style = {{ backgroundColor: '#15181C' }} 
                  >
                  <p className="text-3xl font-bold text-white">{exp.company}</p>
                  <p className="text-xs font-light text-gray-400">{exp.title}</p>
                  <p className="text-xs font-light text-gray-400">{exp.location}</p>
                  <p className="text-xl text-white mt-4">{exp.description}</p>
                  <p className="text-xs font-light text-gray-400 mt-2">{exp.date}</p>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;