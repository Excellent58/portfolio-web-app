import AboutImage from "../assets/images/about.png";

export default function About() {
  return (
    <section className="m-6 mt-0">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="md:w-3/4">
          <h2 className="font-bold text-lg text-blue-400">About Me</h2>

          <div className="md:mt-5">
            <p className="pb-5">
            Hi, My Name Is Wycliffe Musau, a computer science undergraduate. I am a
            fullstack Developer. I love to approach problems and solve them pragmattically.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like HTML, CSS, Javascript, Typescript, React.js and Tailwind CSS.
            </p>
            <p>In backend I know Django, Flask, and SQL</p>
          </div>
        </div>

        <div className="md:items-center">
          <img
            src={AboutImage}
            
            alt="about"
          />
        </div>
      </div>
    </section>
  )
}