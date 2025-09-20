'use client';

import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 px-4 text-center text-gray-500">
      <small className="mb-1 block text-xs">
        &copy; {currentYear} Chamod Dulanjana.
      </small>
      <p className="text-xs">
         All rights reserved.
      </p>
    </footer>
  )
}

export default Footer