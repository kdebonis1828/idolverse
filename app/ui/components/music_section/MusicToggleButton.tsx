"use client"
import { useState } from "react"
import {motion} from "framer-motion";

interface musicProps {
    modus: boolean
    setModus: () => void
}

export const MusicToggleButton = ({modus , setModus}: musicProps) => {
    
  return (
    <div 
        className="
            flex relative justify-between bg-transparent  border-fuchsia-500/60
            shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)] 
            w-38
            h-18 
            p-6 
            rounded-full
            
            "
        >
        <motion.div 
        animate={{
            translateX: modus ? "100%" : "-15%" 
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}   
        className="absolute z-0 bg-fuchsia-300 backdrop-blur-md w-14 ml-1 top-1 left-3 h-14 p-8 rounded-full ">

        </motion.div>
        <button
            className={`${modus ? "text-slate-100/70": "text-[rgba(86,16,97,0.9)]"} absolute z-10 left-4 font-bold  cursor-pointer`}
            onClick={setModus}
        >Bands
        </button>
        <button
            className={`${modus ? "text-[rgba(86,16,97,0.9)]" : "text-slate-100/70"} absolute z-10 right-4.5 font-bold  cursor-pointer`} 
            onClick={ setModus}  
        >
            Solo
        </button>
    </div>
  )
}


