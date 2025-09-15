'use client';

import React from 'react'

type StyledBtnProps = {
    text: string;
    Icon: React.ElementType;
}

const StyledBtn = ({text, Icon}: StyledBtnProps) => {
  return (
    <button className="outline-none cursor-pointer py-[15px] px-6 text-[17px] rounded-full overflow-hidden bg-white text-white relative group border border-gray-300 shadow-md">   
        <span className="relative z-10 transition-colors duration-400 group-hover:text-gray-900 font-semibold flex items-center gap-2 text-[16px]">
            {text}
            <Icon className='group-hover:translate-x-1 transition mt-1 text-lg' />
        </span>
        <div className="absolute top-0 -left-[10%] w-[120%] h-full bg-gray-900 skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full z-0"></div>
    </button>
  )
}

export default StyledBtn