import React from 'react';
import { Icon } from './Icon';
import { HOBBIES } from '../constants';

export const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="max-w-[960px] w-full flex flex-col gap-8 scroll-mt-24">
      <div className="flex items-center gap-3 px-4">
        <Icon name="piano" className="text-primary text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Hobbies & Passion</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {HOBBIES.map((hobby, index) => {
          if (hobby.type === 'video') {
            return (
              <div key={index} className="sm:col-span-2 md:col-span-2 bg-gray-900 rounded-2xl overflow-hidden aspect-video relative group cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                <img
                  alt={hobby.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                  src={hobby.image}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <Icon name="play_arrow" className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-lg drop-shadow-md translate-y-1 group-hover:translate-y-0 transition-transform">{hobby.name}</h3>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-mono border border-white/10">
                  {hobby.duration}
                </div>
              </div>
            );
          } else {
             // Card type
             const isWide = hobby.status ? 'sm:col-span-2' : '';
             return (
              <div key={index} className={`bg-white dark:bg-[#1A2E22] rounded-2xl p-5 flex flex-col justify-between group hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border border-transparent hover:border-gray-200 dark:hover:border-[#326747] ${isWide}`}>
                <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${hobby.colorClass}`}>
                    <Icon name={hobby.icon || 'star'} className="" />
                    </div>
                    {hobby.status && (
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded animate-pulse">
                            {hobby.status}
                        </span>
                    )}
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white mb-1 group-hover:text-primary transition-colors">{hobby.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{hobby.description}</p>
                </div>
              </div>
             );
          }
        })}
      </div>
    </section>
  );
};