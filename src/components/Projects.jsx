import { Github, ExternalLink } from "lucide-react"

import cssProjects from "../assets/images/projects/cssprojects.png"
import devLog from "../assets/images/projects/devlog.png"
import flaskBlog from "../assets/images/projects/flask_simple_blog.jpg"
import uiLogs from "../assets/images/projects/uilogs.png"

const projects = [
    {
      img: devLog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
      techStack: ['django', 'react']
    },
    {
      img: uiLogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
      techStack: ['Nextjs', 'postgresql']
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
      techStack: ['django', 'reactjs']
    },
    {
      img: flaskBlog,
      title: "get Inspirred",
      desc: "This is a simple blog site built using flask, python and bootstrap.",
      live: "https://excellent99.pythonanywhere.com/",
      code: "https://github.com/Excellent58/flask-app-01",
      techStack: ['flask', 'react']
    },
  ];

export default function Projects() {

  return (
    <section className="m-6 mt-28" id='projects'>
      <h2 className="font-bold text-lg text-blue-400">Projects</h2>
      <p className="text-blue-300 mt-5">Some of projects i have built....</p>

      <div className="container mt-10 mx-auto grid place-content-center md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div className="border-4 border-slate-900 max-w-[350px] rounded-md" key={i}>
            <div className="h-[200px]">
              <img 
                src={project.img} 
                alt={project.title} 
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col m-1">
              <h2 className="text-lg font-bold text-blue-500">{project.title}</h2>

              <div className="flex gap-1 justify-between">
                <div className="flex gap-1">
                {project.techStack.map((tech, i) => (
                  <p className="text-sm text-blue-300 bg-slate-900 p-1 rounded-lg" key={i}>{tech}</p>
                ))}
                </div>
                <div className="flex space-x-4">
                  <a href="/" className="hover:text-blue-400"><Github size={20}/></a>
                  <a href="/" className="hover:'text-blue-400"><ExternalLink size={20}/></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}