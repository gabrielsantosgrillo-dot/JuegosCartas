
import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isComingSoon = project.url === "#";
  
  const colors = [
    'from-pink-500 to-rose-400',
    'from-cyan-500 to-blue-400',
    'from-amber-500 to-orange-400',
    'from-emerald-500 to-teal-400',
    'from-violet-500 to-purple-400'
  ];
  const colorClass = isComingSoon ? 'from-slate-400 to-slate-500' : colors[project.id % colors.length];

  return (
    <div className={`glass-card rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between h-full group border-2 border-white/50 p-6 ${isComingSoon ? 'opacity-90' : 'hover:shadow-2xl hover:-translate-y-2'}`}>
      
      {/* Miniatura del Juego */}
      <div className="relative mb-6">
        <div className="flex justify-center items-center h-40 w-full rounded-3xl overflow-hidden bg-white/30 p-2 shadow-inner border border-white/40">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.name} 
              className={`h-full w-auto object-contain rounded-2xl transition-transform duration-700 drop-shadow-lg ${!isComingSoon && 'group-hover:scale-110'}`}
            />
          ) : (
            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-white shadow-xl rotate-3`}>
              <Icons.Gamepad />
            </div>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <span className={`text-[9px] bg-white/95 px-3 py-1 rounded-full font-black tracking-widest uppercase shadow-sm ${isComingSoon ? 'text-slate-400' : 'text-slate-500'}`}>
            LVL {project.id}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-4 flex-grow">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${colorClass} text-white shadow-sm scale-90`}>
            <Icons.Gamepad />
          </div>
          <h4 className="text-xl font-title font-bold text-slate-800 tracking-tight leading-tight">
            {project.name}
          </h4>
        </div>
        
        <p className="text-sm text-slate-600 leading-relaxed min-h-[3rem]">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.split(', ').map((t, i) => (
            <span key={i} className={`text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-tight border ${isComingSoon ? 'text-slate-400 bg-slate-50 border-slate-100' : 'text-sky-600 bg-sky-50 border-sky-100'}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-8">
        {isComingSoon ? (
          <div className="flex items-center justify-center gap-3 py-4 bg-slate-200 text-slate-500 rounded-2xl text-sm font-black uppercase tracking-widest cursor-default">
            PRÓXIMAMENTE
          </div>
        ) : (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 py-4 bg-gradient-to-r ${colorClass} text-white rounded-2xl transition-all duration-300 text-sm font-black uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95`}
          >
            ¡JUGAR AHORA! <Icons.Play />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
