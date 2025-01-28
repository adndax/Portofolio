import Image from "next/image";
import './globals.css';
import Home from './component/Home';
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App