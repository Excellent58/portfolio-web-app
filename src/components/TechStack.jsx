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
        <div className="border grid grid-cols-4 gap-x-5 gap-y-5 md:grid-cols-6 lg:grid-cols-7">
          <div className="w-10 h-10 mr-2 flex items-center justify-center">
            <img src={PythonIcon} alt="python Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={JsIcon} alt="HTML Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={GoIcon} alt="Go Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={HtmlIcon} alt="HTML Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={CssIcon} alt="CSS Logo" className=""/>
          </div>                
          
          <div className="w-10 h-10 mr-2">
            <img src={TailwindIcon} alt="Tailwind Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={ReactIcon} alt="react Logo" className=""/>
          </div>

          <div class="w-10 h-10 mr-2">
            <img src={DjangoIcon} alt="django Logo" className=""/>
          </div>

          <div class="w-10 h-10 mr-2">
            <img src={FlaskIcon} alt="flask Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={GinIcon} alt="flask Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={FiberIcon} alt="flask Logo" class=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={PostgresIcon} alt="flask Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={MongoIcon} alt="flask Logo" className=""/>
          </div>

          <div className="w-10 h-10 mr-2">
            <img src={GitIcon} alt="git Logo" className=""/>
          </div>
        </div>

        <div className="image">
          <img
            src={TechStackImage}
            height={600}
            width={500}
            alt="about"
          />
        </div>
      </div>
    </section>
  )
}