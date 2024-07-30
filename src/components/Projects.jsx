import { Github, ExternalLink } from "lucide-react"

import cssProjects from "../assets/images/projects/cssprojects.png"
import devLog from "../assets/images/projects/devlog.png"
import flaskBlog from "../assets/images/projects/flask_simple_blog.jpg"
import uiLogs from "../assets/images/projects/uilogs.png"

export default function Projects() {
  const projects = [
    {
      img: devLog,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: uiLogs,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: cssProjects,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: flaskBlog,
      title: "get Inspirred",
      desc: "This is a simple blog site built using flask, python and bootstrap.",
      live: "https://excellent99.pythonanywhere.com/",
      code: "https://github.com/Excellent58/flask-app-01",
    },
  ];

  return (
    <section className="m-6" id='projects'>
      <h2 className="font-bold text-lg text-blue-400">Projects</h2>
      <p className="text-blue-300">Some of projects i have built....</p>

      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div className="border-4 border-slate-900 w-80 rounded-lg" key={i}>
            <img src={project.img} alt={project.title} className="w-full"/>
            <div className="flex flex-col m-1">
              <h2 className="text-lg font-bold">{project.title}</h2>

              <div className="flex flex-row justify-between">
                <p>Python | Nextjs</p>
                <div className="flex space-x-4">
                  <Github/>
                  <ExternalLink/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}