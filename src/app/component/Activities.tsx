import React from 'react'
import { AnimatedTestimonialsDemo } from './ui/AnimatedActivities'

const Activities = () => {
  return (
    <section className='relative w-screen overflow-x-hidden'>
      <div id='activities' className='flex flex-col ml-7 mr-7 mt-14 sm:mt-48 pt-24 sm:pt-32 justify-center items-center'>
        <h1 className='uppercase font-bold text-4xl text-center mb-10'> 
          Activities
        </h1>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <AnimatedTestimonialsDemo/>
      </div>
    </section>
  )
}
export default Activities