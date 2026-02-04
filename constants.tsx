
import React from 'react';
import { Project, ProjectCategory } from './types';

export const Icons = {
  Gamepad: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>,
  Play: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5 5 2.5 5 2.5 5 4 10 1 2 2.5 0 1 0 0-1.5 1.5 0 0 0-2.5 0c-.8 0-1.6.2-2.3.6C12.7 1.3 11.4 1.3 10.7 2.1c-.7-.4-1.5-.6-2.3-.6-.6 0-1.5 0-2.5.5-3 1.5-1 4.5-1 4.5.28 1.15.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "¡No me des la lata!",
    url: "https://nomedeslalata.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/latas/01.png",
    desc: "Un resto de memoria visual súper divertido. ¿Podrás encontrar la secuencia correcta de latas?",
    tech: "Lógica, Memoria",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 2,
    name: "Cartas Españolas",
    url: "https://juegocartastradicional.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/deluxe/12-espadas.png",
    desc: "¡Tute, Cuatrola, Siete y Media y más! Todos los clásicos de la baraja española en un solo lugar.",
    tech: "Lógica de Juego, Tradición",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 3,
    name: "Edificio Navideño",
    url: "https://campoamor10.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/navidad.jpg",
    desc: "¡Una aventura mágica de Navidad! Mini-juegos temáticos y una épica batalla final.",
    tech: "Aventura, Narrativa",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 4,
    name: "Explora España",
    url: "https://exploramapa.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/mapa.jpg",
    desc: "Aprende Geografía de España.",
    tech: "Educación",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 5,
    name: "Hundir la Flota",
    url: "https://juego-barcos.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/barcos/barcos.jpg",
    desc: "El clásico combate naval con una interfaz moderna. ¡Prepara tus cañones y derrota al Ordenador!",
    tech: "Estrategia, Lógica",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 6,
    name: "Explora Europa",
    url: "https://gaexploraeuropa.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/gaexploraeuropa.jpg",
    desc: "Aprende Geografía de Europa de forma interactiva y divertida.",
    tech: "Geografía, Educativo",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 7,
    name: "Ahorcado Personalizable",
    url: "https://ahorcado-personalizable.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/proyectos/ahorcadopersonalizable.jpg",
    desc: "Adivina palabras con pistas inteligentes. Aprende nuevas definiciones mientras te diviertes.",
    tech: "Educativo, Pistas",
    category: ProjectCategory.EDUCATIONAL
  },
  {
    id: 8,
    name: "Residencia Maestro",
    url: "https://residenciamaestro.vercel.app/",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/RESIDENCIA/LOGO.png",
    desc: "Experiencia inmersiva de misterio y deducción en una residencia. Interroga personajes y busca pistas antes de que el asesino te alcance.",
    tech: "Misterio, Deducción, Bots",
    category: ProjectCategory.ENTERTAINMENT
  },
  {
    id: 9,
    name: "El Impostor",
    url: "#",
    image: "https://raw.githubusercontent.com/gabrielsantosgrillo-dot/JuegosCartas/main/impostor/inicio.jpg",
    desc: "Un emocionante juego de engaño y estrategia. ¿Serás capaz de descubrir quién miente? Próximamente.",
    tech: "Misterio, Estrategia",
    category: ProjectCategory.ENTERTAINMENT
  }
];
