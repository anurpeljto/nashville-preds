import Image from 'next/image'
import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {
  return (
    <section className='relative mx-auto md:w-2/3 lg:px-20 md:px-10 sm:py-44 py-20 flex flex-row items-start justify-between sm:gap-12 px-5'>
        <div className='flex flex-col items-start justify-center z-30'>
            <h1 className='lg:text-9xl text-6xl text-yellow-20 font-extrabold'>Stand <br /> with <span className='text-purple-20'>us</span>.</h1>
            <div className='py-10 md:p-0'>
              <p className='text-yellow-20 text-lg'>Welcome to the (un)official website of the Nashville Predators™</p>
              <CustomButton title='Download our official app' variant='btn_purple'/>
            </div>
        </div>

        <Image className='z-20 sm:block hidden' src='/player.png' alt='stand' height={600} width={600}/>
        <Image className='z-20 sm:hidden block' src='/player.png' alt='stand' height={500} width={500}/>
    </section>
  )
}

export default Hero