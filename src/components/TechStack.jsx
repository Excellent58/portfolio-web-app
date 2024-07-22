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
    <section className="m-6 mt-0">
      <h2 className="font-bold text-lg text-blue-400">TechStack</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-80">
        <div className="icons grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-5 gap-y-5 content-center">
          <div class="p-4 flex items-center justify-center">
            <img src={PythonIcon} alt="python Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">python</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={JsIcon} alt="HTML Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">JavaScript</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={GoIcon} alt="Go Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">GO</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={HtmlIcon} alt="HTML Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">HTML</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={CssIcon} alt="CSS Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">CSS</span> */}
          </div>                
          
          <div class="p-4 flex items-center justify-center">
            <img src={TailwindIcon} alt="Tailwind Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Tailwind</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={ReactIcon} alt="react Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">React</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={DjangoIcon} alt="django Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Django</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={FlaskIcon} alt="flask Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Flask</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={GinIcon} alt="flask Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Gin</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={FiberIcon} alt="flask Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Fiber</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={PostgresIcon} alt="flask Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Postgres</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={MongoIcon} alt="flask Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">MongoDB</span> */}
          </div>

          <div class="p-4 flex items-center justify-center">
            <img src={GitIcon} alt="git Logo" class="w-10 h-10 mr-2"/>
            {/* <span class="text-sm font-medium">Git</span> */}
          </div>
        </div>
        <div className="image">
          <img
            src={TechStackImage}
            
            alt="about"
          />
        </div>
      </div>
    </section>
  )
}