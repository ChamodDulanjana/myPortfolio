'use client';

import React from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";

type ResponsiveHeaderProps = {
  isOpen: boolean;
  onClose: () => void;
}

const ResponsiveNav = ({ isOpen, onClose }: ResponsiveHeaderProps) => {

  return (
    <div>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerHeader>Responsive Header</DrawerHeader>
          <DrawerBody>
            <p>This is the body content of the drawer.</p>
          </DrawerBody>
          <DrawerFooter>
            <Button onPress={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default ResponsiveNav;