'use client';

import React, { useState } from 'react'

type SocialBtnProps = {
    Icon: React.ElementType;
    href: string;
}

const SocialBtn = ({ Icon, href }: SocialBtnProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  
  return (
    <a 
        className="relative w-14 h-14 overflow-hidden bg-white text-gray-600 rounded-full flex items-center justify-center 
        hover:text-gray-900 border border-gray-300 hover:scale-110 transition hover:border-2 hover:border-black/25 shadow-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={href}
        target="_blank"
    >
        {/* First Icon */}
        <Icon 
            className={`text-2xl ${
            isHovered 
                ? 'transition-transform duration-300 ease-in-out translate-x-[150%] -translate-y-[150%]' 
                : 'translate-x-0 translate-y-0'
            }`}
        />
        
        {/* Copy Icon */}
        <Icon 
            className={`text-2xl absolute ${
            isHovered 
                ? 'transition-transform duration-300 ease-in-out delay-100 translate-x-0 translate-y-0' 
                : '-translate-x-[150%] translate-y-[150%]'
            }`}
        />
    </a>
  )
}

export default SocialBtn