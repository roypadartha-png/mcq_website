import React, { useState, useMemo } from 'react';
import { DoctorProfile } from './components/DoctorProfile';
import { SearchBar } from './components/SearchBar';
import { ChapterCard } from './components/ChapterCard';
import { CHAPTERS } from './constants';
import { Chapter } from './types';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = useMemo(() => {
    return CHAPTERS.filter((chapter) =>
      chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chapter.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-ayur-cream selection:bg-ayur-saffron selection:text-white pb-12">
      {/* Modern Header Area */}
      <header className="bg-ayur-green text-ayur-cream py-8 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
           <div className="flex items-center gap-3 mb-3">
             <div className="h-px w-8 bg-ayur-saffron/50"></div>
             <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-ayur-saffron">Ayurveda Learning Portal</span>
             <div className="h-px w-8 bg-ayur-saffron/50"></div>
           </div>
           <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
             Ayurvedic Knowledge Base
           </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl mt-10 space-y-12">
        {/* Doctor Profile Section */}
        <section>
          <DoctorProfile />
        </section>

        {/* Search Section */}
        <section className="sticky top-4 z-20">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </section>

        {/* Chapters Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-heading font-bold text-ayur-green whitespace-nowrap">Adhyayas (Chapters)</h2>
            <div className="h-[2px] bg-ayur-green/10 flex-1"></div>
          </div>
          
          {filteredChapters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChapters.map((chapter) => (
                <ChapterCard key={chapter.id} chapter={chapter} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/40 rounded-3xl border border-dashed border-ayur-green/20">
              <p className="font-heading text-xl font-semibold text-ayur-green/40">No matching chapters found.</p>
              <p className="text-sm text-ayur-charcoal/40 mt-2">Try searching for a different topic or keyword.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-20 text-center py-10 border-t border-ayur-green/5">
        <p className="text-ayur-charcoal/40 text-sm font-medium">&copy; {new Date().getFullYear()} Vaidya's Wisdom Portal</p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-ayur-saffron">Preserving Ancient Knowledge</p>
      </footer>
    </div>
  );
}