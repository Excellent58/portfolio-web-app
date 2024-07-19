import { Github, Linkedin, Facebook, Twitter, Instagram} from "lucide-react"

export default function Hero() {
  return (
    <section className="m-6">
      <div className="flex md:space-x-10 flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-blue-400">
            Hi, I am  
          </h1>
          <span>
            <strong className="text-slate-300 font-extrabold text-xl md:text-5xl"> 
              Wycliffe Musau.
            </strong>
          </span>
          <p className="text-slate-400 font-extrabold mt-4 text-xl md:text-5xl">Software Developer.</p>

          <p className="font-bold mt-4 text-blue-400 text-center md:text-left">I'm a passionate Fullstack web developer with hands-on 
            experience in building web applications using React.js & Next.js, Django, Flask, Gin, Fiber 
            with TypeScript, Javascript, Python, Golang, TailwindCSS, MongoDB and Postgresql.
          </p>
        </div>

        <div className="flex md:flex-col md:space-y-4 space-x-4 md:space-x-0 mt-2 md:mt-0 border border-slate-300 p-2 rounded-lg hover:bg-slate-950">
          <Github/>
          <Linkedin/>
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </div>
      </div>

      <div className="mt-4">
        <span className="animate-ping h-10 w-10 rounded-full bg-green-400 opacity-75"></span>
        <a href="#contact" className="text-blue-400 font-semibold cursor-pointer hover:underline">Available for freelance work</a>
      </div>
    </section>
  )
}