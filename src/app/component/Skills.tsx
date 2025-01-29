import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import {skills1, skills2, skills3} from "@data"

const Skills = () => {
  return (
    <div>
      <section className='relative min-h-screen w-screen overflow-x-hidden'>
      <div className='flex-row gap-10 ml-7 mr-7 mt-16 sm'>
        <h1 className='uppercase font-bold text-4xl text-center sm:mb-10 mb-5'> 
          Skills
        </h1>
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
    </div>
  )
}

export default Skills