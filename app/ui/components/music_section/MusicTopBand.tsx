import { Songs } from "@/lib/songs";
import { FaRegHeart, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";
import TrackCard from "./TrackCard";

export const MusicTopBand = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-5 w-full mt-12">
      {Songs.bandTopTracks.map((bandSongs, i) => (
        <div key={bandSongs.track} className="flex justify-center p-2">
          <TrackCard
            track={bandSongs.track}
            artist={bandSongs.band}
            streams={bandSongs.streams}
            rank={i + 1}
          />
        </div>
      ))}
    </div>
  );
};
