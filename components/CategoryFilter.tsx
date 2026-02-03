
import React from 'react';
import { ProjectCategory } from '../types';

interface CategoryFilterProps {
  activeCategory: ProjectCategory | 'ALL';
  onCategoryChange: (category: ProjectCategory | 'ALL') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: (ProjectCategory | 'ALL')[] = [
    'ALL',
    ProjectCategory.ENTERTAINMENT,
    ProjectCategory.TECHNICAL,
    ProjectCategory.EDUCATIONAL
  ];

  const getShortName = (cat: string) => {
    if (cat === 'ALL') return 'TODOS';
    if (cat.includes('ENTRETENIMIENTO')) return 'JUEGOS';
    if (cat.includes('GESTIÓN')) return 'HERRAMIENTAS';
    if (cat.includes('EDUCATIVAS')) return 'ACADÉMICO';
    return cat;
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
            activeCategory === cat
              ? 'bg-amber-600 border-amber-600 text-slate-950 shadow-[0_0_15px_rgba(217,119,6,0.4)]'
              : 'bg-transparent border-slate-800 text-slate-500 hover:border-amber-600/50 hover:text-amber-500'
          }`}
        >
          {getShortName(cat)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
