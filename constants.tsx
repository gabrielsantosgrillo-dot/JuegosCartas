
import React from 'react';
import { Project, ProjectCategory } from './types';

export const Icons = {
  Gamepad: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  Play: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5 5 2.5 5 2.5 5 4 10 1 2 2.5 0 1 0 0-1.5 1.5 0 0 0-2.5 0c-.8 0-1.6.2-2.3.6C12.7 1.3 11.4 1.3 10.7 2.1c-.7-.4-1.5-.6-2.3-.6-.6 0-1.5 0-2.5.5-3 1.5-1 4.5-1 4.5.28 1.15.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  Layout: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  Book: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  ArrowLeft: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>,
  Database: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
};

export const PROJECTS: Project[] = [
  // SECCIÓN JUEGOS
  {
    id: 8,
    name: "¡No me des la lata!",
    url: "https://nomedeslalata.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/latas/01.png",
    desc: "Juego de lógica y memoria visual con estética de estantería de bebidas. El objetivo es descubrir secuencias aleatorias.",
    tech: "Memoria, Lógica",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 7,
    name: "Juegos de Cartas Españolas",
    url: "https://juegocartastradicional.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/deluxe/12-espadas.png",
    desc: "Plataforma multijuego (Cuatrola, Tute, Giley, 7 y Media, Culo). Homenaje a los clásicos de la baraja española sin necesidad de registro.",
    tech: "Juegos, Algoritmos, Tradición",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 11,
    name: "Edificio Navideño",
    url: "https://campoamor10.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/navidad.jpg",
    desc: "Experiencia comunitaria interactiva para los vecinos de Puertollano. Incluye 5 mini-juegos temáticos y batalla final.",
    tech: "Comunidad, Narrativa",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 5,
    name: "Go-Explora España",
    url: "https://exploramapa.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/mapa.jpg",
    desc: "Proyecto de ayuda al estudio de Geografía de España orientado a alumnos de 1º ESO mediante la exploración visual.",
    tech: "Educación, Geografía",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 6,
    name: "Go-Explora Europa",
    url: "https://gaexploraeuropa.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/gaexploraeuropa.jpg",
    desc: "Recurso educativo interactivo para el estudio de la Geografía de Europa (1º ESO) con mecánicas de descubrimiento.",
    tech: "Educación, Interactividad",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 9,
    name: "Juego de los Barcos",
    url: "https://juego-barcos.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/barcos/barcos.jpg",
    desc: "Versión moderna del clásico naval con una IA desafiante. Evolución de un proyecto universitario con interfaz optimizada.",
    tech: "Estrategia, IA, UI/UX",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 10,
    name: "Ahorcado Personalizado",
    url: "https://ahorcado-personalizable.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/ahorcadopersonalizable.jpg",
    desc: "Modalidades aleatoria y temática con pistas inteligentes y definiciones educativas. Equilibrio entre aprendizaje y diversión.",
    tech: "Diccionario, Educativo",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 12,
    name: "Residencia Maestro",
    url: "https://residenciamaestro.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/RESIDENCIA/LOGO.png",
    desc: "Inmersión de misterio en una residencia universitaria. Interrogatorios dinámicos con bots, búsqueda de pistas y eventos de tensión.",
    tech: "IA Bots, Misterio, Narrativa",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 13,
    name: "Proyecto Impostor",
    url: "#",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/impostor/inicio.jpg",
    desc: "Un juego de deducción social y engaño inspirado en dinámicas de roles ocultos. ¿Podrás descubrir al infiltrado?",
    tech: "Social Deduction, Logic",
    category: ProjectCategory.ENTERTAINMENT
  },

  // SECCIÓN TÉCNICA / OTROS
  {
    id: 14,
    name: "Ga-Archivos",
    url: "https://controlarchivos.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/controlarchivos/controlarchivos.jpg",
    desc: "Gestión y renombrado masivo de archivos. Privacidad total al funcionar en local, facilitando tareas repetitivas de organización documental.",
    tech: "File API, Batch Processing, Privacy",
    category: ProjectCategory.TECHNICAL
  },
  {
    id: 1,
    name: "Concurso Fotográfico",
    url: "https://concursofotografico.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/concursofotografico.jpg",
    desc: "Plataforma de gestión de multiconcursos fotográficos. Integra exitosamente MongoDB Atlas con Vercel.",
    tech: "MongoDB, Vercel, Security",
    category: ProjectCategory.TECHNICAL,
    observations: "Integración exitosa de base de datos en tiempo real."
  },
  {
    id: 2,
    name: "Ga-Optimo",
    url: "https://comprimir-imagenes.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/gaoptimo.jpg",
    desc: "Herramienta web para la compresión de imágenes desarrollada íntegramente con lógica en el lado del cliente.",
    tech: "Image Processing, Client-side",
    category: ProjectCategory.TECHNICAL
  },
  {
    id: 3,
    name: "Corrección Exámenes",
    url: "https://correccionexamenes.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/correccionexamenes.jpg",
    desc: "Sistema integral de corrección de exámenes tipo test. Gestión de baremos complejos y generación de PDFs.",
    tech: "PDF Generation, EAN-13",
    category: ProjectCategory.TECHNICAL
  },
  {
    id: 4,
    name: "Fray Andrés en Málaga",
    url: "https://viajeamalaga.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/frayenmalaga.jpg",
    desc: "Guía digital educativa diseñada para viajes escolares. Proporciona información interactiva para alumnos.",
    tech: "Educación, Guía Digital",
    category: ProjectCategory.EDUCATIONAL
  }
];
