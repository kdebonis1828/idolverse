import { bands } from "@/lib/bands";
import { HuntrixIdolCards } from "../ui/features/huntrix/HuntrixIdolCards";



export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center font-sans ">        
       <div className="flex justify-around w-full">
        {
          bands.Huntrix.map(huntrix => (
            <HuntrixIdolCards 
              key={huntrix.name}
              name={huntrix.name}
              image={huntrix.image}
            />
          ))
        }
       </div>
    </div>
  );
}
