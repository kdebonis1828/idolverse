"use client"
import { bandsMembers } from "@/lib/bandsMembers";
import { IdolCard } from "../ui/features/idolCard";


import { bands } from "@/lib/bands";
import { BandHero } from "../ui/components/bands_page/BandHero";
import { BandAlbum } from "../ui/components/bands_page/BandAlbum";

export default function BTS() {
  return (
    <div className="w-full flex flex-col min-h-screen md:px-8  py-20 font-sans">
      <div className="flex text-center mt-20 h-full" >
              <BandHero 
                  name={bands.BTS.name}
                  description={bands.BTS.description}
                  bandImage={bands.BTS.bandPhoto}
                  quote={bands.BTS.quote}
                  classname="w-full lg:w-[70%] lg:h-125 mx-auto"
              />
      </div>
        <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">Members</h4>
      <div className="max-w-7xl md:mx-auto mt-15 mb-10 flex flex-col justify-around gap-x-16">
        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 gap-x-1 gap-y-18 lg:gap-x-24 lg:gap-y-32">
          {bandsMembers.BTS.map((bts) => (
            <IdolCard
              key={bts.name}
              idol={bts}
              logo="/idols/bts/btslogo.png"
              logoSize="w-12 h-12 absolute bottom-10"
              className=" flex flex-col items-center
                md:w-52 rounded-xl
                border-2 border-blue-700
                shadow-[0_0_40px_rgba(139,92,246,0.35)]
                bg-[url(/idols/bts/btsbg.png)] bg-center bg-contain
                lg:scale-120"
              idolImageStyle="scale-110
                [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
            />
          ))}
        </div>
      </div>
          
        <div className="mt-15 flex flex-col justify-center items-center">
          <h4 className="text-4xl md:text-6xl text-center mt-12 font-bold text-white">Popular Albums</h4>
          <div className="flex gap-x-16 mt-10">
            <BandAlbum albums={bands.BTS.albums} />
          </div>
        </div>
    </div>
  );
}