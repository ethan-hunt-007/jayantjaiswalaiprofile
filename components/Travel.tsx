import React from 'react';
import { Icon } from './Icon';
import { TRAVEL_DESTINATIONS, FLAGS } from '../constants';

export const Travel: React.FC = () => {
  return (
    <section id="travel" className="max-w-[960px] w-full flex flex-col gap-8 scroll-mt-24">
      <div className="flex items-center gap-3 px-4">
        <Icon name="flight_takeoff" className="text-primary text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Travel & Adventures</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="bg-white dark:bg-[#1A2E22] rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-transparent hover:border-gray-200 dark:hover:border-[#326747] transition-all">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary">32</span>
            <span className="text-sm font-medium text-gray-500 dark:text-[#92c9a8] uppercase">Countries Visited</span>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {FLAGS.map((f, i) => (
              <span key={i} className="text-2xl hover:scale-125 transition-transform cursor-default" title={f.name}>
                {f.flag}
              </span>
            ))}
          </div>
        </div>

        {TRAVEL_DESTINATIONS.map((dest, index) => (
          <div
            key={index}
            className={`${dest.large ? 'md:col-span-2' : ''} relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all`}
          >
            <img
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={dest.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold">{dest.name}</h3>
                <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity">{dest.season}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};