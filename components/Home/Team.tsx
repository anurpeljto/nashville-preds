import Image from 'next/image'
import React from 'react'
import PlayerCard from '../PlayerCard'

const Team = () => {
  return (
    <section className='relative md:grid md:grid-cols-4 md:w-2/3 w-full py-10 mx-auto gap-4 grid grid-cols-2 px-5'>
      {/* <Image src='/hockey-field.png' alt='Ice rink diagram' height={1900} width={1900}  className='sm:block hidden'/> */}
      {/* playercards */}
      {/* <div className='sm:block hidden'>
        <PlayerCard img='bg-bg-player-6' position='absolute left-0 top-[240px]' name='#30 Magnus Chrona'/>
        <PlayerCard img='bg-bg-player-1' position='absolute left-80 top-28' name='#59 Roman Josi'/>
        <PlayerCard img='bg-bg-player-2' position='absolute left-80 bottom-28' name='#84 Luke Prokop'/>
        <PlayerCard img='bg-bg-player-3' position='absolute left-[500px] top-5' name='#9 Filip Forsberg'/>
        <PlayerCard img='bg-bg-player-4' position='absolute left-[500px] bottom-5' name='#77 Luke Evangelista'/>
        <PlayerCard img='bg-bg-player-5' position='absolute left-[500px] top-[230px]' name='#42 Anthony Angello '/>
      </div> */}

        <PlayerCard img='bg-bg-player-6' name='#30 Magnus Chrona' position='Goaltender'/>
        <PlayerCard img='bg-bg-player-1' name='#59 Roman Josi' position='Defender'/>
        <PlayerCard img='bg-bg-player-2' name='#84 Luke Prokop' position='Defender'/>
        <PlayerCard img='bg-bg-player-3' name='#9 Filip Forsberg' position='Left Winger'/>
        <PlayerCard img='bg-bg-player-4' name='#77 Luke Evangelista' position='Right Winger'/>
        <PlayerCard img='bg-bg-player-5' name='#42 Anthony Angello ' position='Center'/>
        <PlayerCard img='bg-bg-player-7' name='#25 Joakim Kemell' position='Right Winger'/>
        <PlayerCard img='bg-bg-player-8' name='#83 Adam Wilsby' position='Defender'/>
    </section>
  )
}

export default Team
