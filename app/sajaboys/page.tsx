"use client"
import { bands } from "@/lib/bands";

import {  useState } from "react";
import { SajaIdolCard } from "../ui/features/sajaboys/SajaIdolCards";



export default function Sajaboys() {
  const [demon, setDemon] = useState(false)
  return (
  
    <div className="flex flex-col min-h-screen overflow-x-hidden justify-around  font-sans ">        
        <div className="flex justify-around items-center">
          {
            bands["Saja Boys"].map(saja => (
              <SajaIdolCard 
              key={saja.name}
              idol={saja}
              demon={demon}
              />
            )
          ) 
        }
      </div>

      <button className="p-2 bg-blue-800 rounded-2xl cursor-pointer w-50" onClick={() => setDemon(!demon)}>Break hoonmon</button>
    </div>
  );
}
