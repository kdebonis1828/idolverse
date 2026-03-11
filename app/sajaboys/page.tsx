"use client";
import { bandsMembers } from "@/lib/bandsMembers";
import { useState } from "react";
import { SajaIdolCard } from "../ui/features/sajaboys/SajaIdolCards";
import { BandHero } from "../ui/components/bands_page/BandHero";
import { bands } from "@/lib/bands";
import {motion} from "framer-motion"
import { SajaToggleButton } from "../ui/features/sajaboys/SajaToggleButton";
import Image from "next/image";

export default function Sajaboys() {
  const [demon, setDemon] = useState(false);
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden justify-around  font-sans ">
      <div className="flex text-center mt-32 h-full">
        <BandHero
          name={bands.SAJABOYS.name}
          description={bands.SAJABOYS.description}
          bandImage={bands.SAJABOYS.bandPhoto}
          quote={bands.SAJABOYS.quote}
          classname="w-[90%] md:w-[70%] mx-auto md:h-135"
        />
      </div>
      <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">
        Members
      </h4>
      <SajaToggleButton demon={demon} setDemon={setDemon} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-y-2 md:gap-x-12 lg:gap-x-24 lg:gap-y-32 mx-auto w-fit justify-items-center">
        {bandsMembers["Saja Boys"].map((saja) => (
          <SajaIdolCard key={saja.name} idol={saja} demon={demon} />
        ))}
      </div>

      <div className="mt-15 flex flex-col justify-center items-center">
        <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">
          Popular Albums
        </h4>
        <motion.div 
          initial={{rotate: -15}}
          animate={{rotate: [0 , -15 , 0 , -15]}}
          transition={{duration: 0.5, ease: "easeInOut"}}
          whileHover={{rotate: 0}}
          whileTap={{rotate: 0, scale: 0.98}}
          className="flex gap-x-16 mt-12 mb-10">
          <Image 
            src="/idols/comingsoon.jpg"
            alt="coming soon banner"
            width={1980}
            height={1200}
            className="w-75 h-70 rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
