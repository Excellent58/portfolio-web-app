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

// import { BadgeCheck, ChevronRight } from "lucide-react"

const languageIcons = [
  {
    name: PythonIcon,
    key: "Python",
    alt: "python logo"
  },
  {
    name: JsIcon,
    key: "Javascript", 
    alt: "javascript logo"
  },
  {
    name: GoIcon,
    key: "Golang",
    alt: "golang logo"
  },
  {
    name: HtmlIcon,
    key: "HTML",
    alt: "html logo"
  },
  {
    name: CssIcon,
    key: "CSS",
    alt: "css logo"
  },
  {
    name: TailwindIcon,
    key: "Tailwindcss",
    alt: "tailwindcss logo"
  },
  {
    name: ReactIcon,
    key: "React",
    alt: "reactjs logo"
  },
  {
    name: DjangoIcon,
    key: "Django",
    alt: "django logo"
  },
  {
    name: FlaskIcon,
    key: "Flask",
    alt: "flask logo",
  },
  {
    name: GinIcon,
    key: "Gin",
    alt: "gin logo",
  },
  {
    name: FiberIcon,
    key: "Fiber",
    alt: "fiber logo",
  },
  {
    name: PostgresIcon,
    key: "Postgresql",
    alt: "postgres logo"
  },
  {
    name: MongoIcon,
    key: "MongoDB",
    alt: "mongodb logo"
  },

  {
    name: GitIcon,
    key: "Git",
    alt: "git logo"
  }

]

export default function TechStack() {

  return (
    <section className="m-6 mt-28" id="techstack">
      <h2 className="font-bold text-lg text-blue-400">TechStack</h2>
      <div className="mt-4 flex flex-col space-y-5 md:space-y-0 items-center  md:flex-row md:justify-between">
        <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languageIcons.map((icon) => (
            <div className="flex flex-grow items-center space-x-2 text-sm" key={icon.key}>
              <img src={icon.name} alt={icon.alt} key={icon.key} className="h-10 w-10"/>
              <span>{icon.key}</span>
            </div>
          ))}
        </div>

        <div className="image">
          <img
            src={TechStackImage}
            height={500}
            width={400}
            alt="about"
          />
        </div>
      </div>
    </section>
  )
}

{/* <div className="image">
          <img
            src={TechStackImage}
            height={500}
            width={400}
            alt="about"
          />
        </div> */}

