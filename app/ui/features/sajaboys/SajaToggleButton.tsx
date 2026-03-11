import { useRef } from 'react'
import {motion} from "framer-motion"
import { SiNodemon } from "react-icons/si";
import { GiAngelOutfit } from "react-icons/gi";
import { FaArrowLeft } from 'react-icons/fa';

interface ButtonProps{
    demon: boolean
    setDemon: (value: boolean) => void
} 


export const SajaToggleButton = ({demon, setDemon}: ButtonProps) => {
    const audioRef = useRef<HTMLAudioElement | null >(null);
    
      const handleBreakHoonmon = () => {
        // 2. Si no existe la instancia, la creamos
        if (!audioRef.current) {
          audioRef.current = new Audio("/idols/saja_boys/sajatransform.m4a");
        }
        // 3. Lógica para reproducir
        if (!demon) {
          audioRef.current.volume = 0.5;
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(error => console.log("Error al reproducir:", error));
        }
        
        setDemon(!demon);
      };

  return (
     <div className="flex relative ml-15 md:ml-0 mt-10 md:justify-center md:items-center">

          <motion.button 
              whileTap={{scale: 0.90}}
              className={`flex items-center justify-center bg-pink-700/30 text-center w-16 h-16 text-white bold rounded-full cursor-pointer 
              
               ${!demon ? "shadow-[0_0_15px_rgba(220,38,38,0.8),0_0_40px_rgba(249,115,22,0.5)]" : "shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)]"}`} 
              onClick={handleBreakHoonmon}
              >
              {
               demon 
                ? <GiAngelOutfit className="size-8" />
                : <SiNodemon className="size-8" />
              }
          </motion.button>

          <motion.div
            key={demon ? "demon-mode" : "human-mode"}
            initial={{opacity: 1}}
            whileInView={{opacity: [1, 0]}}
            transition={{times:[0, 0.8, 1] ,duration: 6, ease:"easeOut"}}
            className='absolute flex items-center gap-2 p-5 right-5 lg:right-120'>
            <motion.div
              initial={{translateX:0}}
              whileInView={{translateX: [-5, 0, -5 ,0]}}
              transition={{duration:2, ease:"linear", repeat: Infinity}}
              >
              <FaArrowLeft className="size-8 text-white" />
            </motion.div>
            
                <h1 className='text-white bold text-xl md:text-2xl'>
                  {demon ? 'Get Fans' : 'Break Honmoon'}
                </h1>
          </motion.div>
        </div>
  )
}


