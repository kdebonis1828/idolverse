import { songs } from "@/lib/types/songs.interface"
import { FaRegHeart, FaSpotify } from "react-icons/fa"
import {motion} from "framer-motion";


export const TrackCard = ({artist, track, streams, rank}: songs) => {
  return (
    <motion.div 
        initial={{opacity:0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6, ease: "easeIn"}}
        className="relative flex justify-between text-white w-82.5 md:w-112.5 h-38 rounded-3xl p-3 
                     bg-black/30  border-fuchsia-500/60
                        shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)]"
                    >
                        <div className="relative ml-1 mt-2 flex flex-col flex-1">
                        <h1 className="font-bold text-2xl text-[rgba(217,70,239,0.9)]">
                            <span className="absolute right-2 text-lg top-1"> #{rank}</span>
                            {track} 
                        </h1>
                        <h4 className="text-sm md:text-lg font-bold text-slate-100/70"> { artist }  </h4>
                        <h5 className="font-bold mt-auto text-slate-100/70"> {streams} </h5>
                        </div>

                        <div className="flex absolute bottom-3 right-5">
                            <button aria-label="like song">
                                <FaRegHeart className="size-6 mr-3 md:size-8 md:mr-5" />
                            </button>
                            <motion.button
                                whileHover={{color: "#1DB954"}}
                                whileTap={{color: "#1DB954" }}
                                transition={{duration: 0.2, ease: "easeInOut"}}
                                aria-label="Open in spotify"                                
                            >
                                <FaSpotify className="size-6 md:size-8" />
                            </motion.button>
                        </div>
                    </motion.div>
  )
}

export default TrackCard
