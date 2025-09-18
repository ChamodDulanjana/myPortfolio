'use client';

import React from 'react'
import ConditionalHeader from '@/components/conditional-header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { ThemeProvider } from 'next-themes';
import ClientWrapper from './api/client-wrapper';
import ConditionalFooter from '@/components/conditional-footer';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ActiveSectionContextProvider>
            <ClientWrapper>
                <HeroUIProvider>
                    <ConditionalHeader />
                    <ToastProvider placement='top-right'/>
                    {children}
                    <ThemeSwitch />
                    <ConditionalFooter />
                </HeroUIProvider>
            </ClientWrapper>
        </ActiveSectionContextProvider>
      </ThemeProvider>
  )
}

export default Providers