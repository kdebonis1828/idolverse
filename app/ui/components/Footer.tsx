import { FaInstagram, FaYoutube } from "react-icons/fa"
import {  FaXTwitter } from "react-icons/fa6"
import {motion} from 'framer-motion'

export const Footer = () => {
  return (
    <div className="bg-black w-full h-96">
       <div className="flex  justify-center p-10 gap-x-18">
          <motion.a
            href="#" 
            aria-label="instagram"
            whileHover={{scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)", rotate: -5}}
            whileTap={{ scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)", rotate: -5 }}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="text-6xl p-5 rounded-xl dark:bg-zinc-500/20 shadow-[0_0_10px_rgba(217,70,239,0.25),0_0_18px_rgba(34,211,238,0.18)] " >
            <FaInstagram className="text-white group-hover:scale-110"/>
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="youtube"
            whileHover={{scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)", rotate: -5}}
            whileTap={{ scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)", rotate: -5 }}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="text-6xl p-5 rounded-xl dark:bg-zinc-500/20 shadow-[0_0_10px_rgba(217,70,239,0.25),0_0_18px_rgba(34,211,238,0.18)]" >
            <FaYoutube className="text-white" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="X social network "  
            whileHover={{scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)",rotate: -5}}
            whileTap={{ scale: 1.08, backgroundColor: "rgba(113, 113, 123, 0.4)", rotate: -5 }}
            transition={{duration: 0.5, ease: "easeInOut"}}
            className="text-6xl p-5 rounded-xl dark:bg-zinc-500/20 shadow-[0_0_10px_rgba(217,70,239,0.25),0_0_18px_rgba(34,211,238,0.18)]">
            <FaXTwitter  className=" text-white"/>
          </motion.a>
       </div>
    </div>
  )
}


