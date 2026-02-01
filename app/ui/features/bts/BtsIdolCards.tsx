"use client"
import { idols } from "@/lib/types/idols.interface"

import {motion} from "framer-motion"
import { Card } from "../../components/ui/card"
import { orbitron } from "../../fonts"



export const BtsIdolCards = ({name, image}: idols) => {
  return (
    <Card className="flex relative 
    flex-col justify-center items-center w-50 h-full  rounded-xl  py-0
     border-pink-500  border-t-amber-300 border-t-2 shadow-[0_0_40px_rgba(139,92,246,0.35)]
     bg-linear-to-r from-indigo-900 via-purple-600 to-violet-400
     shrink-0
     ">
        <motion.img
            initial={{ opacity: 0,  y: 20 }}
            animate={{ opacity: 1,  y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            src={image}
            alt={name + "image"} 
            className={`
            w-40 h-50 scale-130 object-contain mt-2
            [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
        />
        <div className="bg-gray-900 w-full rounded-b-xl border-r-amber-300 border-b-amber-300 border-b-2 border-r-2 h-15 flex justify-center items-center">
            <img className="h-12 w-12 absolute bottom-10" src="/idols/bts/btslogo.png" alt="bts logo" />
            <h1 className={`${orbitron.className} text-white font-bold text-2xl mt-5 [-webkit-text-stroke:1px_green]`}>{name}</h1>
        </div>
    </Card>
  )
}


