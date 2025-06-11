import React from "react";
import image1 from '../assets/image.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React and Tailwind CSS.",
    image: image1,
    github: "https://github.com/girmajirahul/Portfolio",
    demo: "https://rahul-portfolio-rouge.vercel.app"
  },
  {
    title: "Online Job Portal",
    description: "A simple and intuitive OnlineJob Potal  with CRUD operations and Admin Panel.",
    image: image2,
    github: "https://github.com/girmajirahul/java_project",
    demo: "https://projectjob.vercel.app/"
  },
  {
    title: "E-commerace Website",
    description: "E-commerace website using Api .",
    image:image3 ,
    github: "https://github.com/girmajirahul/e-commerce",
    demo: "https://e-commerce-lime-eta-72.vercel.app/"
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
