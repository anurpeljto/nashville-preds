import Link from 'next/link'
import React from 'react'

type MobileLinkProps = {
    href: string,
    text: string,
    toggleVisible: () => void
}

const MobileLink = ({href, text, toggleVisible}: MobileLinkProps) => {
  return (
    <Link onClick={toggleVisible} href={href} className='border-b-2 border-yellow-20 w-full flex items-center justify-center'>
        {text}
    </Link>
  )
}

export default MobileLink
