"use client";

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'


const About = () => {
console.log('About component rendered', motion);
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I’m a passionate developer who loves turning ideas into meaningful digital 
        experiences. What excites me most about programming is the problem solving 
        journey taking a complex challenge, breaking it down, and finding elegant 
        solutions that make a real impact.
      </p>

      <p>
        I thrive in environments where I can learn, adapt, and collaborate, and I’m 
        always curious about exploring new ways to grow both personally and professionally.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}

export default About