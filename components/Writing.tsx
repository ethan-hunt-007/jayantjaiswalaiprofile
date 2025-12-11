import React from 'react';
import { Icon } from './Icon';
import { WRITING } from '../constants';

export const Writing: React.FC = () => {
  const featured = WRITING.find(a => a.featured);
  const others = WRITING.filter(a => !a.featured);

  return (
    <section id="writing" className="max-w-[960px] w-full flex flex-col gap-8 scroll-mt-24">
      <div className="flex items-center gap-3 px-4">
        <Icon name="edit_note" className="text-primary text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold">Thoughts & Writing</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4">
        {featured && (
          <article className="lg:col-span-3 bg-white dark:bg-[#1A2E22] rounded-2xl overflow-hidden shadow-sm flex flex-col h-full group cursor-pointer hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
            <div className="h-48 sm:h-64 overflow-hidden relative">
              <img
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={featured.image}
              />
              <div className="absolute top-4 left-4 bg-primary text-[#102217] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Featured
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                {featured.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs font-medium text-gray-400">
                <span>{featured.readTime}</span>
                <span>•</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </article>
        )}

        <div className="lg:col-span-2 flex flex-col gap-4">
          {others.map((article, index) => (
            <a key={index} href={article.link || '#'} className="bg-white dark:bg-[#1A2E22] p-5 rounded-xl flex flex-col justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#234832] transition-colors group h-full border border-transparent hover:border-gray-200 dark:hover:border-primary/20">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">{article.category}</span>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                {article.title}
              </h4>
              <span className="text-xs text-gray-500">{article.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};