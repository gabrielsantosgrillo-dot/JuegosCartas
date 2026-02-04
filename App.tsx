
import React, { useState } from 'react';
import { PROJECTS, Icons } from './constants';
import { ProjectCategory } from './types';
import ProjectCard from './components/ProjectCard';
import MatrixHeader from './components/MatrixHeader';

const App: React.FC = () => {
  // Cambio de estado inicial: Ahora inicia en vista PROFESIONAL
  const [view, setView] = useState<'GAMES' | 'PROFESSIONAL'>('PROFESSIONAL');

  const filteredProjects = view === 'GAMES' 
    ? PROJECTS.filter(p => p.category === ProjectCategory.ENTERTAINMENT || p.id === 5 || p.id === 6)
    : PROJECTS;

  const categories = Object.values(ProjectCategory);

  return (
    <div className={`min-h-screen relative transition-colors duration-700 overflow-x-hidden ${view === 'PROFESSIONAL' ? 'bg-[#f8fafc]' : 'bg-gradient-to-br from-fuchsia-50 via-sky-50 to-white'}`}>
      
      {/* Patrón de cuadrícula para vista profesional */}
      {view === 'PROFESSIONAL' && (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      )}

      {/* Fondo decorativo (solo para juegos) */}
      {view === 'GAMES' && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full blur-3xl animate-float bg-pink-300/20"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full blur-3xl animate-float bg-cyan-300/20" style={{ animationDelay: '2s' }}></div>
        </div>
      )}

      <main className="relative z-10 flex flex-col items-center">
        
        {/* Navegación de Vistas (Estilo burbuja suave) */}
        <nav className="sticky top-6 z-50 mt-6 mb-10 px-4">
          <div className="bg-white/80 backdrop-blur-xl shadow-xl p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200">
            <button 
              onClick={() => setView('GAMES')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'GAMES' ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Icons.Gamepad /> SECCIÓN JUEGOS
            </button>
            <button 
              onClick={() => setView('PROFESSIONAL')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'PROFESSIONAL' ? 'bg-slate-800 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Icons.Layout /> TODO EL PORTAFOLIO
            </button>
          </div>
        </nav>

        <div className="max-w-7xl w-full px-6 py-8 flex flex-col items-center">
          
          {/* Header Condicional */}
          <header className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            {view === 'GAMES' ? (
              <>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 shadow-sm border border-slate-100 rounded-full text-sky-500 font-bold text-[11px] uppercase tracking-[0.2em]">
                  <Icons.Star /> EXPLORA MIS JUEGOS
                </div>
                <h1 className="text-6xl md:text-8xl font-title font-black text-slate-900 tracking-tighter">
                  MIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">JUEGOS</span>
                </h1>
                <p className="text-base text-slate-500 font-medium">Una colección de experiencias interactivas creadas por</p>
              </>
            ) : (
              <>
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-slate-100 shadow-sm border border-slate-200 rounded-full text-slate-600 font-bold text-[11px] uppercase tracking-[0.2em]">
                  <Icons.Database /> PORTAFOLIO TÉCNICO
                </div>
                <h1 className="text-6xl md:text-8xl font-title font-black text-slate-800 tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900 uppercase">Proyectos</span>
                </h1>
                <p className="text-base text-slate-500 font-medium italic">Documentación detallada de software desarrollado por</p>
              </>
            )}
            <p className={`text-2xl font-title font-black tracking-widest uppercase transition-colors duration-700 ${view === 'PROFESSIONAL' ? 'text-slate-800' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500'}`}>
              GABRIEL SANTOS GRILLO
            </p>
          </header>

          {/* Grid de Proyectos */}
          {view === 'GAMES' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full space-y-20">
              {categories.map((cat, catIdx) => {
                const catProjects = PROJECTS.filter(p => p.category === cat);
                if (catProjects.length === 0) return null;
                return (
                  <section key={cat} className="animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${catIdx * 100}ms` }}>
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-2 h-8 bg-slate-800 rounded-full"></div>
                      <h2 className="text-sm font-black text-slate-800 uppercase tracking-[0.3em] flex-shrink-0">
                        {cat}
                      </h2>
                      <div className="h-[1px] flex-grow bg-slate-200"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {catProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} theme="professional" />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* Footer con Botón Premium de Perfil */}
          <footer className="mt-32 w-full pt-16 border-t border-slate-200 flex flex-col items-center">
            <div className={`glass-card p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-10 border-2 border-white/50 mb-16 mx-auto w-full transition-all duration-500 ${view === 'PROFESSIONAL' ? 'bg-white' : 'bg-white/60'}`}>
              <div className="flex items-center gap-6 text-center md:text-left flex-1">
                <div className={`hidden md:flex p-5 rounded-[2rem] text-white shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 ${view === 'PROFESSIONAL' ? 'bg-slate-800' : 'bg-slate-900'}`}>
                  <Icons.Github />
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-title font-black text-slate-800 tracking-tight">
                    ¿Quieres ver más?
                  </h4>
                  <p className="text-slate-500 font-medium">Accede a mi perfil oficial de GitHub para ver el código de todos mis proyectos.</p>
                </div>
              </div>
              
              <a 
                href="https://github.com/gabrielsantosgrillo-dot/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-4 px-12 py-6 font-black rounded-3xl transition-all duration-500 text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:scale-95 overflow-hidden w-full md:w-auto min-w-[300px]"
              >
                <div className={`absolute inset-0 transition-opacity duration-500 bg-slate-900 group-hover:opacity-90`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative z-10 flex items-center gap-3 text-white">
                  <Icons.Github />
                  <span>VER PERFIL COMPLETO</span>
                  <div className="group-hover:translate-x-1 transition-transform">
                    <Icons.ChevronRight />
                  </div>
                </div>
              </a>
            </div>
          </footer>
        </div>

        <div className="w-full mt-8 overflow-hidden shadow-2xl border-y border-slate-200/20">
          <MatrixHeader theme={view} />
        </div>
        
        <div className="w-full text-center pb-12">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.5em]">
            Gabriel Santos Grillo • {new Date().getFullYear()} • Ingeniería de Software
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
