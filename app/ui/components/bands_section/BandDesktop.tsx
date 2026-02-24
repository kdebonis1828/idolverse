import Link from "next/link"
import {motion} from 'framer-motion'
import { bandProps, landingBands } from "@/lib/landingBands"


export const BandDesktop = () => {
  return (
     landingBands.map((band: bandProps) => (
        <Link key={band.bandName} href={band.bandPage}>
          <motion.div
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 },
              tap: {scale: 0.98}
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
      ))
    )
}
  

