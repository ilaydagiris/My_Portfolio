"use client";

const experiences = [
  {
    company: "NTT DATA Business Solutions Turkey",
    title: ".NET Support Developer / Junior .NET Support Developer ",
    period: "May 2024 – Present / May 2023 – April 2024 ",
    location: "Istanbul, Turkey",
    description: [
      "Worked as an MDM Project Consultant at **B/S/H/ Home Appliances Turkey** as an external consultant.",
      "Tailored key aspects of the SAP framework for enhanced compatibility during integration phases; ensured smooth operation without downtime or disruption when transitioning more than 3 major business units into STIBO in 2 years.",
      "Conducted data mapping following APPLiA standards to enhance product quality and sales, implemented product specifications, and managed TP3 protocols.",
      "Spearheaded website configuration for the Sherpa Project, developing over 50 attribute templates to define and customize product features for 30+ country-specific websites, optimizing localization and user experience.",
      "Delivered technical support for Product Information Management (PIM) solutions, resolving over 100 support tickets and enhancing system performance by 25%.",
      "Managed website roll-outs and collaborated with the PIM API team, driving successful deployments by analyzing and testing 5 major APIs in an AWS environment. This led to zero disruptions during launches."
    ],
    technologies: ["MDM", "Groovy", "AWS", "API Integration", "PIM", "STIBO", "Postman"]
  },
  {
    company: "İGA Istanbul Airport / İST Bilişim Teknolojileri",
    title: "Software Testing Intern",
    period: "December 2022",
    location: "Istanbul, Turkey",
    description: [
      "Completed Selenium WebDriver with Java Course from Udemy."
    ],
    technologies: ["Selenium", "Java", "Test Automation"]
  },
  {
    company: "TAV Technologies",
    title: "Software Development Intern",
    period: "August 2022 – September 2022",
    location: "Istanbul, Turkey",
    description: [
      "Completed software testing and UI test automation training (Cucumber, Selenium).",
      "Developed Flight Management Module backend with Java (Spring Boot).",
      "Conducted UI and API testing using JMeter.",
      "Built a 2-page post website Frontend with JavaScript, HTML, and CSS."
    ],
    technologies: ["Java", "Spring Boot", "Selenium", "Cucumber", "JMeter", "JavaScript", "HTML", "CSS"]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-blue-300">Experience</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-[#1A2333] p-6 rounded-2xl border border-[#2A3343] hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-300">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-300 mt-2">{exp.period} | {exp.location}</p>
              </div>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-[#2A3343] text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 