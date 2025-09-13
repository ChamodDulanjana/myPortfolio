"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { FaGithub } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { useSectionInView } from '@/hook/use-section-inview';
import { section } from 'framer-motion/client';



const About = () => {
  const { ref } = useSectionInView("About");

  const [contributions, setContributions] = useState(0);
  const [followersCount, setFollowersCount] = useState(0);
  const [repositoriesCount, setRepositoriesCount] = useState(0);

    useEffect(() => {
    async function fetchGithubStats() {
      try {
        const res = await fetch("/api/github", { method: "GET" });
        const data = await res.json();

        setContributions(data.contributions);
        setFollowersCount(data.followers);
        setRepositoriesCount(data.publicRepos);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    }

    fetchGithubStats();
  }, []);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="pt-28 max-w-[48rem] text-center leading-8 sm:mb-40 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
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
        <span className="italic">{" "} When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm also
        learning how to play the guitar.
      </p>

      <div className="mt-12 text-[16px] font-medium text-gray-800 flex flex-col items-center sm:flex-row sm:justify-center gap-8 sm:gap-20">
        <span className='flex items-center gap-2'>
          <FaGithub className='text-[18px]' />
          {contributions} Contributes
        </span>
        <span className='flex items-center gap-2'>
          <PiUsersBold className='text-[18px]' />
          {followersCount} Github Followers
        </span>
        <span className='flex items-center gap-2'>
          <FaGitAlt className='text-[18px]' />
          {repositoriesCount} Repositories
        </span>

      </div>
    </motion.section>
    // <motion.section 
    //   ref={ref} 
    //   id='about'
    //   className='mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 px-4 min-h-screen bg-green-200'
    // >

    // </motion.section>
  )
}

export default About