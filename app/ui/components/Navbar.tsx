"use client"
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
    <div className={`${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"} fixed z-50 transition-colors duration-300  w-full h-24 md:h-28`}>
      <div className="hidden md:flex right-1 z-30 justify-end p-12 mr-5 text-white gap-x-15 min-h-12 font-bold text-xl ">
        <Link href={"/"}>Home</Link>
        <Link href={"/blackpink"}>Blackpink</Link>
        <Link href={"/bts"}>BTS</Link>
        <Link href={"/sajaboys"}>saja boys</Link>
      </div>
      <div className="flex fixed md:hidden top-5 right-5 text-2xl  z-30">
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
            <SheetClose asChild>
              <Link href={"/"}>Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/blackpink"}>Blackpink</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/bts"}>BTS</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/sajaboys"}>saja boys</Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
