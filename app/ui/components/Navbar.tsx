"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

const navlinks = [
  { href: "/", label: "Home" },
  { href: "/blackpink", label: "Blackpink" },
  { href: "/bts", label: "BTS" },
  { href: "/sajaboys", label: "Saja Boys" },
];
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"} fixed z-50 transition-colors duration-300  w-full h-24 md:h-28`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 21,
        }}
        className="absolute z-60 left-2 top-0 md:left-5 md:top-3"
      >
        <Image
          width={150}
          height={200}
          alt="idolverse logo"
          src={"/idols/logo.png"}
        />
      </motion.div>
      <div className="hidden md:flex relative right-1 z-30 justify-end p-12 mr-5 text-white gap-x-15 min-h-12 font-bold text-xl ">
        {navlinks.map((links, i) => (
          <Link key={links.href} href={links.href}>
            {links.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="flex  fixed md:hidden top-5 right-5 text-2xl  z-30">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <IoMenu className="size-12 text-white" />
            </button>
          </SheetTrigger>
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Select Band to navigate to its profile
            </SheetDescription>
          </SheetHeader>
          <SheetContent className="flex flex-col gap-8 text-white text-2xl py-24 px-14  bg-black/60 backdrop-blur-md">
            {navlinks.map((links, i) => (
              <SheetClose asChild key={links.href}>
                <Link href={links.href}>{links.label}</Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
