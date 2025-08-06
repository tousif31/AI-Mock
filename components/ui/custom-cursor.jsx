'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.onclick ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');
      
      setLinkHovered(isLink);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => {
      removeEventListeners();
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Don't render the custom cursor on touch devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Main cursor */}
        <div 
          className={`absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--primary)',
            boxShadow: '0 0 10px rgba(var(--primary), 0.6)',
          }}
        />
        
        {/* Cursor ring */}
        <div 
          className={`absolute rounded-full border transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${clicked ? 'scale-75 opacity-30' : ''} ${linkHovered ? 'scale-150 opacity-70' : ''}`}
          style={{
            width: '40px',
            height: '40px',
            borderColor: 'var(--primary)',
            borderWidth: '1px',
            opacity: 0.5,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;