import React from 'react'

type ImgProps = {
    backgroundImage: string,
    title: string
}

const PlayerImg = (props: ImgProps) => {
    const {backgroundImage, title} = props;
  return (
    <div className={`h-full min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>

    </div>
  )
}

export default PlayerImg