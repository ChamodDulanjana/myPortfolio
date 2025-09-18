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
      className="pt-12 sm:pt-28 max-w-[60rem] mb-12 px-4"
    >
      <SectionHeading>My experience</SectionHeading>

      <CustomTimeline />
    </section>
  )
}

export default Experience