'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedButton from './animated-button';
import ThemeToggle from './theme-toggle';

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-b border-border z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-border/50">
                <img src="/logo.svg" alt="AI Mock Interview Logo" className="h-6 w-6 dark:invert transition-all duration-200" />
                <span className="text-lg font-bold">AI Mock Interview</span>
              </div>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-lg text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <ThemeToggle />
                <div className="flex space-x-4">
                  <Link href="/sign-in" className="text-sm font-medium hover:text-primary transition-colors">
                    Login
                  </Link>
                  <Link href="/sign-up" passHref legacyBehavior>
                    <a>
                      <AnimatedButton size="sm" className="shadow-lg bg-gradient-to-r from-primary to-accent text-white font-medium px-4 py-2" withHoverScale withPulse>
                        Sign Up Free
                      </AnimatedButton>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;