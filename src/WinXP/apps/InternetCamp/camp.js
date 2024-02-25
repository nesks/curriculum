import React, { useState, useRef } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';

const Camp = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default Camp;
