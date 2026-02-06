
import { orbitron } from '../fonts'
import Link from 'next/link'
import {motion} from 'framer-motion'

export const Experiences = () => {
  return (
    <div className='flex flex-wrap justify-center relative'>
        <Link href='/'>
            <motion.div
                initial={{scale: 1 }}
                whileHover={{scale: 1.05}}
                whileTap={{scale:1.05}} 
                transition={{duration: 0.6, ease: 'easeInOut'}}
                className={`
                    ${orbitron.className}
                    shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)] 
                    bg-linear-to-r from-black/60 via-fuchsia-800 to-pink-900 
                    h-84 w-137.5 p-2 rounded-2xl mt-5 mb-10 ml-10 
                    relative`}
                    >
                <img
                className={`
                    absolute right-0 bottom-12
                    w-40 h-50 scale-150 object-contain mt-2
                    [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
                    src="/idols/blackpink/rosebp.png" 
                    alt="rose experience" 
                    />
                <h1 className='text-white text-3xl font-bold mt-5 ml-1'>Coffee M&G with Rosé</h1>
                <p className='text-white ml-1 mt-6'>Share a quite coffe with Rosé and attend an <br /> intimate listening session of her latest album</p>
                <h4 className='text-white ml-1 font-bold mt-10 text-2xl'>Exclusive gift:</h4>
                <div className=' text-white font-bold flex flex-col gap-y-1 mt-4 ml-1 text-sm'>
                    <p>Vip concert access</p>
                    <p>Merch Pack</p>
                    <p>Signed polaroid</p>
                    <p>Session video</p>
                </div>
            </motion.div>
        
        </Link>

            {/* experience 2 */}
            <Link href='/'>
                <motion.div
                    initial={{scale: 1 }}
                whileHover={{scale: 1.05}}
                whileTap={{scale:1.05}} 
                transition={{duration: 0.6, ease: 'easeInOut'}} 
                    className={`
                        ${orbitron.className}
                        shadow-[0_0_30px_rgba(168,85,247,0.45),0_0_80px_rgba(244,63,94,0.35)]
                        bg-linear-to-r from-zinc-950 via-purple-900 to-rose-900
                        h-64 w-137.5 p-2 rounded-2xl mt-5 mb-10 ml-10 
                        relative`}
                        >
                    <img
                    className={`
                        absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
                        w-64 h-80 scale-160 object-contain mt-3
                        [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                        [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
                        src="/idols/straykids/expstraykids.png" 
                        alt="rose experience" 
                        />
                    <h1 className='text-white text-3xl font-bold mt-5 text-center'>Stray Kids dance session</h1>
                </motion.div>
        
        </Link>
        {/* experience 2 */}
        <Link href='/'>
            <motion.div
                initial={{scale: 1 }}
                whileHover={{scale: 1.05}}
                whileTap={{scale:1.05}} 
                transition={{duration: 0.6, ease: 'easeInOut'}} 
                className={`
                    ${orbitron.className}
                    shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)] 
                    bg-linear-to-r from-black via-purple-950 to-fuchsia-900
                    h-64 w-137.5 p-2 rounded-2xl mt-5 ml-10 
                relative`}
                >
                <img
                className={`
                    absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
                    w-64 h-80 scale-160 object-contain mt-3
                    [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
                    src="/idols/straykids/expstraykids.png" 
                    alt="rose experience" 
                    />
                <h1 className='text-white text-3xl font-bold mt-5 text-center'>Stray Kids dance session</h1>
            </motion.div>
         </Link>
         {/* experience 4 */}
         <Link href='/'>
        <motion.div
                initial={{scale: 1 }}
                whileHover={{scale: 1.05}}
                whileTap={{scale:1.05}} 
                transition={{duration: 0.6, ease: 'easeInOut'}} 
            className={`
                absolute bottom-15
                ${orbitron.className}
                shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)] 
                bg-linear-to-r from-black via-purple-950 to-fuchsia-900
                h-84 w-137.5 p-2 rounded-2xl mb-10 ml-10 
                relative`}
                >
            <img
            className={`
                absolute right-5 bottom-12
                w-40 h-50 scale-150 object-contain mt-2
                [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
                src="/idols/bts/jungkookexp.png" 
                alt="rose experience" 
                />
            <h1 className='text-white text-3xl font-bold mt-5 ml-1'>Jungkook magic Seoul</h1>
            <p className='text-white ml-1 mt-6'>Enjoy a private night around Seoul  with <br /> Jungkook and create unforgettable <br /> memories together</p>
            <h4 className='text-white ml-1 font-bold mt-5 text-2xl'>Exclusive gift:</h4>
            <div className=' text-white font-bold flex flex-col gap-y-1 mt-4 ml-1 text-sm'>
                <p>Vip concert access</p>
                <p>Merch Pack</p>
                <p>Signed polaroid</p>
                <p>Session video</p>
            </div>
        </motion.div>
        </Link>
    </div>
  )
}

