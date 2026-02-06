"use client"
import { BandsList } from "./ui/components/BandsList";
import { Experiences } from "./ui/components/Experiences";
import { Footer } from "./ui/components/Footer";
import { HeroContent } from "./ui/components/HeroContent";
import { HeroVideo } from "./ui/components/HeroVideo";
import { MusicList } from "./ui/components/music_section/MusicList";



export default function Home() {
  return (
  <div>
    <div className="flex relative  top-0 flex-col  w-full  overflow-y-hidden  font-sans">        
        <HeroVideo className="object-cover opacity-65 h-181.25 overflow-y-hidden" src="/idols/kpop.mp4" />
        <HeroContent />
    </div>
    <div>
      <h1 className="text-white text-center font-bold text-6xl mt-15 mb-2">Bands</h1>
      <BandsList />
    </div>
    <div>
      <h1 className="text-white text-center font-bold text-6xl mt-40 mb-12">Experiences</h1>
      <Experiences />
    </div>

    <div className="flex justify-center mb-96">
      <MusicList />
    </div>
    <div>
      {/* reviews */}
    </div>

    <Footer />
  </div>      
  );
}
