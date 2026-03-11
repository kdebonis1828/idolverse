"use client"

import { bandsMembers } from "@/lib/bandsMembers";
import { IdolCard } from "../ui/features/idolCard";
import { BandHero } from "../ui/components/bands_page/BandHero";
import { bands } from "@/lib/bands";
import { BandAlbum } from "../ui/components/bands_page/BandAlbum";



export default function Blackpink() {
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center md:px-8 py-20 font-sans">        
       
         <div className="flex text-center mt-20 h-full" >
                      <BandHero 
                          name={bands.BLACKPINK.name}
                          description={bands.BLACKPINK.description}
                          bandImage={bands.BLACKPINK.bandPhoto}
                          quote={bands.BLACKPINK.quote}
                      />
          </div>

 <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">Members</h4>
      <div className="grid grid-cols-2 mt-10 mb-22 md:mt-32 mx-auto lg:grid-cols-4 gap-x-5 gap-y-18 md:gap-x-24 md:gap-y-62  lg:gap-y-32">
          {
            bandsMembers.BLACKPINK.map(blackpink => (
              <IdolCard
              key={blackpink.name}
              idol={blackpink}
              logo="/idols/blackpink/bplogo.png"
              logoSize="w-20 h-20  absolute bottom-5"
              className=" 
              border-pink-500 border-2 shadow-[0_0_40px_rgba(236,72,153,0.35)] 
              bg-[url(/idols/blackpink/bpcard.png)] bg-center bg-cover scale-102 md:scale-160 md:mx-10
              "
              idolImageStyle="scale-110"
              />
            ))
          }
        </div>

         <div className="mt-15 flex flex-col justify-center items-center">
                  <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">Popular Albums</h4>
                  <div className="flex gap-x-16 mt-10">
                    <BandAlbum albums={bands.BLACKPINK.albums} />
                  </div>
                </div>
       </div>
  );
}
