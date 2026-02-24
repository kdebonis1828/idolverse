import { orbitron } from "../fonts"


export const Newsletter = () => {
  return (
    <div className="bg-transparent backdrop-blur-xs w-[90%] md:w-[60%] rounded-3xl text-zinc-200 shadow-[0_0_15px_rgba(217,70,239,0.9),0_0_35px_rgba(34,211,238,0.6)] py-10 px-6">
      
      <div className="flex flex-col justify-center items-center text-center">
        
        <h1 className={`${orbitron.className} text-xl md:text-4xl font-bold mb-6`}>
          Your Closer Connection to the Best of K-Pop
          <span className="block mt-2 text-purple-300">
            Join Our Newsletter
          </span>
        </h1>

        {/* Input + Button */}
        <div className="w-full md:relative max-w-md flex flex-col md:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full text-black outline-none bg-white"
          />
          <button
            className={`${orbitron.className} w-full md:absolute md:right-1 md:w-auto bg-purple-950 p-3 md:p-2  rounded-full cursor-pointer font-bold text-slate-300 hover:bg-purple-800 transition`}
          >
            Subscribe
          </button>
        </div>

        <p className={`${orbitron.className} mt-10 text-xs md:text-sm text-zinc-400 max-w-md`}>
          Your privacy matters. We safeguard your information for a secure and confidential experience.
        </p>
      </div>
    </div>
  )
}