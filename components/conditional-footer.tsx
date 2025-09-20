'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/section/footer';

const ConditionalFooter = () => {
  const pathname = usePathname();

  // Pages where header should be hidden
  const hideHeaderPaths = ['/all-projects'];
  
  if (hideHeaderPaths.includes(pathname)) {
    return null;
  }
  
  return <Footer />;
}

export default ConditionalFooter;