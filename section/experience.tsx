'use client'

import React from 'react'
import SectionHeading from '@/components/section-heading'
import { useSectionInView } from '@/hook/use-section-inview';
import CustomTimeline from '@/components/CustomTimeline';

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  
  return (
    <section
      id="experience"
      ref={ref}
      className="pt-28 max-w-[60rem] sm:mb-10 px-4"
    >
      <SectionHeading>My experience</SectionHeading>

      <CustomTimeline />
    </section>
  )
}

export default Experience