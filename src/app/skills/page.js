"use client";

export default function Skills() {
  const skills = {
    "Programming Languages (Midlevel)": ["Java", "Groovy", "C", "Python"],
    "Programming Languages (Beginner Level)": ["JavaScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["Node.js", "React.js", "Next.js", "Express.js"],
    "Databases": ["PostgreSQL (DBeaver)"],
    "Technical Skills": [
      "API Development & Analysis",
      "Machine Learning (Data-driven solutions, model training)",
      "Cloud Platforms (AWS S3, Lambda, SNS, SQS)",
      "Data Management (PIM)",
      "Agile Cross-functional Collaboration",
      "Jira (issue tracking, project management)",
      "Datadog (performance monitoring, log analysis)"
    ]
  };

  const certificates = [
    {
      title: "DeepLearning.AI: Supervised Machine Learning: Regression and Classification",
      period: "January 2025 - Present"
    },
    {
      title: "edX / AWS: AWS Cloud Technical Essentials",
      period: "December 2024 - Present"
    },
    {
      title: "edX / AWS: AWS Cloud Practitioner Essentials",
      period: "December 2024 - Present"
    },
    {
      title: "edX / IBM: Back-end Application Development with Node.js and Express",
      period: "July 2024 - Present"
    },
    {
      title: "edX / TUMx: Make Your Own App",
      period: "July 2024 - Present"
    },
    {
      title: "IEEE Computer Society Türkiye Chapter: IEEE CSCON Data Mining",
      period: "March 2019 - Present"
    },
    {
      title: "Kultusministerkonferenz: DSD 1 Deutsches Sprachdiplom",
      period: "March 2017 - Present"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-blue-300">Skills & Certificates</h1>
      
      {/* Skills Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-blue-300">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category}
              className="bg-[#1A2333] p-6 rounded-2xl border border-[#2A3343] hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#2A3343] text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-blue-300">Certificates</h2>
        <div className="space-y-6">
          {certificates.map((cert) => (
            <div 
              key={cert.title}
              className="bg-[#1A2333] p-6 rounded-2xl border border-[#2A3343] hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-semibold text-blue-300">{cert.title}</h3>
                <span className="text-gray-400 whitespace-nowrap">{cert.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
