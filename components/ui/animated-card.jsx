'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const AnimatedCard = ({
  children,
  className,
  hoverEffect = 'scale',
  withShadow = true,
  withBorder = false,
  withGradientBorder = false,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverEffects = {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-2',
    glow: 'hover:shadow-lg hover:shadow-primary/20',
    none: ''
  };

  const shadowClass = withShadow ? 'shadow-lg' : '';
  const borderClass = withBorder ? 'border border-border' : '';
  
  const gradientBorderClass = withGradientBorder 
    ? 'before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-primary before:to-accent before:content-[""] before:-z-10 relative'
    : '';

  return (
    <div
      className={cn(
        'bg-card text-card-foreground rounded-xl overflow-hidden transition-all duration-300',
        hoverEffects[hoverEffect],
        shadowClass,
        borderClass,
        gradientBorderClass,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;