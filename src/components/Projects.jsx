import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "AI Blog Generator",
      description: "Generate and publish blogs using React, Node.js, and Gemini AI.",
      image: "/images/image.png",
      link: "https://ai-blog-umber-eta.vercel.app/",
    },
    {
      title: "Task Manager",
      description: "Manage your daily tasks with MongoDB, JWT and beautiful UI.",
      image: "/images/image.png",
      link: "https://ai-blog-umber-eta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:text-blue-700 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
