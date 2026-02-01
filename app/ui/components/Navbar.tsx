import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex absolute right-1 z-30 justify-end p-12 mr-5 text-white gap-x-15 min-h-12 font-bold text-xl">
       <Link href={'/'}>Home</Link>
       <Link href={'/blackpink'}>Blackpink</Link>
       <Link href={'/bts'}>BTS</Link>
       <Link href={'/sajaboys'}>saja boys</Link>
    </div>
  )
}

export default Navbar
