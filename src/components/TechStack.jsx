import TechStackImage from "../assets/images/techstack.webp"

import PythonIcon from "../assets/images/skills/py-light.svg"
import JsIcon from "../assets/images/skills/js.png"
import GoIcon from "../assets/images/skills/Go.png"
import HtmlIcon from "../assets/images/skills/HTML.svg"
import CssIcon from "../assets/images/skills/CSS.svg"
import TailwindIcon from "../assets/images/skills/tailwind.svg"
import ReactIcon from "../assets/images/skills/react.svg"
import DjangoIcon from "../assets/images/skills/Django.svg"
import FlaskIcon from "../assets/images/skills/flask-light.svg"
import GinIcon from "../assets/images/skills/gin.png"
import FiberIcon from "../assets/images/skills/fiber.svg"
import PostgresIcon from "../assets/images/skills/postgres-light.svg"
import MongoIcon from "../assets/images/skills/mongo.svg"
import GitIcon from "../assets/images/skills/git.svg"

export default function TechStack() {
  return (
    <section className="m-6 mt-28" id="techstack">
      <h2 className="font-bold text-lg text-blue-400">TechStack</h2>
      <div className="mt-5 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-10 md:grid-cols-6 lg:grid-cols-7">
          <img src={PythonIcon} alt="python Logo" className="w-10 h-10"/>

          <img src={JsIcon} alt="HTML Logo" className="w-10 h-10"/>

          <img src={GoIcon} alt="Go Logo" className="w-10 h-10"/>

          <img src={HtmlIcon} alt="HTML Logo" className="w-10 h-10"/>

          <img src={CssIcon} alt="CSS Logo" className="w-10 h-10"/>             
        
          <img src={TailwindIcon} alt="Tailwind Logo" className="w-10 h-10"/>

          <img src={ReactIcon} alt="react Logo" className="w-10 h-10"/>

          <img src={DjangoIcon} alt="django Logo" className="w-10 h-10"/>

          <img src={FlaskIcon} alt="flask Logo" className="w-10 h-10"/>

          <img src={GinIcon} alt="flask Logo" className="w-10 h-10"/>

          <img src={FiberIcon} alt="flask Logo" class="w-10 h-10"/>

          <img src={PostgresIcon} alt="flask Logo" className="w-10 h-10"/>

          <img src={MongoIcon} alt="flask Logo" className="w-10 h-10"/>

          <img src={GitIcon} alt="git Logo" className="w-10 h-10"/>
        </div>

        <div className="flex md:space-x-10 flex-col md:flex-row items-center md:items-start">
          <div className="space-y-3">
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Python</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Javascript</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Typescript</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Golang</p>
          </div>

          <div className="space-y-3">
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">React</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Tailwindcss</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Nextjs</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">django</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Flask</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Gin</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Fiber</p>
          </div>

          <div className="space-y-3">
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Postgresql</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Msql</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Sqlite3</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">MongoDB</p>
            <p className="border text-blue-400 border-slate-900 flex items-center justify-center w-20 rounded-xl bg-slate-900">Redis</p>
          </div>
        </div>

        {/* <div className="image">
          <img
            src={TechStackImage}
            height={500}
            width={400}
            alt="about"
          />
        </div> */}
      </div>
    </section>
  )
}