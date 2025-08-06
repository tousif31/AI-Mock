'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const GradientText = ({
  children,
  className,
  gradient = 'primary-to-accent',
  animate = false,
  ...props
}) => {
  const gradients = {
    'primary-to-accent': 'from-primary to-accent',
    'primary-to-secondary': 'from-primary to-secondary',
    'secondary-to-accent': 'from-secondary to-accent',
    'blue-to-purple': 'from-blue-600 to-purple-600',
    'green-to-blue': 'from-green-500 to-blue-500',
    'orange-to-red': 'from-orange-500 to-red-500',
  };

  const animationClass = animate ? 'bg-gradient-animated' : '';

  return (
    <span
      className={cn(
        'bg-gradient-to-r text-gradient',
        gradients[gradient],
        animationClass,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText;