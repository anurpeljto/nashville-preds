import React from 'react'

type PlayerCardProps = {
  img: string,
  position?: string,
  name: string
}

const PlayerCard = ({img, position, name}: PlayerCardProps) => {
  return (
    <div className={`${img} object-contain h-[200px] bg-top bg-contain bg-no-repeat flex flex-col justify-end items-center`}>
      <div className='w-full flex flex-col items-center justify-center bg-purple-20 rounded-md'>
        <span className='text-sm text-white'>{name}</span>
        <span className='text-sm text-yellow-20 rounded-md'>{position}</span>
      </div>
    </div>
  )
}

export default PlayerCard
