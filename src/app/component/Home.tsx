"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter";
import {words} from "@data";
import Modal from "./Modal";
import { ShootingStars } from "@/app/component/ui/ShootingStars";
import { StarsBackground } from "@/app/component/ui/StarsBackground";
import { Spotlight } from "@/app/component/ui/Spotlight";
import Image from "next/image";

const Home = () => {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative min-h-screen w-screen overflow-x-hidden">
      <Spotlight
        className="-top-40 -left-10 md:-top-15"
        fill="rgb(200,180,255)"
      />
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 ml-7 mr-7 mt-32 md:mt-64">
          <Image
            src="/dinda.jpg"
            alt="dinda"
            className="rounded-full shadow-[0_0_50px_rgba(200,180,255,0.7)]"
            loading="lazy"
            width={330}
            height={330}
          />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="uppercase font-bold text-4xl mb-5 md:mb-2 text-center md:text-left"> 
                Adinda's Digital<span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-300 text-transparent bg-clip-text"> {text} </span>
                <Cursor/>
            </h1>
            <p className="text-sm text-center md:text-left md:w-96">
                Hello, there! I"m Adinda. I’m currently a fourth-semester Informatics Engineering student at Bandung Institute of Technology, 
                specializing in software engineering with a keen focus on developing accessible and efficient user interfaces. 
                I’m committed to enhancing my design and development skills, actively contributing to open-source projects. 
                Connect with me to discuss potential collaborations or to exchange insights in technology innovation.
            </p>
            <div className="mt-5 md:mt-3">
              <Modal/>
            </div>
          </div>
        </div>
        <ShootingStars className="-z-10"/>
        <StarsBackground className="-z-10"/>
    </section>
  )
}

export default Home