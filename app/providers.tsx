'use client';

import React from 'react'
import ConditionalHeader from '@/components/conditional-header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { HeroUIProvider, ToastProvider } from '@heroui/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
        <ActiveSectionContextProvider>
            <HeroUIProvider>
                <ConditionalHeader />
                <ToastProvider placement='top-right'/>
                {children}
                <ThemeSwitch />
            </HeroUIProvider>
        </ActiveSectionContextProvider>
    </ThemeContextProvider>
  )
}

export default Providers