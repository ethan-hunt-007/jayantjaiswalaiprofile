import React from 'react';
import { Icon } from './Icon';
import { HALL_OF_FAME } from '../constants';

export const HallOfFame: React.FC = () => {
  return (
    <section id="hall-of-fame" className="max-w-[960px] w-full flex flex-col gap-8 scroll-mt-24">
      <div className="flex items-center gap-3 px-4">
        <Icon name="emoji_events" className="text-primary text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Hall of Fame</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {HALL_OF_FAME.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-video cursor-pointer shadow-lg hover:shadow-2xl transition-all">
            <img
              alt={item.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-300"
              src={item.image}
            />
            
            {item.isVideo ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(43,238,121,0.5)]">
                   <Icon name="play_arrow" className="text-[#102217]" />
                 </div>
                 <h3 className="text-white text-xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                 <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 delay-75">{item.subtitle}</p>
               </div>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-bold transform translate-y-1 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                <p className="text-primary text-sm font-medium mt-1">{item.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};