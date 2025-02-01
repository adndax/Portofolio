import React from 'react'
import { ThreeDCardDemo } from "./ui/3DCard";
import { projects } from "@data";

const Projects = () => {
  return (
    <section className='relative w-screen overflow-x-hidden bg-gradient-to-br from-black via-black to-[#3f1753]'>
      <div id='projects' className='flex flex-col ml-7 mr-7 mt-14 sm:mt-48 pt-24 sm:pt-28'>
        <h1 className='uppercase font-bold text-4xl text-center mb-10'> 
          Projects
        </h1>
        <div className='flex flex-wrap gap-8 justify-center'>
          {projects.map((project, idx) => (
            <ThreeDCardDemo key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects