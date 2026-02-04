
import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps {
  project: Project;
  theme?: 'light' | 'professional';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme = 'light' }) => {
  const isComingSoon = project.url === "#";
  const isProfessional = theme === 'professional';
  
  const colors = [
    'from-sky-500 to-indigo-500',
    'from-slate-700 to-slate-900',
    'from-blue-600 to-cyan-500'
  ];
  
  const accentGradient = isProfessional ? 'from-slate-800 to-slate-700' : colors[project.id % colors.length];

  return (
    <div className={`rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between h-full group border p-6 
      ${isProfessional 
        ? 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl shadow-sm' 
        : 'glass-card border-white/50 hover:shadow-2xl hover:-translate-y-2'
      } 
      ${isComingSoon ? 'border-amber-100' : ''}`}
    >
      
      {/* Miniatura Contenida (Thumbnail) - Siempre en color por petición */}
      <div className="flex justify-center mb-6">
        <div className={`relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-[2rem] p-1 transition-all duration-500 
          ${isProfessional 
            ? 'bg-slate-50 border border-slate-100 group-hover:border-slate-300' 
            : 'bg-white/40 border-white/60 shadow-inner'}`}>
          
          <div className="w-full h-full rounded-[1.75rem] overflow-hidden flex items-center justify-center bg-white">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.name} 
                className={`h-full w-full object-contain transition-transform duration-700 
                  ${!isComingSoon && 'group-hover:scale-110'}`}
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${accentGradient} flex items-center justify-center text-white`}>
                <Icons.Gamepad />
              </div>
            )}
          </div>

          {/* Badge de Referencia */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
            <span className={`text-[7px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase shadow-sm border whitespace-nowrap
              ${isProfessional ? 'bg-slate-800 text-white border-slate-700' : 'bg-white text-slate-800 border-slate-100'}
            `}>
              REF-{project.id.toString().padStart(3, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Contenido Informativo */}
      <div className="space-y-4 flex-grow text-center">
        <div className="flex flex-col items-center gap-2">
          <h4 className={`text-xl font-title font-bold tracking-tight leading-tight transition-colors
            ${isProfessional ? 'text-slate-900' : 'text-slate-800'}`}>
            {project.name}
          </h4>
          <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${accentGradient}`}></div>
        </div>
        
        <p className={`text-xs leading-relaxed line-clamp-3 mx-auto max-w-[240px] ${isProfessional ? 'text-slate-500' : 'text-slate-600'}`}>
          {project.desc}
        </p>

        {project.observations && isProfessional && (
          <div className="mt-4 p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-[10px] leading-relaxed text-slate-500 text-left">
            <span className="text-slate-900 font-black block mb-1 uppercase tracking-tighter">Nota Técnica:</span>
            <span className="italic">"{project.observations}"</span>
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-1.5 pt-2">
          {project.tech.split(', ').map((t, i) => (
            <span key={i} className={`text-[8px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-tighter border
              ${isProfessional ? 'text-slate-500 bg-slate-100 border-slate-200' : 'text-sky-600 bg-sky-50 border-sky-100'}
            `}>
              {t}
            </span>
          ))}
        </div>
      </div>
      
      {/* Botón de Acción */}
      <div className="mt-8">
        {isComingSoon ? (
          <div className="flex items-center justify-center gap-2 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-amber-50 text-amber-600 border border-amber-200 animate-pulse">
            EN DESARROLLO
          </div>
        ) : (
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-4 text-white rounded-2xl transition-all duration-300 text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 bg-gradient-to-r ${accentGradient} 
              ${isProfessional ? 'hover:shadow-slate-200' : 'hover:shadow-sky-200'}`}
          >
            {isProfessional ? 'ACCEDER AL PROYECTO' : '¡JUGAR AHORA!'} <Icons.Play />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
