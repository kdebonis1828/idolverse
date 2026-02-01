import { bands } from "@/lib/bands";
import { BlackpinkIdolCards } from "../ui/features/blackpink/BlackpinkIdolCards";



export default function Blackpink() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center font-sans">        
       <div className="flex justify-around w-full">
        {
          bands.BLACKPINK.map(blackpink => (
            <BlackpinkIdolCards 
              key={blackpink.name}
              name={blackpink.name}
              image={blackpink.image}
            />
          ))
        }
       </div>
    </div>
  );
}
