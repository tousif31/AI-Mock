'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const AnimatedButton = forwardRef(({ 
  children,
  className,
  variant = 'default',
  size = 'default',
  withGradient = false,
  withHoverScale = true,
  withPulse = false,
  asChild,
  ...props
}, ref) => {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-12 rounded-md px-8 text-lg',
    xl: 'h-14 rounded-lg px-10 text-xl',
    icon: 'h-10 w-10',
  };

  const gradientClass = withGradient ? 'bg-gradient-to-r from-primary to-secondary text-white' : '';
  const hoverScaleClass = withHoverScale ? 'hover-scale' : '';
  const pulseClass = withPulse ? 'animate-pulse-slow' : '';
  
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none shadow-lg',
    variantClasses[variant],
    sizeClasses[size],
    gradientClass,
    hoverScaleClass,
    pulseClass,
    className
  );

  return (
    <button ref={ref} className={buttonClasses} {...props}>
      {children}
    </button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;