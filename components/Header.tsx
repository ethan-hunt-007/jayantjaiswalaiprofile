import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { PROFILE } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Hall of Fame', href: '#hall-of-fame' },
    { name: 'Writing', href: '#writing' },
    { name: 'Travel', href: '#travel' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-[#e5e5e5] dark:border-[#234832]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Icon name="terminal" className="text-primary transition-transform group-hover:rotate-12" style={{ fontSize: '28px' }} />
          <span className="text-lg font-bold tracking-tight">{PROFILE.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-sm font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-primary/90 text-[#112218] px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(43,238,121,0.3)] hover:shadow-[0_0_20px_rgba(43,238,121,0.5)]">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};