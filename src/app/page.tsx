import Image from "next/image";
import './globals.css';
import Home from './component/Home';
import NavBar from "./component/NavBar";
import Skills from "./component/Skills";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar/>
        <Home/>
        <Skills/>
      </div>
    </>
  )
}

export default App