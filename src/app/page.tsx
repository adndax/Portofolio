import Image from "next/image";
import './globals.css';
import Home from './component/Home';
import NavBar from "./component/NavBar";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Activities from "./component/Activities";
import Contact  from "./component/Contact";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar/>
        <Home/>
        <Skills/>
        <Projects/>
        <Activities/>
        <Contact/>
      </div>
    </>
  )
}

export default App