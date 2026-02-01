"use client"

import {motion} from 'framer-motion';
import { orbitron } from "../../fonts";
import { idols } from "@/lib/types/idols.interface";
import { Card } from '../../components/ui/card';

export const HuntrixIdolCards = ({image, name}: idols) => {
  return (
    <Card className="flex relative 
    flex-col justify-center items-center scale-150 w-50 h-full  rounded-xl border py-0
     border-yellow-100 shadow-card-glow
     bg-linear-to-r from-slate-950 via-purple-900 to-fuchsia-700
     ">
        <motion.img 
            initial={{ opacity: 0,  y: 20 }}
            animate={{ opacity: 1,  y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            src={image}
            alt={name + "image"} 
            className={`
            ${image === "/idols/huntrix/mirahuntrix.png" ? "scale-125" : ""}
            w-40 h-50 scale-110 object-contain mt-2
            [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
        />
        <div className="bg-gray-800 w-full rounded-b-xl h-15 flex justify-center items-center">
            <img className="h-10 w-20 absolute bottom-10" src="/idols/huntrix/huntrixlogo.png" alt="huntrix logo" />
            <h1 className={`${orbitron.className} text-white font-bold text-2xl mt-5 [-webkit-text-stroke:1px_green]`}>{name}</h1>
        </div>
    </Card>
  )
}

