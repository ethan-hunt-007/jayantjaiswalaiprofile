import React, { useState } from 'react';
import { Icon } from './Icon';

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-[#1A2E22] hover:bg-[#234832] text-white p-4 rounded-full shadow-lg border border-[#326747] flex items-center justify-center transition-all hover:rotate-90 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
        title="Theme Configuration"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      >
        <Icon name="settings" className="text-primary group-hover:text-white transition-colors" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-48 bg-[#1A2E22] border border-[#326747] rounded-xl p-2 shadow-xl animate-fade-in-up origin-bottom-right">
            <div className="text-xs font-bold text-gray-400 px-3 py-2 uppercase">Switch Theme</div>
            <div className="flex flex-col gap-1">
            <button className="text-left px-3 py-2 text-sm text-white hover:bg-[#234832] rounded-lg flex items-center gap-2 transition-colors">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(43,238,121,0.5)]"></div> Neon Dark
            </button>
            <button className="text-left px-3 py-2 text-sm text-white hover:bg-[#234832] rounded-lg flex items-center gap-2 transition-colors opacity-50 cursor-not-allowed">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div> Ocean Blue
            </button>
            <button className="text-left px-3 py-2 text-sm text-white hover:bg-[#234832] rounded-lg flex items-center gap-2 transition-colors opacity-50 cursor-not-allowed">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div> Sunset
            </button>
            </div>
        </div>
      )}
    </div>
  );
};