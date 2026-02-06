"use client"
import { Songs } from "@/lib/songs"
import { songs } from "@/lib/types/songs.interface"
import {  FaRegHeart, FaSpotify } from "react-icons/fa"
import {motion} from 'framer-motion'

export const MusicTopSolo = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-5 w-full mt-12">
        {
            Songs.soloTopTracks.map((soloSongs, i ) => (
                <div key={soloSongs.track} className="flex justify-center  ">
                    <div className="relative flex justify-between text-white w-112.5 h-38 rounded-3xl p-3 
                     bg-black/30  border-fuchsia-500/60
                        shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)]"
                    >
                        <div className="ml-2 mt-2 flex flex-col flex-1">
                        <h1 className="font-bold text-2xl text-[rgba(217,70,239,0.9)]">{soloSongs.track} </h1>
                        <h4 className="text-lg font-bold text-slate-100/70"> {soloSongs.artist} </h4>
                        <h5 className="font-bold mt-10 text-slate-100/70"> {soloSongs.streams} </h5>
                        </div>

                        <div className="flex absolute bottom-5 right-5">
                            <FaRegHeart className="size-8 mr-5" />
                            <motion.div
                                whileHover={{color: "#1DB954"}}
                                whileTap={{color: "#1DB954" }}
                                transition={{duration: 0.2, ease: "easeInOut"}}
                                
                            >
                                <FaSpotify className="size-8" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            ))
        }            
    </div>
  )
}


