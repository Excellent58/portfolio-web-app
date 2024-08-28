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
    key: "py",
    alt: "python logo"
  },
  {
    name: JsIcon,
    key: "js", 
    alt: "javascript logo"
  },
  {
    name: GoIcon,
    key: "go",
    alt: "golang logo"
  },
  {
    name: HtmlIcon,
    key: "html",
    alt: "html logo"
  },
  {
    name: CssIcon,
    key: "css",
    alt: "css logo"
  },
  {
    name: TailwindIcon,
    key: "tailwindcss",
    alt: "tailwindcss logo"
  },
  {
    name: ReactIcon,
    key: "react",
    alt: "reactjs logo"
  },
  {
    name: DjangoIcon,
    key: "django",
    alt: "django logo"
  },
  {
    name: FlaskIcon,
    key: "flask",
    alt: "flask logo",
  },
  {
    name: GinIcon,
    key: "gin",
    alt: "gin logo",
  },
  {
    name: FiberIcon,
    key: "fiber",
    alt: "fiber logo",
  },
  {
    name: PostgresIcon,
    key: "postgres",
    alt: "postgres logo"
  },
  {
    name: MongoIcon,
    key: "mongo",
    alt: "mongodb logo"
  },

  {
    name: GitIcon,
    key: "git",
    alt: "git logo"
  }

]

export default function TechStack() {

  return (
    <section className="m-6 mt-28" id="techstack">
      <h2 className="font-bold text-lg text-blue-400">TechStack</h2>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-y-4 gap-x-4 box-border">
          {languageIcons.map((icon) => (
            <div className="h-10 w-10">
              <img src={icon.name} alt={icon.alt} key={icon.key} className="w-full h-full"/>
            </div>
          ))}
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