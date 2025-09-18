'use client';

import React from 'react';
import { experienceData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';


const CustomTimeline = () => {
    const { theme } = useTheme();   

  return (
    <div className="relative mt-10 sm:mt-20">
      {/* Vertical Line */}
      <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
      
      {experienceData.map((exp, index) => (
        <div key={index} className="relative flex items-start mb-12 last:mb-0">
          {/* Timeline Icon */}
          <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center relative z-10 shadow-md">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="ml-6 flex-1">
            {/* Date */}
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
              {exp.duration}
            </div>
            
            {/* Content Card */}
            <div className={`
              p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow
              ${theme === 'light' 
                ? 'bg-gray-50 border border-gray-200' 
                : 'bg-gray-800/50 border border-gray-700'
              }
            `}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {exp.role}
              </h3>
              
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3 italic">
                {exp.company}
              </p>
              
              {/* Responsibilities */}
              <div className="space-y-2">
                {exp.responsibilities?.map((item, idx) => (
                  <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomTimeline