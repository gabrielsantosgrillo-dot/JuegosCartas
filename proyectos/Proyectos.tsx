
import React from 'react';
import { X, ExternalLink, Code, GraduationCap, Gamepad2, Briefcase, Rocket, ChevronRight, Globe, Github } from 'lucide-react';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const projectCategories = [
    {
      title: "APLICACIONES DE GESTIÓN Y HERRAMIENTAS TÉCNICAS",
      icon: <Briefcase className="w-5 h-5 text-amber-500" />,
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
      icon: <GraduationCap className="w-5 h-5 text-amber-500" />,
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
      icon: <Gamepad2 className="w-5 h-5 text-amber-500" />,
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
            <div className="p-3 bg-amber-600/20 rounded-2xl">
              <Rocket className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-serif text-amber-50 uppercase tracking-widest">Portafolio de Proyectos</h2>
              <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest">Gabriel Santos Grillo • Desarrollador</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-amber-500">
            <X className="w-8 h-8" />
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
                      Ver Proyecto <ExternalLink className="w-3 h-3" />
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
                <div className="p-3 bg-slate-950 rounded-full">
                  <Github className="w-8 h-8 text-amber-500" />
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
                GitHub Profile <ChevronRight className="w-4 h-4" />
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
};

export default ProjectsModal;
