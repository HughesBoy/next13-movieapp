"use client"

import React, {useState, useEffect} from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes';

const DarkMode = () => {

  const [mount, setMount] = useState(false);

  useEffect(()=>{
    setMount(true)
  },[])
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>

      {mount && currentTheme === 'dark' ? (
      <FaSun onClick={()=> setTheme('light')} className="cursor-pointer hover:text-amber-500" />
      ) : (
      <FaMoon onClick={()=> setTheme('dark')} className="cursor-pointer hover:text-amber-500" />
      )}


      {/* {mount && currentTheme === 'dark' ? (
      <div onClick={()=> setTheme('light')} className="cursor-pointer hover:text-amber-500">dark</div>
      ) : (
      <div onClick={()=> setTheme('dark')} className="cursor-pointer hover:text-amber-500">light</div>
      )} */}
    </>
  )
}

export default DarkMode