import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="bg-slate-800 h-full text-slate-300 font-primary flex flex-col">
      <div>
        <NavBar/>
      </div>

      <div className='mt-11'>
        <Hero/>
        <About/>
        <TechStack/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}



export default App;
