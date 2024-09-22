'use client';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import MobileLink from './MobileLink';

const MobileMenu = () => {
    const [visible, setVisible] = useState(false);
    const handleToggleVisible = () => {
        setVisible(!visible);
    }

  return (
    <div className={`flex items-center justify-center sm:hidden`}>
          <Image onClick={handleToggleVisible} src='/menu.svg' alt='menu' height={40} width={40}/>
          <div className={`absolute top-0 right-0 bg-purple-20 w-[100px] flex flex-col items-center p-5 gap-5 ${visible ? `` : `hidden`}`}>
            {/* <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="#home">Home</Link>
            <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="#about">About us</Link>
            <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="#team">Our team</Link>
            <Link className='lg:text-xl text-lg hover:underline transition-all text-white' href="/contact">Contact</Link> */}
            <MobileLink toggleVisible={handleToggleVisible} href='#home' text='Home'/>
            <MobileLink href='#about' toggleVisible={handleToggleVisible} text='About us'/>
            <MobileLink href='#team' toggleVisible={handleToggleVisible} text='Our team'/>
            <MobileLink href='#contact' toggleVisible={handleToggleVisible} text='Contact'/>
          </div>
    </div>
  )
}

export default MobileMenu
