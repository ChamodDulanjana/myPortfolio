'use client';

import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const MenuBtn = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <div className='fixed top-6 right-6 text-2xl z-50 text-gray-600 dark:text-gray-300'>
        <GiHamburgerMenu onClick={onOpen} />
    </div>
  )
}

export default MenuBtn