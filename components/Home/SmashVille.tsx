import React from 'react'
import Image from 'next/image'

const SmashVille = () => {
  return (
    <section id='about' className='flex flex-col items-start justify-start md:w-2/3 w-full mx-auto min-h-screen'>
        {/* <Image className='z-20 absolute self-center md:bottom-[-150px] sm:bottom-[-200px] hidden md:block' src='/nashville-predators.svg' alt='Text logo' height={300} width={300} /> */}
        <div className='flex flex-col items-center self-center z-30 w-full'>
            <p className='text-9xl text-yellow-20 font-bold'>OUR</p>
            <p className='text-9xl text-purple-20 font-bold'>STORY</p>
        </div>

        <div className='md:py-10 py-5 w-full flex md:flex-row flex-col items-center justify-between md:px-10 px-3 bg-yellow-20'>
          <div className='flex flex-col md:w-[600px] w-[300px]'>
              <p className='leading-8 tracking-wide text-lg'>In January 1997, a group led by Wisconsin businessman Craig Leipold made a formal presentation before the NHL requesting an expansion franchise. When Bettman and league officials visited Nashville to tour the arena, thousands gathered on the arena plaza to greet them. In June, the league granted conditional franchises to Nashville, Columbus, Ohio; Atlanta, and Minneapolis–Saint Paul.</p>
          </div>
        
          <div className='flex flex-col items-center gap-2'>
            <Image src='/leipold.webp' alt='Craig Leipold' height={300} width={300} className='z-30 object-contain rounded-lg shadow-md shadow-black'/>
            <p>Craig Leipold - June 25, 1997</p>
          </div>
        </div>

        <div className='md:py-10 py-5 w-full flex md:flex-row flex-col items-center justify-between md:px-10 px-3 bg-purple-20 rounded-b-lg'>
          <div className='flex flex-col md:w-[600px] w-[300px]'>
              <p className='leading-8 tracking-wide text-lg'>Ever since, the Predators™ have been on the ice</p>
          </div>
        
          <div className='flex flex-col items-center gap-2'>
            <Image src='/logo.svg' alt='Craig Leipold' height={300} width={300} className='z-30 object-contain rounded-lg'/>
            <p>Our new logo</p>
          </div>
        </div>

    </section>
  )
}

export default SmashVille