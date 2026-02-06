import {motion} from 'framer-motion';
import Link from 'next/link';
import { orbitron } from '../fonts';


export const BandsList = () => {
  return (
    <div className={`${orbitron.className} flex justify-around p-2`}>
        <Link href="/blackpink">
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        variants={{
          rest: {scale: 1},
          hover: {scale: 1.10}
        }}
        transition={{ duration: 0.3 }}
        className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
      >
        <motion.img
          className="w-full h-full object-cover scale-110"
          src="/idols/blackpink/blackpinkpin.jpg"
          alt="blackpink logo"
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg tracking-widest">
            BLACKPINK
          </span>
        </motion.div>
      </motion.div>
    </Link>
    <Link href='/bts'>
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        variants={{
          rest: {scale: 1},
          hover: {scale: 1.10}
        }}
        transition={{ duration: 0.3 }}
        className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
      >
        <motion.img
          className="w-full h-full object-cover scale-110"
          src="/idols/bts/btspin.jpg"
          alt="bts logo"
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg tracking-widest">
            BTS
          </span>
        </motion.div>
      </motion.div>
    </Link>
    <Link href='/straykids'>
         <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        variants={{
          rest: {scale: 1},
          hover: {scale: 1.10}
        }}
        transition={{ duration: 0.3 }}
        className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
      >
        <motion.img
          className="w-full h-full object-cover scale-110"
          src="/idols/straykids/straykidspin.jpg"
          alt="blackpink logo"
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg ">
            STRAY KIDS
          </span>
        </motion.div>
      </motion.div>
    </Link>

    <Link href='/huntrix'>
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        variants={{
          rest: {scale: 1},
          hover: {scale: 1.10}
        }}
        transition={{ duration: 0.3 }}
        className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
      >
        <motion.img
          className="w-full h-full object-cover scale-110"
          src="/idols/huntrix/huntrixpin.jpg"
          alt="huntrix logo"
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg tracking-widest">
            HUNTRIX          
          </span>
        </motion.div>
      </motion.div>
    </Link>

    <Link href='/sajaboys'>
         <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        variants={{
          rest: {scale: 1},
          hover: {scale: 1.10}
        }}
        transition={{ duration: 0.3 }}
        className="relative w-50 h-50 rounded-full overflow-hidden mt-10 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]"
      >
        <motion.img
          className="w-full h-full object-cover "
          src="/idols/saja_boys/sajaboyspin.jpg"
          alt="saja boys logo"
        />

        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <span className="text-white font-bold text-lg tracking-widest">
            SAJA BOYS
          </span>
        </motion.div>
      </motion.div>
    </Link>
    </div>
  )
}


