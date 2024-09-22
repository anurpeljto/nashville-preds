import React from 'react'
import Image from 'next/image'

const PlayersGallery = () => {
  return (
    <section id='team' className='relative mx-auto w-full overflow-hidden'>
        
        <div className='flex h-full w-full items-start overflow-hidden space-x-0'>
            <Image src='/img-1.webp' alt='Player 1' height={500} width={500} className='opacity-60'/>
            <Image src='/celebrate.webp' alt='Player celebrating' height={500} width={500} className='opacity-60'/>
            <Image src='/img-2.webp' alt='Player 2' height={500} width={500} className='opacity-60'/>
            <Image src='/img-3.webp' alt='Player 3' height={500} width={500} className='opacity-60'/>
        </div>

        <div className='absolute w-full bg-gradient-to-b from-white to transparent z-30 h-[200px] top-0'>
        </div>

        <div className='absolute inset-0 left-[10px] flex flex-col items-center justify-center z-20 '>
            <p className='md:text-9xl text-6xl font-bold text-purple-20'>WELCOME TO</p>
            <p className='md:text-9xl text-6xl font-bold text-purple-20'>SMASHVILLE</p>
            <p className='md:text-4xl text-2xl font-bold text-purple-20 pt-5'>Meet our team</p>
        </div>

        <div className='absolute inset-0 sm:top-[-90px] top-[-60px] flex flex-col items-center justify-center z-20'>
            <p className='md:text-9xl text-6xl font-bold text-yellow-20'>WELCOME TO</p>
            <p className='md:text-9xl text-6xl font-bold text-yellow-20'>SMASHVILLE</p>
        </div>

        <div className='absolute bottom-0 w-full bg-gradient-to-t from-white to transparent z-30 h-[100px]'>
        </div>
    </section>
  )
}

export default PlayersGallery