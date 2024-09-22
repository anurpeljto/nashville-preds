import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section className='flex flex-col items-center justify-start md:w-2/3 w-full mx-auto min-h-screen'>
      <Image src='/hockey-field.png' alt='Ice rink diagram' height={1900} width={1900} />
    </section>
  )
}

export default Team
