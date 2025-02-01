'use client'

import React from 'react'
import Button from "./ui/Button"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const handleClick = () => {
    window.location.href = 'mailto:adindaputri0517@gmail.com?subject=Inquiry&body=Hello Adinda, I would like to get in touch..'; 
  }

  return (
    <section id='contact' className='relative w-screen overflow-x-hidden'>
      <div className='flex flex-col mt-10 sm:mt-32 p-12'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <Button description='Contact me via Email' onClick={handleClick} />
          <div className='flex gap-8 text-white'>
              <a href='https://www.github.com/adndax/' target='_blank' className=''>
                  <FaGithub size='30'/>
              </a>
              <a href='https://www.linkedin.com/in/adindaptri/' target='_blank'>
                  <FaLinkedin size='30'/>
              </a>
              <a href='https://www.instagram.com/_adndaptri/' target='_blank'>
                  <FaInstagram size='30'/>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact