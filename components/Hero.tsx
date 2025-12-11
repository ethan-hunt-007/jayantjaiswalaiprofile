import React from 'react';
import { Icon } from './Icon';
import { PROFILE, STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-[960px] w-full flex flex-col items-center gap-6 animate-fade-in-up">
      <div className="relative group cursor-pointer">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative size-32 md:size-40 rounded-full overflow-hidden border-4 border-background-light dark:border-[#234832] transition-transform duration-500 group-hover:scale-105">
          <img
            alt={`${PROFILE.name} Profile`}
            className="w-full h-full object-cover"
            src={PROFILE.avatar}
          />
        </div>
        <div
          className="absolute bottom-1 right-1 bg-primary text-[#102217] rounded-full p-1.5 border-4 border-background-light dark:border-background-dark animate-bounce-slow"
          title="Available for work"
        >
          <Icon name="check_circle" className="text-[18px] block" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent pb-2">
          {PROFILE.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-[#92c9a8] font-medium">
          {PROFILE.role}
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
          <Icon name="location_on" className="text-[18px]" />
          <span>{PROFILE.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
        {STATS.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#234832] p-4 rounded-xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
          >
            <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};