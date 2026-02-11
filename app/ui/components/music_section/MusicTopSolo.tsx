"use client"
import { Songs } from "@/lib/songs"
import { songs } from "@/lib/types/songs.interface"
import TrackCard from "./TrackCard"

export const MusicTopSolo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-5 w-full mt-12">
        {
            Songs.soloTopTracks.map((soloSongs, i ) => (
                <div key={soloSongs.track} className="flex justify-center p-2 ">
                  <TrackCard 
                    track={soloSongs.track}  
                    artist={soloSongs.artist}
                    streams={soloSongs.streams}
                    rank={i + 1 } 
                />
                </div>
            ))
        }            
    </div>
  )
}


