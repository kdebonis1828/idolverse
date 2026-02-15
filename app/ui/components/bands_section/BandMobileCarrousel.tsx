import { bandProps, landingBands } from "@/lib/landingBands";
import {motion} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";



export const BandMobileCarrousel = () => {
     const tickerRef = useRef(null);
  return (
     <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
              whileHover={{x: 0 }}
              ref={tickerRef}
            >
          {[...landingBands, ...landingBands].map((band: bandProps, i) => (
            <Link key={`${band}-${i}`} href={band.bandPage}>
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.3 }}
                className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
              >
                <motion.img
                  className="w-full h-full object-cover scale-110"
                  src={band.src}
                  alt={band.alt}
                />

                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg tracking-widest">
                    {band.bandName}  
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          ))}
          </motion.div>
  )
}

