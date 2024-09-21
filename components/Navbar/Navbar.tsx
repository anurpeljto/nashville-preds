import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative z-30 mx-auto w-full bg-yellow-20 lg:px-20 md:px-10 lg:py-2 py-2 flex flex-row justify-between items-center gap-12 px-5'>
      <div className='sm:w-2/3 w-full flex flex-row justify-between sm:mx-auto'>
        <Link href='/' className='flex flex-row gap-2 items-center justify-center flex-shrink-0 cursor-pointer'>
          <Image src='/logo.svg' alt='logo' height={100} width={100}/>
        </Link>

        <div className='sm:flex hidden flex-row items-center justify lg:gap-12 gap-5 py-5 lg:px-10 px-5 whitespace-nowrap '>
          <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="/">Home</Link>
          <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="/about">About us</Link>
          <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="/team">Our team</Link>
          <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="/contact">Contact</Link>
        </div>
{/*  */}
        <div className='flex items-center justify-center sm:hidden'>
          <Image src='/menu.svg' alt='menu' height={40} width={40}/>
        </div>
        </div>
    </nav>
  )
}

export default Navbar