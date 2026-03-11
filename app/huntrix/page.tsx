import { bandsMembers } from "@/lib/bandsMembers";
import { HuntrixIdolCards } from "../ui/features/huntrix/HuntrixIdolCards";



export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center font-sans ">        
       <div className="flex justify-around w-full">
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
    </div>
  );
}
