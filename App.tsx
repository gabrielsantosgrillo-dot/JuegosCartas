
import React from 'react';
import { PROJECTS, Icons } from './constants';
import ProjectCard from './components/ProjectCard';
import MatrixHeader from './components/MatrixHeader';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Elementos decorativos animados en el fondo */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        
        <div className="max-w-6xl w-full px-6 py-12 flex flex-col items-center">
          {/* Header con estilo alegre */}
          <header className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 shadow-sm border border-slate-100 rounded-full text-sky-500 font-bold text-[11px] uppercase tracking-[0.2em]">
              <Icons.Star /> PORTAFOLIO DE JUEGOS
            </div>
            
            <h1 className="text-6xl md:text-8xl font-title font-black text-slate-900 tracking-tighter">
              MIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">JUEGOS</span>
            </h1>
            
            <div className="space-y-1">
              <p className="text-base text-slate-500 max-w-xl mx-auto font-medium">
                Una colección de experiencias divertidas creadas por
              </p>
              <p className="text-2xl font-title font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 tracking-widest uppercase">
                GABRIEL SANTOS GRILLO
              </p>
            </div>
          </header>

          {/* Cuadrícula de Juegos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className="animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Footer Alegre */}
          <footer className="mt-32 w-full pt-16 border-t border-slate-200 flex flex-col items-center">
            <div className="max-w-6xl w-full bg-white/60 glass-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-white mb-16 mx-auto">
              <div className="flex items-center gap-5 text-center md:text-left">
                <div className="p-4 bg-slate-900 rounded-3xl text-white shadow-xl rotate-3 hover:rotate-0 transition-transform">
                  <Icons.Github />
                </div>
                <div>
                  <h4 className="text-2xl font-title font-bold text-slate-800">¿Quieres ver todos mis proyectos y aplicaciones?</h4>
                  <p className="text-slate-500">Todo mi trabajo está disponible en mi repositorio.</p>
                </div>
              </div>
              
              <a 
                href="https://github.com/gabrielsantosgrillo-dot/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all duration-300 text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95"
              >
                PERFIL GITHUB
              </a>
            </div>
          </footer>
        </div>

        {/* Banner Matrix Visual en el Pie de página (Sin redondear) */}
        <div className="w-full mt-8 overflow-hidden">
          <MatrixHeader />
        </div>
        
        <div className="w-full text-center pb-12">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.4em]">
            Gabriel Santos Grillo • 2026 • Diversión Garantizada
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
