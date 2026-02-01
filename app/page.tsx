"use client"



import { Experiences } from "./ui/components/Experiences";
import { HeroContent } from "./ui/components/HeroContent";
import { HeroVideo } from "./ui/components/HeroVideo";



export default function Home() {
  return (
  <div>
    <div className="flex relative  top-1 flex-col  w-full  overflow-y-hidden  font-sans">        
        <HeroVideo className="object-cover opacity-65 h-181.25 overflow-y-hidden" src="/idols/kpop.mp4" />
        <HeroContent />
    </div>
    <div>
      <h1 className="text-white text-center font-bold text-6xl mt-5 mb-2">Experiences</h1>
      <Experiences />
    </div>
  </div>      
  );
}
