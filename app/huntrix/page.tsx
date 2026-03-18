"use client"
import { bandsMembers } from "@/lib/bandsMembers";
import { HuntrixIdolCards } from "../ui/features/huntrix/HuntrixIdolCards";
import { BandHero } from "../ui/components/bands_page/BandHero";
import { bands } from "@/lib/bands";
import { BandAlbum } from "../ui/components/bands_page/BandAlbum";



export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen  items-center justify-center font-sans ">        
 
        <div className="flex text-center mt-48 h-full" >
            <BandHero 
                name={bands.HUNTRIX.name}
                description={bands.HUNTRIX.description}
                bandImage={bands.HUNTRIX.bandPhoto}
                quote={bands.HUNTRIX.quote}
                classname="lg:w-[70%] lg:h-125"
            />
          </div>       
       
 <h4 className="text-4xl md:text-6xl text-center mt-22 font-bold text-white">Members</h4>
       <div className="flex flex-col md:flex-row mb-22 mx-auto gap-y-22 justify-around w-full mt-16 lg:mt-32">
        {
          bandsMembers.Huntrix.map(huntrix => (
            <HuntrixIdolCards 
              key={huntrix.name}
              name={huntrix.name}
              image={huntrix.image}
            />
          ))
        }
       </div>

       <div className="mt-15 flex flex-col justify-center items-center mb-22">
                         <h4 className="text-4xl md:text-6xl text-center  mb-12 font-bold text-white">Popular Albums</h4>
                         <div >
                           <BandAlbum albums={bands.HUNTRIX.albums} />
                         </div>
                       </div>
    </div>
  );
}
