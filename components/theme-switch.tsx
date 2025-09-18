'use client';

import { useTheme } from 'next-themes';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-gray-200 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-1 border-gray-300 border-opacity-40 
      shadow-md rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all cursor-pointer z-50 dark:bg-gray-950 dark:border-gray-200/50"
      onClick={ () => setTheme(theme === "light" ? "dark" : "light") }
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  )
}

export default ThemeSwitch