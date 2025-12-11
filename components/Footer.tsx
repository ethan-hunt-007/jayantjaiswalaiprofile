import React from 'react';
import { Icon } from './Icon';
import { SOCIAL_LINKS, PROFILE } from '../constants';

export const Footer: React.FC = () => {
  return (
    <>
      <section id="connect" className="max-w-[600px] w-full flex flex-col items-center gap-8 text-center px-4 pb-20 scroll-mt-24">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Let's Build Together</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`${link.colorClass} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl`}
            >
              {link.svg ? link.svg : <Icon name={link.icon || 'link'} className="text-lg" />}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-gray-200 dark:border-[#234832] py-8 text-center text-sm text-gray-500 dark:text-[#92c9a8]">
        <p>© 2024 {PROFILE.name}. All rights reserved.</p>
      </footer>
    </>
  );
};