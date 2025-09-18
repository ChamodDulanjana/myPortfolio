'use client';

import React from 'react'
import Header from '@/section/header'
import { usePathname } from 'next/navigation';

const ConditionalHeader = () => {
  const pathname = usePathname();

  // Pages where header should be hidden
  const hideHeaderPaths = ['/all-projects'];
  
  if (hideHeaderPaths.includes(pathname)) {
    return null;
  }
  
  return <Header />;
}

export default ConditionalHeader;