import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative group">
      {/* Modern Inner Shadow/Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-ayur-green/5 via-ayur-saffron/10 to-ayur-green/5 rounded-[1.5rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-ayur-green/30 group-focus-within:text-ayur-saffron transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-6 py-5 bg-white border border-ayur-green/5 rounded-[1.25rem] text-ayur-charcoal placeholder-ayur-charcoal/20 focus:outline-none focus:ring-4 focus:ring-ayur-saffron/10 focus:border-ayur-saffron/30 transition-all duration-300 font-medium text-lg shadow-sm"
          placeholder="Search by Adhyaya or topic..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
        {/* Right side decoration */}
        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
           <div className="flex gap-1">
             <div className="w-1 h-1 rounded-full bg-ayur-saffron/20"></div>
             <div className="w-1 h-1 rounded-full bg-ayur-saffron/40"></div>
             <div className="w-1 h-1 rounded-full bg-ayur-saffron/20"></div>
           </div>
        </div>
      </div>
    </div>
  );
};