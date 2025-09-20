'use client';

import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/react";
import { links } from '@/lib/data';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-context';

type ResponsiveHeaderProps = {
  isOpen: boolean;
  onClose: () => void;
}

const ResponsiveNav = ({ isOpen, onClose }: ResponsiveHeaderProps) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div>
      <Drawer 
        isOpen={isOpen} 
        onClose={onClose} 
        size='xs'
        motionProps={{
          variants: {
            enter: { opacity: 1, x: 10 },
            exit: { x: 100, opacity: 0 },
          },
        }}
      >
        <DrawerContent>
          <DrawerHeader className='font-bold underline'>Menu</DrawerHeader>
          <DrawerBody>
            <ul className='flex flex-col gap-4 font-medium text-gray-700/70 dark:text-gray-400'>
              {links.map((link) => (
                <li key={link.hash}>
                  <Link 
                    href={link.hash} 
                    onClick={onClose}
                    className={activeSection === link.name ? 'text-gray-800 dark:text-gray-50' : ''}
                    onClickCapture={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default ResponsiveNav;