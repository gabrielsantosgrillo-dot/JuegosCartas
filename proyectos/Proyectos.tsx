import React from 'react';

// --- ICONOS SVG INTEGRADOS (Para no depender de librerías externas) ---
const Icons = {
  X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 12"/></svg>,
  ExternalLink: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Briefcase: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  GraduationCap: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  Gamepad2: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  Rocket: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-2 4-2"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 2-4 2-4"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5 5 2.5 5 2.5 5 4 10 1 2 2.5 0 1 0 0-1.5 1.5 0 0 0-2.5 0c-.8 0-1.6.2-2.3.6C12.7 1.3 11.4 1.3 10.7 2.1c-.7-.4-1.5-.6-2.3-.6-.6 0-1.5 0-2.5.5-3 1.5-1 4.5-1 4.5.28 1.15.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
};

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// SOLUCIÓN BLINDADA: Exportación directa y sin dependencias externas
export default function Proyectos({ isOpen, onClose }: ProjectsModalProps) {
  
  if (!isOpen) return null;

  const projectCategories = [
    {
      title: "APLICACIONES DE GESTIÓN Y HERRAMIENTAS TÉCNICAS",
      icon: <span className="w-5 h-5 text-amber-500 flex items-center justify-center"><Icons.Briefcase /></span>,
      projects: [
        {
          id: 1,
          name: "Concurso Fotográfico",
          url: "https://concursofotografico.vercel.app/",
          desc: "Proyecto multiconcurso evolucionado. Integración exitosa de MongoDB Atlas con Vercel. Gestión segura de credenciales mediante variables de entorno y optimización de imágenes.",
          tech: "MongoDB Atlas, Vercel, Optimización de imágenes"
        },
        {
          id: 2,
          name: "Ga-Optimo",
          url: "https://comprimir-imagenes.vercel.app/",
          desc: "Herramienta de compresión de imágenes desarrollada íntegramente en el lado del cliente, aprovechando la capacidad del navegador para manipular datos localmente.",
          tech: "Client-side Logic, Image Manipulation"
        }
      ]
    },
    {
      title: "APLICACIONES EDUCATIVAS / GUÍAS DIGITALES",
      icon: <span className="w-5 h-5 text-amber-500 flex items-center justify-center"><Icons.GraduationCap /></span>,
      projects: [
        {
          id: 4,
          name: "Fray Andrés en Málaga",
          url: "https://viajeamalaga.vercel.app/",
          desc: "Guía digital interactiva para un viaje escolar a Málaga, diseñada como encargo personalizado para facilitar la navegación y el aprendizaje.",
          tech: "Guía Digital, UX/UI"
        }
      ]
    },
    {
      title: "APLICACIONES DE ENTRETENIMIENTO",
      icon: <span className="w-5 h-5 text-amber-500 flex items-center justify-center"><Icons.Gamepad2 /></span>,
      projects: [
        {
          id: 5,
          name: "Juegos de Cartas Españolas",
          url: "https://juegocartastradicional.vercel.app/",
          desc: "Plataforma multijuego (Cuatrola, Tute, Giley, Siete y Media, Culo) que rinde homenaje a la baraja tradicional. Funciona sin registro ni conexión contra la máquina.",
          tech: "Lógica de Juego, Multi-dispositivo"
        },
        {
          id: 6,
          name: "¡No me des la lata!",
          url: "https://nomedeslalata.vercel.app/",
          desc: "Juego de lógica y memoria visual. El objetivo es descubrir una secuencia exacta de latas generada aleatoriamente en el menor tiempo posible.",
          tech: "Lógica, Memoria Visual"
        },
        {
          id: 7,
          name: "Juego de los Barcos",
          url: "https://juego-barcos.vercel.app/",
          desc: "Ampliación de un trabajo universitario con una interfaz pulida para el clásico combate naval.",
          tech: "IA de Juego, Algoritmia"
        },
        {
          id: 8,
          name: "Ahorcado Personalizado",
          url: "https://ahorcado-personalizado.vercel.app/",
          desc: "Adivinanza de palabras con modalidades aleatorias, temáticas y manuales. Incluye sistema de pistas inteligentes y definiciones educativas.",
          tech: "Sistema de Pistas, UI Optimizada"
        },
        {
          id: 9,
          name: "Edificio Navideño",
          url: "https://campoamor10.vercel.app/",
          desc: "Experiencia interactiva navideña para la comunidad de la Calle Campoamor en Puertollano. Incluye 5 mini-juegos temáticos y una batalla final.",
          tech: "Narrativa Interactiva, Local Storage"
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
      <div className="bg-slate-900 border border-amber-900/40 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-amber-900/20 flex justify-between items-center bg-slate-800/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-600/20 rounded-2xl text-amber-500">
               <span className="block w-6 h-6"><Icons.Rocket /></span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-serif text-amber-50 uppercase tracking-widest">Portafolio de Proyectos</h2>
              <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest">Gabriel Santos Grillo • Desarrollador</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-amber-500 cursor-pointer"
          >
             <span className="block w-8 h-8"><Icons.X /></span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-10">
          {projectCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-amber-900/10 pb-2">
                {category.icon}
                <h3 className="text-sm md:text-base font-serif text-amber-100 uppercase tracking-widest">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.projects.map((project) => (
                  <div key={project.id} className="group bg-slate-950/50 border border-amber-900/10 p-5 rounded-2xl hover:border-amber-600/40 transition-all flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h4 className="text-base font-serif text-amber-50 uppercase tracking-wider">{project.name}</h4>
                        <span className="text-[8px] bg-amber-600/10 text-amber-500 px-2 py-0.5 rounded-full font-black">PROYECTO {project.id}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').map((t, i) => (
                          <span key={i} className="text-[8px] text-slate-500 border border-slate-800 px-2 py-0.5 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 py-2 bg-amber-600/10 hover:bg-amber-600 text-amber-500 hover:text-slate-950 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest"
                    >
                      Ver Proyecto <span className="w-3 h-3 block"><Icons.ExternalLink /></span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* GitHub Update Section */}
          <div className="pt-6 border-t border-amber-900/20">
            <div className="bg-amber-600/5 border border-amber-600/20 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="p-3 bg-slate-950 rounded-full text-amber-500">
                  <span className="block w-8 h-8"><Icons.Github /></span>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-amber-50 uppercase tracking-widest">Mantente Actualizado</h4>
                  <p className="text-xs text-slate-400">Sigue mis últimos avances y nuevos lanzamientos en GitHub.</p>
                </div>
              </div>
              <a 
                href="https://github.com/gabrielsantosgrillo-dot/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black rounded-xl transition-all text-[10px] uppercase tracking-[0.2em] shadow-xl whitespace-nowrap"
              >
                GitHub Profile <span className="w-4 h-4 block"><Icons.ChevronRight /></span>
              </a>
            </div>
            <p className="mt-4 text-center text-[10px] text-slate-500 font-serif uppercase tracking-widest">
              Para estar actualizado de mis proyectos: <span className="text-amber-600/80">https://github.com/gabrielsantosgrillo-dot/</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 text-center border-t border-amber-900/20">
          <p className="text-[9px] text-slate-500 font-serif uppercase tracking-widest">Gabriel Santos Grillo • 2024-2026 • Innovación y Entretenimiento Digital</p>
        </div>
      </div>
    </div>
  );
}