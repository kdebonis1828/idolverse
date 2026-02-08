import { orbitron } from "../fonts"


export const Newsletter = () => {
  return (
    <div className="bg-transparent backdrop-blur-xs  h-84 w-[60%] rounded-3xl text-zinc-200 shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)]">
        <div className="flex flex-col justify-center items-center gap-y-10">
            <h1 className={`${orbitron.className} text-3xl font-bold p-2 text-center mt-5`}> Your Closer Connection to the Best of K-Pop <br />Join Our Newsletter</h1>
            <div className="relative w-auto items-center flex justify-center p-2">
                <input
                    type="email" 
                    placeholder="Enter your email" 
                    className="p-3 bg-white w-150 rounded-full text-black" 
                />
                <button className={`${orbitron.className} bg-purple-950 p-2 rounded-full absolute right-4 cursor-pointer font-bold text-slate-300`}> Suscribe</button>
            </div>
            <p className={`${orbitron.className} mt-5 `}>Your privacy matters. We safeguard your information for a secure and confidential experience</p>
        </div>
    </div>
  )
}


