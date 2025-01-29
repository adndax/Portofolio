import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import {skills1, skills2, skills3} from "@data"

const Skills = () => {
  return (
      <section id='skills' className='relative min-h-screen w-screen overflow-x-hidden'>
      <div className='flex-row gap-10 ml-7 mr-7 mt-32 sm'>
        <h1 className='uppercase font-bold text-4xl text-center mb-5'> 
          Skills
        </h1>
        <p className='sm:mb-16 mb-10 text-center text-sm' >
        Proficient in multiple <span className='text-purple-200'>programming languages</span>, modern <span className='text-blue-200'>tech stacks</span>, and <span className='text-purple-200'>version control</span>.
        </p>
        <InfiniteMovingCards
          items={skills1}
          direction="right"
        />
        <InfiniteMovingCards
          items={skills2}
          direction="left"
        />
        <InfiniteMovingCards
          items={skills3}
          direction="right"
        />
      </div>
      </section>
  )
}

export default Skills