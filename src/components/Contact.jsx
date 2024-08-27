import { Mail, Phone} from "lucide-react"

export default function Contact() {
  return (
    <section className="m-6 mt-28" id="contact">
      <h2 className="font-bold text-lg text-blue-400">Contact</h2>

      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-400">Get In Touch</h1>
        <p>
          I am open for a remote job, freelance work or any new opportunities.<br/>
          Feel free to get in touch and talk more about your projects.
        </p>
        <div className="text-blue-400">
          <div className="mt-6 flex justify-center space-x-4">
            <Mail size={24}/>
            <p>wycliffemusau99@gmail.com</p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <Phone size={24}/>
            <p>+254 758 053 919</p>
          </div>
        </div>
      </div>

    </section>
  )
}