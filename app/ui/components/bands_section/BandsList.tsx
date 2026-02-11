"use client"
import { orbitron } from "../../fonts";
import { useEffect, useState } from "react";
import { BandMobileCarrousel } from "./BandMobileCarrousel";
import { BandDesktop } from "./BandDesktop";

export const BandsList = () => {
  
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 920);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`${orbitron.className} flex justify-around p-2`}>
      {
        isMobile 
        ? <BandMobileCarrousel />
        : <BandDesktop />
      }
    </div>
  );
};
