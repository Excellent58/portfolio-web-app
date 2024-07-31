import { Github, Linkedin, Facebook, Twitter, Instagram} from "lucide-react"

export default function Hero() {
  return (
    <section className="m-6 mt-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:items-start md:w-[65%]">
          <h1 className="text-blue-400 text-2xl">
            Hi, I am  
          </h1>
          <span>
            <strong className="text-slate-300 font-extrabold text-xl md:text-5xl"> 
              Wycliffe Musau.
            </strong>
          </span>
          <p className="text-slate-400 font-extrabold mt-4 text-xl md:text-5xl">Software Developer.</p>

          <p className="font-bold mt-4 text-slate-400 md:text-left">I'm a passionate Fullstack web developer with hands-on 
            experience in building web applications using React.js & Next.js, Django, Flask, Gin, Fiber 
            with TypeScript, Javascript, Python, Golang, TailwindCSS, MongoDB and Postgresql.
          </p>
        </div>


      </div>

      <div className="flex space-x-4 mt-5 mb-5">
          <a href="/" className="hover:text-blue-300"><Github/></a>
          <a href="/" className="hover:text-blue-300"><Linkedin/></a>
          <a href="/" className="hover:text-blue-300"><Twitter/></a>
          <a href="/" className="hover:text-blue-300"><Facebook/></a>
          <a href="/" className="hover:text-blue-300"><Instagram/></a>
        </div>

      <div className="mt-4 flex items-center rounded-lg space-x-1">
        <div class="relative flex h-4 w-4">
          <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></div>
          <div class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></div>
        </div>

        <a href="#contact" className="text-blue-400 font-semibold cursor-pointer">Available for freelance work</a>
      </div>
    </section>
  )
}