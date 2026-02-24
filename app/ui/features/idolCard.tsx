"use client";
import { motion} from "framer-motion";
import { idols } from "@/lib/types/idols.interface";
import { Card } from "../components/ui/card";
import { orbitron } from "../fonts";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  idol: idols;
  className?: string;
  logo: string;
  logoSize: string
  idolImageStyle?: string
}

export const IdolCard = ({ idol, className, logo, logoSize, idolImageStyle }: CardProps) => {
  return (
    <motion.div
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.98}}
        transition={{duration: 0.3, ease: "easeInOut"}}
    >
      <Link href={"/"}>
    <Card
      className={`${className} flex relative flex-col justify-center items-center  w-50 h-full  rounded-t-xl  py-0`}
      >
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
         
         >
        <Image 
            src={idol.image}
            alt={idol.name + "image"}
            className={`${idolImageStyle} object-contain h-50 mt-2 overflow-hidden`}
            width={1200}
            height={1200}
            />
      </motion.div>
      <div className="bg-black w-50 border-2 border-pink-800 rounded-b-xl h-15 flex justify-center items-center absolute -bottom-12 z-30">
        <img
          className={`${logoSize}`}
          src={logo}
          alt={idol.name + "official logo"}
          />
        <h1
          className={`${orbitron.className} text-white font-bold text-2xl mt-5 [-webkit-text-stroke:1px_green]`}
          >
          {idol.name}
        </h1>
      </div>
    </Card>
    </Link>
    </motion.div>
  );
};
