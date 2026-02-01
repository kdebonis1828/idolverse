"use client"
import { AnimatePresence } from "motion/react"
import {motion} from 'framer-motion';
import { delay } from "motion";

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
      Lorem ipsum dolor sit amet.
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
      Lorem ipsum dolor sit amet consectetur adipisicing.
    </motion.div>

    <motion.div
      key="text-3"
      initial={{ opacity: 0, scale: 0, }}
      animate={{ opacity: 1, scale: [0, 1 ]}}
      transition={{
        duration: 3,
        ease: "easeInOut",
        delay: 14 // empieza después de que el segundo texto desaparece
      }}
    >
      Lorem, ipsum dolor.
    </motion.div>
  </AnimatePresence>
</div>
  )
}


