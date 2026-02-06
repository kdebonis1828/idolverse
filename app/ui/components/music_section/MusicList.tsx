"use client"
import { useActionState, useState } from "react"
import { MusicToggleButton } from "./MusicToggleButton"
import { AnimatePresence } from "motion/react"
import { MusicTopBand } from "./MusicTopBand"
import { MusicTopSolo } from "./MusicTopSolo"
import {motion} from 'framer-motion'



export const MusicList = () => {
    const [songs, setSongs] = useState(true)
  return (
    <div className="flex justify-center flex-col items-center">
     <h1 className="text-6xl text-white text-center font-bold mb-8 mt-12">Worldwide Top Tracks</h1> 
  <MusicToggleButton modus={songs} setModus={() => setSongs(!songs)} />
  <div>
    <AnimatePresence mode="wait" >
      {songs ? (
        <motion.div
          key="solo"              
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <MusicTopSolo />
        </motion.div>
      ) : (
        <motion.div
          key="band"              
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className=""
        >
          <MusicTopBand />
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>
  )
}


