import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <footer id='contact' className='relative grid grid-cols-[0.25fr_0.75fr] w-full mx-auto gap-4 bg-yellow-20'>
        <div className='bg-purple-20 h-full flex flex-col sm:gap-5 sm:py-10 sm:px-5 py-5 gap-2 px-2'>
            <Image src='/logo.svg' alt='Logo' height={100} width={100} />
            <span className='text-white font-bold text-lg'>Made by <a href='mailto:anurpeljto@gmail.com' className='text-yellow-20'> Anur Peljto</a> </span>
        </div>

        <div className='flex flex-col sm:flex-row py-5 sm:py-10 px-5 w-full justify-evenly gap-5'>
            
            <div className='flex flex-row justify-between sm:hidden'>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl text-purple-20 underline'>Contact</span>
                    <ul>
                        <li className='text-purple-20'>Email</li>
                        <li className='text-purple-20'>GitHub</li>
                        <li className='text-purple-20'>LinkedIn</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl text-purple-20 underline'>Learn more</span>
                    <ul>
                        <li className='text-purple-20'>About Nashville Predators</li>
                        <li className='text-purple-20'>Tickets</li>
                        <li className='text-purple-20'>Upcoming games</li>
                    </ul>
                </div>
            </div>


            <div className='sm:flex hidden flex-col gap-2'>
                    <span className='font-bold text-xl text-purple-20 underline'>Contact</span>
                    <ul>
                        <li className='text-purple-20'><a href="mailto:anurpeljto@gmail.com">Email</a></li>
                        <li className='text-purple-20'><a href="https://github.com/anurpeljto">GitHub</a></li>
                        <li className='text-purple-20'> <a href="https://www.linkedin.com/in/anur-peljto-073008298/">LinkedIn</a></li>
                    </ul>
                </div>

                <div className='sm:flex hidden flex-col gap-2'>
                    <span className='font-bold text-xl text-purple-20 underline'>Learn more</span>
                    <ul>
                        <li className='text-purple-20'>About Nashville Predators</li>
                        <li className='text-purple-20'>Tickets</li>
                        <li className='text-purple-20'>Upcoming games</li>
                    </ul>
                </div>

            

            <div className='flex flex-col gap-2'>
                <span className='font-bold text-xl text-purple-20 underline'>Our links</span>
                <ul className='flex flex-row gap-2'>
                        <Image src='/facebook.svg' alt='Facebook logo' height={20} width={20} />
                        <Image src='/twitter.svg' alt='Facebook logo' height={20} width={20} />
                        <Image src='/instagram.svg' alt='Facebook logo' height={20} width={20} />
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Contact
