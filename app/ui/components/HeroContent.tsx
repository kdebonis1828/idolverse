"use client"
import { AnimatePresence } from "motion/react"
import {motion} from 'framer-motion';
import { orbitron } from "../fonts";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <div className="absolute  inset-0 z-20 flex flex-col items-center justify-center text-white font-bold text-5xl text-center">
  <AnimatePresence>
    <motion.div
      className="absolute"
      key="text-1"
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1]}}
      transition={{
        duration: 7, // total animación: 1s entrada + 3s visible + 1s salida
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1]
      }}
    >
      <h1 className={`${orbitron.className} text-yellow-100 text-shadow-2xs text-6xl`}>
        This is the biggest Kpop Experience
      </h1>
    </motion.div>

    <motion.div
      className="absolute"
      key="text-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1] }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
        delay: 6 // empieza justo cuando termina el primer texto
      }}
    >
     <h1 className={`${orbitron.className} text-yellow-100 text-shadow-2xs text-6xl`}>
      All your idols in one place
      </h1> 
    </motion.div>

    <motion.div
      className="absolute"
      key="text-3"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0, 1] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.1, 0.9, 1],
        delay: 12 // empieza justo cuando termina el primer texto
      }}
    >
     <h1 className={`${orbitron.className} text-yellow-100 text-shadow-2xs text-6xl`}>welcome to</h1> 
    </motion.div>


    <motion.div
      key="text-4"
      initial={{ opacity: 0, scale: 0, }}
      animate={{ opacity: 1, scale: [0, 1 ]}}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay: 16 
      }}
    >
      <Image 
        width={700}
        height={400}
        alt="idolverse logo"
        src={'/idols/logo.png'}
      />
    </motion.div>
  </AnimatePresence>
</div>
  )
}


