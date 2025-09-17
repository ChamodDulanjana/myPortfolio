'use client';

import { motion } from 'framer-motion';
import React from 'react'
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { skillsData } from '@/lib/data';

// Animation variants for fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  
  return (
    <section
      id="skills"
      ref={ref}
      className="pt-28 max-w-[50rem] text-center sm:mb-10 px-4"
    >
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800 mt-10">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`bg-white borderBlack rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-default font-semibold dark:bg-white/10 dark:text-white/80`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div>
              <skill.icon className="inline mr-3 mb-0.5 text-2xl" />
              {skill.name}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills