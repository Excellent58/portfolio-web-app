import { Mail, Phone} from "lucide-react"

export default function Contact() {
  return (
    <section className="m-6 mt-28" id="contact">
      <h2 className="font-bold text-lg text-blue-400">Contact</h2>
      <p className="text-blue-300 mt-5">Work with me....</p>

      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold text-blue-200">Get In Touch</h1>
        <p>
          I am open for a remote job, freelance work or any new opportunities.<br/>
          If you have any questions or just want to say hi, feel free to reach out to me.
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
          <div className="mt-6 flex justify-center space-x-4">
            <Phone size={24}/>
            <p>kenya, nairobi</p>
          </div>
        </div>
      </div>

    </section>
  )
}