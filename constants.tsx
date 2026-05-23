
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
    id: 18,
    name: "Reto Millón",
    url: "https://retomillon.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/millon/millon.jpg",
    desc: "Juego de preguntas, los usuarios podrán competir en salas personalizadas o jugar en solitario a través de ocho rondas de dificultad progresiva. El sistema integra más de 4,400 preguntas categorizadas en diversos temas",
    tech: "Juegos",
    category: ProjectCategory.ENTERTAINMENT
  },
   {
    id: 17,
    name: "Bingo",
    url: "https://cantarbingo.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/bingo/bingo.png",
    desc: "Es una reimplementación del clásico juego de Bingo que ofrece dos modalidades distintas: una experiencia individual y un modo multijugador interactivo.",
    tech: "Juegos",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 16,
    name: "Retro TV",
    url: "https://tvmundo.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/tv/tv.jpg",
    desc: "reproductor de televisión con una interfaz retro que simula un televisor de tubo. Está diseñada para ofrecer una experiencia nostálgica mientras se visualiza contenido de televisión moderno a través de internet.",
    tech: "TV",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 15,
    name: "Inazuma Break: El Código Prohibido",
    url: "https://inazumabreak.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/inazuma/inazuma.jpg",
    desc: "Experiencia inmersiva de 'hacking' ciber-deportivo. Detén el virus Dark Vector usando un escáner de algoritmos EAN-13 para rescatar leyendas del fútbol atrapadas en códigos de barras.",
    tech: "EAN-13, Scanning, RPG",
    category: ProjectCategory.ENTERTAINMENT
  },
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
    name: "GA-explora España",
    url: "https://exploramapa.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/mapa.jpg",
    desc: "Proyecto de ayuda al estudio de Geografía de España orientado a alumnos de 1º ESO mediante la exploración visual.",
    tech: "Educación, Geografía",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 6,
    name: "GA-Explora Mundo",
    url: "https://descubremundo.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/gaexploraeuropa.jpg",
    desc: "Recurso educativo interactivo para el estudio de la Geografía del Mundo (1º ESO) con mecánicas de descubrimiento.",
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
    id: 20,
    name: "GA-QR",
    url: "https://crearqr.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/QR/QR.png",
    desc: "Crea y personaliza códigos QR profesionales. Genera vCards para compartir contactos directamente, diseña tarjetas de presentación visuales, añade logotipos, marcos personalizados y exporta códigos en masa a documentos Word.",
    tech: "QR",
    category: ProjectCategory.TECHNICAL
  },
  {
    id: 21,
    name: "Ga-ExploraCiudad",
    url: "https://exploraciudad.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/exploraciudad/exploraciudad.jpg",
    desc: "GA-ExploraCiudad se ejecuta íntegramente en el navegador, garantizando la privacidad al persistir los datos y configuraciones únicamente en el localStorage del usuario. Su núcleo interactivo se basa en la librería Leaflet, ofreciendo múltiples capas cartográficas (OpenStreetMap, Esri, Catastro y PNOA Histórico del IGN) sobre las cuales se visualizan Puntos de Interés (POIs) que pueden ser creados manualmente o importados/exportados dinámicamente vía CSV. A nivel funcional, la aplicación integra geolocalización avanzada con modo manual para dispositivos sin GPS, cálculo de rutas peatonales y vehiculares conectándose a servidores OSRM (leaflet-routing-machine)  y enlaces dinámicos a Google Street View, logrando una herramienta turística completa y rápida sin necesidad de una base de datos backend propia.  ",
    tech: "Mapas Exploración",
    category: ProjectCategory.TECHNICAL
  } ,{
    id: 19,
    name: "Ga-Gen Key",
    url: "https://generadorkey.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/genkey/keygen.jpg",
    desc: "permite generar claves secretas JWT (HS256, HS384, HS512) de forma 100% local y privada mediante el uso de la API criptográfica nativa del navegador (window.crypto)",
    tech: ",Privacy",
    category: ProjectCategory.TECHNICAL
  },  {
    id: 14,
    name: "Ga-Archivos",
    url: "https://controlarchivos.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/controlarchivos/controlarchivos.jpg",
    desc: "Aplicación web para la gestión y renombrado masivo de archivos. Funciona completamente en local garantizando privacidad total. Permite filtrar por nombre, fecha o tamaño y aplicar cambios masivos.",
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
    url: "https://testexamen.vercel.app/", 
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/correccionexamenes.jpg",
    desc: "Sistema integral de corrección de exámenes tipo test. Versión libre: https://demotestdesarrollo.vercel.app  .Gestión de baremos complejos y generación de PDFs.",
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
  },
  {
    id: 5,
    name: "Turismo en Almodóvar del Campo",
    url: "https://turismoalmodovar.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/turismo/cabecera.jpg",
    desc: "Esta aplicación es una guía turística interactiva (para la gestión avanzada de mapas y capas espaciales), diseñada bajo una arquitectura de datos dinámicos cuyo motor principal es un único archivo CSV externo. A nivel técnico, el sistema lee y procesa este documento en tiempo real para generar automáticamente toda la interfaz y sus funcionalidades: desde la ubicación de los marcadores y el trazado de rutas GPS, hasta la creación de categorías, textos descriptivos, carruseles de imágenes y enlaces. Esta estructura centralizada funciona como un gestor de contenidos (CMS) no-code, permitiendo que cualquier persona pueda administrar, actualizar y escalar el 100% del contenido de la plataforma de forma remota simplemente editando una hoja de cálculo, reflejándose los cambios al instante en la aplicación sin necesidad de tocar el código fuente ni realizar nuevos despliegues técnicos.",
    tech: "Guía Digital",
    category: ProjectCategory.EDUCATIONAL
  }
];
