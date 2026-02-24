"use client"
import { BandsList } from "./ui/components/bands_section/BandsList";
import { Experiences } from "./ui/components/experiences_section/Experiences";
import { Footer } from "./ui/components/Footer";
import { HeroContent } from "./ui/components/HeroContent";
import { HeroVideo } from "./ui/components/HeroVideo";
import { MusicList } from "./ui/components/music_section/MusicList";
import { Newsletter } from "./ui/components/Newsletter";



export default function Home() {
  return (
  <div>
    <div className="flex relative  top-0 flex-col  w-full  overflow-y-hidden  font-sans">        
        <HeroVideo className="h-[70vh] md:h-[90vh] object-cover opacity-98  overflow-x-hidden rounded-b-3xl" src="/idols/kpopbg.mp4" />
        <HeroContent />
    </div>
    <div>
      <h1 className="text-white text-center font-bold text-5xl md:text-6xl mt-15 mb-2">Bands</h1>
      <BandsList />
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className=" text-white text-center font-bold text-5xl md:text-6xl mt-40 mb-12">Experiences</h1>
      <Experiences />
    </div>

    <div className="flex justify-center">
      <MusicList />
    </div>
    <div className="flex justify-center mt-24 mb-24">
      <Newsletter />
    </div>
  </div>      
  );
}
