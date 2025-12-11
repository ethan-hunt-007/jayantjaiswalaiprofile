import React from 'react';
import { Icon } from './Icon';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-[960px] w-full flex flex-col gap-8 scroll-mt-24">
      <div className="flex items-center gap-3 px-4">
        <Icon name="work_history" className="text-primary text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
      </div>

      <div className="relative px-4">
        {/* Vertical timeline line */}
        <div className="absolute left-[34px] top-4 bottom-0 w-[2px] bg-gray-200 dark:bg-[#234832]"></div>

        {EXPERIENCE.map((job, index) => (
          <div key={index} className={`relative pl-12 group ${index !== EXPERIENCE.length - 1 ? 'pb-12' : 'pb-0'}`}>
            {/* Timeline Dot */}
            <div className={`absolute left-0 top-1 w-10 h-10 rounded-full bg-white dark:bg-[#102217] border-2 flex items-center justify-center z-10 transition-colors duration-300 ${index === 0 ? 'border-primary shadow-[0_0_15px_rgba(43,238,121,0.3)]' : 'border-gray-300 dark:border-[#326747] group-hover:border-primary'}`}>
              <Icon name={job.icon} className={`text-sm transition-colors duration-300 ${index === 0 ? 'text-primary' : 'text-gray-400 dark:text-[#326747] group-hover:text-primary'}`} />
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {job.company}
                </h3>
                <p className={`${index === 0 ? 'text-primary' : 'text-gray-500 dark:text-[#92c9a8]'} font-medium`}>
                  {job.role}
                </p>
              </div>
              <span className="text-sm font-mono text-gray-500 dark:text-[#92c9a8] bg-gray-100 dark:bg-[#1A2E22] px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                {job.period}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {job.description}
            </p>

            {job.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {job.metrics.map((metric, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-[#1A2E22] p-4 rounded-lg border border-gray-100 dark:border-[#234832] hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name={metric.icon} className="text-primary text-lg" />
                      <span className="text-xs font-bold uppercase text-gray-500 dark:text-[#92c9a8]">{metric.label}</span>
                    </div>
                    <span className="text-xl font-bold dark:text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            {job.tags && (
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 dark:bg-[#234832] dark:text-white hover:bg-primary hover:text-[#102217] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};