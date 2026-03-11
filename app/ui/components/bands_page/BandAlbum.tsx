"use client"
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"

interface Album {
    title: string
    cover: string
    link: string
}

interface AlbumsProps {
    albums : Album[]
}

export const BandAlbum = ({albums}: AlbumsProps) => {
  return (
     <div className="flex flex-wrap gap-16 justify-center gap mt-10">  
        {
            albums.map((album , index) => (
                <motion.div 
                    initial={{ rotate: index % 2 === 0 ? 5 : -5, y: 0 }}
                    whileHover={{rotate: 0}}
                    whileTap={{scale: 0.98 , rotate: 0}}
                    key={index}
                >
                    <Link  href={album.link}>
                    <Image
                    width={1200}
                    height={1200}
                    src={album.cover}
                    alt={album.title}
                    className="w-65 h-65 md:w-75 md:h-75 rounded-lg"
                    />
                </Link>
                    </motion.div>
          
            ))
        }
                
     </div>
  )
}
