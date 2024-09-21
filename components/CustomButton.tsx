import React from 'react'

type ButtonProps = {
  title: string,
  variant: string
}

const CustomButton = (props : ButtonProps) => {
  const {title, variant} = props;
  return (
    <button className={`${variant} mt-10`}>
        {title}
    </button>
  )
}

export default CustomButton