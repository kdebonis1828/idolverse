import { motion } from "framer-motion";
import Link from "next/link";
import { orbitron } from "../../fonts";
import Image from "next/image";

interface cardProps {
  title: string;
  description?: string;
  perks?: string[];
  image: string;
  alt: string;
  href: string;
  variant?: "detailed" | "centered";
  className?: string
}

export const ExpeciencesCard = ({
  title,
  description,
  perks,
  image,
  alt,
  href,
  variant = "centered",
  className = ""
}: cardProps) => {

    const baseStyles = `
  ${orbitron.className}
  shadow-[0_0_25px_rgba(168,85,247,0.45),0_0_60px_rgba(236,72,153,0.35)]
  relative rounded-2xl p-2
  cursor-pointer
  hover:shadow-[0_0_35px_rgba(168,85,247,0.7),0_0_80px_rgba(236,72,153,0.55)]
  transition-shadow
`
    const detailedStyles = `
        bg-gradient-to-r from-black/60 via-fuchsia-800 to-pink-900
        w-82 h-auto md:h-84 md:w-137.5 lg:mb-10
        `

    const centeredStyles = `
        bg-gradient-to-r from-black via-purple-950 to-fuchsia-900
        h-64 w-82 md:w-137.5 overflow-hidden
        `
  return (
    <Link href={href} aria-label={title}>
      <motion.article
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`${baseStyles} ${variant === "detailed" ? detailedStyles : centeredStyles} ${className}`}
      >
        {variant === "centered" && (
          <>
            <Image
              width={1200}
              height={1200}
              className={`absolute top-38 left-1/2 -translate-x-1/2 md:top-1/2 -translate-y-1/2 
                    w-96 h-64  md:w-64 md:h-80 md:scale-160 object-contain mt-3
                    [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
              src={image}
              alt={alt}
            />
            <h2 className="text-white text-2xl md:text-3xl font-bold mt-5 text-center">
              {title}
            </h2>
          </>
        )}

        {variant === "detailed" && (
          <>
            <Image
              width={1200}
              height={1200}
              className={`
                        absolute -right-2.5 -bottom-0.5 md:right-0 md:bottom-12 overflow-y-hidden
                        w-40 md:h-50 md:scale-150 object-contain mt-15 md:mt-2
                        [mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]
                        [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]`}
              src={image}
              alt={alt}
            />
            <h2 className="text-white text-2xl md:text-4xl font-bold mt-5 ml-1">
              {title}
            </h2>
            {
                description && (
                    <p className="text-white ml-1 mt-6 text-base max-w-64 md:max-w-100">
                    {description}
                    </p>
                )
            }
            <h4 className="text-white ml-1 font-bold mt-10 text-xl md:text-2xl">
              Exclusive gift:
            </h4>
            <div className=" text-white font-bold flex flex-col gap-y-1 mt-4 ml-1 text-sm">
              {perks && (
                <ul>
                  {perks.map((perk, i) => (
                    <li key={i}>{perk}</li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </motion.article>
    </Link>
  );
};
