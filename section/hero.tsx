'use client'

import React from 'react';
import Image from 'next/image';
import myImg from '@/public/my_image.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/hook/use-section-inview';
import SocialBtn from '@/components/social-btn';
import StyledBtn from '@/components/styled-btn';
import DownloadBtn from '@/components/download-btn';

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="pt-12 sm:pt-28 pb-12 sm:pb-28 max-w-[50rem] text-center sm:mb-0 z-10"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {/* My Image */}
            <Image
              src={myImg}
              alt="Chamod Dulanjana"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          {/* Waving Hand Emoji */}
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Intro Text */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Chamod Dulanjana. <br /></span> I'm a{" "}
        <span className="font-bold">Full-stack developer. <br /></span>{" "}
        <span>High level experience in software development 
            and web development knowledge, <br />
            producing quality work
        </span>
      </motion.h1>

      {/* Buttons and Social Links */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-[16px] sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Contact Me Button */}
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <StyledBtn text="Contact me" Icon={FaChevronRight} />
        </Link>

        {/* Download CV Button */}
        <a href="/Chamod Dulanjana's Resume.pdf" download={true}>
          <DownloadBtn text="Download CV" Icon={HiDownload} />
        </a>

        {/* Social Links */}
        <div className="flex items-center gap-8 sm:gap-4">
          <SocialBtn Icon={FaLinkedin} href="https://www.linkedin.com/in/chamod-dulanjana-071883266" />
          <SocialBtn Icon={FaGithubSquare} href="https://github.com/ChamodDulanjana" />
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
