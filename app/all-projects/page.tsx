import React from 'react'
import { projectsData } from '@/lib/data'
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const AllProjects = () => {
  return (
    <div className='w-full min-h-screen py-10 px-4 max-w-7xl mx-auto'>
      <div className='flex flex-wrap gap-8 justify-center'>
        {projectsData.map((project, index) => (
        // Project Card
        <div key={index} className='max-w-xl min-h-64 rounded-md overflow-hidden shadow-lg bg-white dark:bg-gray-800 z-10'>
          <div className='px-6 py-4 relative h-full'>
            <h2 className='font-bold text-xl mb-2 '>{project.title}</h2>
            <p className='text-gray-700 dark:text-gray-400 text-base'>{project.description}</p>
            {/* Tags */}
            {project.tags && (
              <div className='mt-4'>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className='inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2'>
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {/* Links */}
            <div className='mt-5 flex space-x-4 sm:absolute sm:bottom-4'>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='bg-gray-800 dark:bg-gray-600 rounded-lg px-4 py-2 text-gray-200 hover:bg-gray-700 dark:hover:bg-gray-500'
                >
                  <FaGithub className='inline-block mr-2 mb-1' />
                  Visit GitHub
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='px-4 py-2 text-gray-700 hover:underline dark:text-gray-300'
                >
                  <LuSquareArrowOutUpRight className='inline-block mr-2 mb-1' />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AllProjects