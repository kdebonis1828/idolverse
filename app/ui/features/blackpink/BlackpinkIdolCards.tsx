"use client"
import {motion} from 'framer-motion';
import { idols } from "@/lib/types/idols.interface";
import { Card } from '../../components/ui/card';
import { orbitron } from '../../fonts';


export const BlackpinkIdolCards = ({image, name}: idols) => {
  return (
    <Card className="flex relative 
    flex-col justify-center items-center scale-150 w-50 h-full  rounded-xl border py-0
     border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.35)]
     bg-linear-to-r from-black via-pink-600 to-fuchsia-500
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
        <div className="bg-gray-800 w-full rounded-b-xl h-15 flex justify-center items-center">
            <img className="h-20 w-20 absolute bottom-5" src="/idols/blackpink/bplogo.png" alt="blackpink logo" />
            <h1 className={`${orbitron.className} text-white font-bold text-2xl mt-5 [-webkit-text-stroke:1px_green]`}>{name}</h1>
        </div>
    </Card>
  )
}
