'use client';

import React from 'react'

type DownloadBtnProps = {
    text: string;
    Icon: React.ElementType;
}

const DownloadBtn = ({text, Icon}: DownloadBtnProps) => {
  return (
    <button className="outline-none cursor-pointer py-[15px] px-6 rounded-full overflow-hidden bg-gray-900 text-gray-900 relative group border border-gray-400 shadow-md">
        <span className="relative z-10 transition-colors duration-400 group-hover:text-white font-semibold flex items-center gap-2 text-[16px]">
            {text}
            <Icon className=" group-hover:translate-y-1 transition group-hover:text-white" />
        </span>
        <div className="absolute top-0 -left-[10%] w-[120%] h-full bg-white skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full z-0"></div>
    </button>
  )
}

export default DownloadBtn