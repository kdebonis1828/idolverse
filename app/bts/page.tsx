"use client"
import { bands } from "@/lib/bands";
import { IdolCard } from "../ui/features/idolCard";
import Image from "next/image";
import {motion} from 'framer-motion'
import { orbitron } from "../ui/fonts";

export default function BTS() {
  return (
    <div className="w-full flex flex-col min-h-screen px-8 py-20 font-sans">
      <div className="flex text-center mt-22 h-full" >
          <Image 
            src={'/idols/bts/btsgroup.jpg'}
            height={1920}
            width={1080}
            alt="band group"
            className="w-150 h-140  rounded-3xl  border-blue-400 border-4"
          />
          <motion.div
            className="w-full text-center"
          >
            <motion.h1
              initial={{opacity:0, y: 70}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1.1, ease:"easeIn"}}         
              className={`${orbitron.className} text-white text-6xl`}
            >
                BTS
            </motion.h1>
            <motion.p 
              initial={{opacity:0, y: 70}}
              animate={{opacity: 1, y: 0}}
              transition={{delay:1, duration: 1.1, ease:"easeIn"}}
              
              className="md:text-2xl text-left text-white w-[90%] md:ml-15 mt-10"
            > 
              BTS (Bangtan Sonyeondan) debuted in 2013 with a message that resonated far beyond music. Blending hip-hop roots with evolving pop influences, they built their identity around storytelling — exploring youth, ambition, identity, and self-growth.With each era, their sound and visuals matured, turning albums into narratives and performances into immersive experiences. Actively involved in their creative process, BTS crafted a journey defined by authenticity and evolution.From small stages to global stadiums, their rise reflects resilience, artistic vision, and the power of connection across cultures.
            </motion.p>
            <motion.h4 
              initial={{opacity:0, y: 70}}
              animate={{opacity: 1, y: 0}}
              transition={{delay:1.5, duration: 1.1, ease:"easeIn"}}
              className="md:text-2xl text-slate-400 mt-24 italic tracking-wide">
               “Love Yourself. Speak Yourself.”
            </motion.h4>
          </motion.div>
      </div>
        <h4 className="md:text-6xl text-center mt-22 font-bold text-white">Members</h4>
      <div className="max-w-7xl mx-auto mt-15 mb-10 flex flex-col justify-center gap-x-16">
        <div className="grid grid-cols-4 gap-x-24 gap-y-32">
          {bands.BTS.map((bts) => (
            <IdolCard
              key={bts.name}
              idol={bts}
              logo="/idols/bts/btslogo.png"
              logoSize="w-12 h-12 absolute bottom-10"
              className=" flex flex-col items-center
                w-52 rounded-xl
                border-2 border-blue-700
                shadow-[0_0_40px_rgba(139,92,246,0.35)]
                bg-[url(/idols/bts/btsbg.png)] bg-center bg-contain
                scale-120"
              idolImageStyle="scale-110
                [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
            />
          ))}
        </div>
      </div>
          
        <div className="mt-15 flex flex-col justify-center items-center">
          <h4 className="md:text-6xl text-center mt-22 font-bold text-white">Popular Albums</h4>
          <div className="flex gap-x-16 mt-10">
            <Image
            width={1200}
            height={1200}
              src={'/idols/bts/loveanswer.jpg'}
              alt="love yourself album cover"
              className="w-50 h-50 rounded-xl"
            />
            <Image
            width={1200}
            height={1200}
              src={'/idols/bts/loveanswer.jpg'}
              alt="love yourself album cover"
              className="w-50 h-50 rounded-xl"
            />
            <Image
            width={1200}
            height={1200}
              src={'/idols/bts/loveanswer.jpg'}
              alt="love yourself album cover"
              className="w-50 h-50 rounded-xl"
            />
            <Image
            width={1200}
            height={1200}
              src={'/idols/bts/loveanswer.jpg'}
              alt="love yourself album cover"
              className="w-50 h-50 rounded-xl"
            />
          </div>
        </div>
    </div>
  );
}