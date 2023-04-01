import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import DarkMode from './DarkMode'

const Header = () => {
  return (
    <>
    

      <div className="border flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
        <div className="flex">
          <MenuItem title={'Home'} path={'/'} />
          <MenuItem title={'About'} path={'/about'} />
        </div>
        <Link href={"/"}>
          <h2 className="text-xl">movie database</h2>
        </Link>
        <DarkMode />
      </div>
    
      
    </>
  )
}

export default Header