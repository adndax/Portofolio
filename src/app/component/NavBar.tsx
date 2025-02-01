'use client'

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { gsap } from 'gsap'
import { navItems } from '@data'; 

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
  
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <section ref={navContainerRef} className='fixed inset-x-0 top-3.5 z-50 h-16 border-none transition-all duration-700'>
      <header className='absolute w-full'>
        <nav className='flex size-full items-center justify-center p-3'>
          <div className='text-sm flex h-full items-center bg-gradient-to-r from-blue-900 via-black to-purple-800 p-4 rounded-xl border border-blue-100'>
                {navItems.map((item) => (
                  <a key= {item.name}
                  href= {item.link}
                  className='relative ms-3 mr-3 sm:ms-5 sm:mr-5 text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer'>
                    {item.name}
                  </a>
                ))}   
          </div>
        </nav>
      </header>
    </section>
  )
}

export default NavBar