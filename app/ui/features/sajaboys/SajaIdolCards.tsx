"use client"
import { Card } from "@/app/ui/components/ui/card";
import { orbitron } from "../../fonts";
import {AnimatePresence, motion} from 'framer-motion';

import { idols } from "@/lib/types/idols.interface";

interface IdolSajaProp {
    idol: idols,
    demon: boolean
}


export const SajaIdolCard = ({idol, demon}: IdolSajaProp) => {
    
  return (
    <Card
      className={`flex relative flex-col mt-20 justify-center items-center scale-105 w-50 rounded-xl border py-0 border-pink-600 border-t-red-600-700 border-t-2
        shadow-card-glow bg-center bg-cover
      ${demon ? "bg-[url(/idols/saja_boys/demonsajacard.png)] " : "bg-[url(/idols/saja_boys/sajacard.png)]" }`}
    >
        <AnimatePresence mode="wait">
            <motion.img
            key={demon ? "demon" : "human"}
            initial={{ opacity: 0,  y: 20 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{ opacity: 0,  y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={demon ? idol.demon_image : idol.image}
            alt={idol.name}
            className="h-50 scale-140 object-contain"
            />
        </AnimatePresence>
      <div className="relative bg-gray-900 w-full rounded-b-xl p-2 border-t-2 border-b-red-700 border-2 border-r-red-700">
      <img className="w-12 h-12 absolute top-[-25] left-1/2 -translate-x-1/2" src="idols/saja_boys/sajalogo.png" alt="logo saja" />
        <h1 className={`text-white text-center py-2 font-bold ${orbitron.className} text-xl space-y-2 [-webkit-text-stroke:1px_violet]`}>{idol.name}</h1>
        {/* <div>hola</div> */}
      </div>
    </Card>


  );
};
