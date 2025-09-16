'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/hook/use-section-inview';

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  
  return (
    <section
      id="experience"
      ref={ref}
      className="pt-28 max-w-[50rem] sm:mb-40 px-4"
    >
      <SectionHeading>My experience</SectionHeading>

      <div>
        Experience works!
      </div>
    </section>
  )
}

export default Experience