import React from 'react';
import { Chapter } from '../types';
import { ArrowRight, Book } from 'lucide-react';

interface ChapterCardProps {
  chapter: Chapter;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({ chapter }) => {
  return (
    <a 
      href={chapter.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative bg-white rounded-[2rem] overflow-hidden border border-ayur-green/5 hover:border-ayur-saffron/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-ayur-green/5 hover:-translate-y-2 cursor-pointer"
    >
      <div className="p-8 relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-ayur-green/5 text-ayur-green font-heading font-extrabold text-sm border border-ayur-green/10 group-hover:bg-ayur-green group-hover:text-white transition-colors">
                {String(chapter.number).padStart(2, '0')}
              </span>
              <div className="h-1 w-4 bg-ayur-saffron/20 rounded-full group-hover:w-8 transition-all"></div>
           </div>
           <Book className="w-5 h-5 text-ayur-green/20 group-hover:text-ayur-saffron/40 transition-colors" />
        </div>

        <div className="mb-auto">
          <h3 className="text-2xl font-heading font-extrabold text-ayur-charcoal mb-2 leading-snug group-hover:text-ayur-green transition-colors">
            {chapter.title}
          </h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ayur-saffron mb-4">
            {chapter.subtitle}
          </p>
          <p className="text-ayur-charcoal/50 text-sm font-medium leading-relaxed">
            {chapter.description}
          </p>
        </div>

        <div className="mt-8">
          <div 
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-ayur-cream text-ayur-charcoal rounded-2xl font-heading font-bold text-sm hover:bg-ayur-saffron hover:text-white transition-all duration-300 group/btn"
          >
            <span>Launch Assessment</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      
      {/* Subtle modern decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-ayur-saffron/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-ayur-saffron/10 transition-colors"></div>
    </a>
  );
};