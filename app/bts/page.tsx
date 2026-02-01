import { bands } from "@/lib/bands";
import { BtsIdolCards } from "../ui/features/bts/BtsIdolCards";



export default function BTS() {
  return (
    <div className="flex flex-col gap-6 w-full flex-wrap min-h-screen overflow-x-hidden items-center justify-center font-sans">        
       <div className="grid grid-flow-col grid-rows-2 shrink-0 gap-6 gap-y-20">
        
        {
          bands.BTS.map(bts => (
            <BtsIdolCards 
              key={bts.name}
              name={bts.name}
              image={bts.image}
            />
          ))
        }
       </div>
    </div>
  );
}
