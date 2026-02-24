import { bands } from "@/lib/bands";
import { IdolCard } from "../ui/features/idolCard";



export default function Blackpink() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden items-center justify-center font-sans">        
       <div className="flex justify-around w-full">
        {
          bands.BLACKPINK.map(blackpink => (
            <IdolCard
              key={blackpink.name}
              idol={blackpink}
              logo="/idols/blackpink/bplogo.png"
              logoSize="w-20 h-20  absolute bottom-5"
              className=" 
                      border-pink-500 border-2 shadow-[0_0_40px_rgba(236,72,153,0.35)] 
                        bg-[url(/idols/blackpink/bpcard.png)] bg-center bg-cover scale-160
              "
              idolImageStyle="scale-110"
            />
          ))
        }
       </div>
    </div>
  );
}
