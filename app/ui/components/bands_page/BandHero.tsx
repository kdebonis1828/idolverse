"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import { orbitron } from "../../fonts"

interface heroProps {
    name: string,
    bandImage: string,
    description: string,
    quote: string,
    classname?:string 
}

export const BandHero = ({name, bandImage, description, quote, classname} : heroProps) => {
  return (
    <div className="flex flex-col lg:flex-row text-center  h-full" >
          <motion.div
            initial={{opacity: 0, x: -550}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.5, ease:"easeInOut"}}
            className={`${classname} flex justify-center`} 
          >
            <Image 
              src={bandImage}
              height={1920}
              width={1080}
              alt="band group"
              className="w-[90%] rounded-3xl mx-auto  border-blue-400 border-4"
              />
          </motion.div>
          <motion.div
            className="w-full text-center"
          >
            <motion.h1
              initial={{opacity:0, y: 70}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1.1, ease:"easeIn"}}         
              className={`${orbitron.className} text-white text-5xl md:text-6xl mt-10 lg:mt-0`}
            >
                {name}
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay:1, duration: 1.1, ease:"easeIn"}}
              
              className="md:text-2xl text-center md:text-left text-white md:w-[90%] md:ml-15 mt-10 px-5 md:px-0"
            > 
              {description}
            </motion.p>
            <motion.h4 
              initial={{opacity:0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{delay:2, duration: 1.1, ease:"easeIn"}}
              className="md:text-2xl text-slate-400 mt-8 md:mt-12 italic tracking-wide">
               “{quote}”
            </motion.h4>
          </motion.div>
      </div>
  )
}


