
import React from 'react';

export interface Project {
  id: number;
  name: string;
  url: string;
  desc: string;
  tech: string;
  category: ProjectCategory;
  image?: string;
  observations?: string;
}

export enum ProjectCategory {
  TECHNICAL = "APLICACIONES DE GESTIÓN Y HERRAMIENTAS TÉCNICAS",
  EDUCATIONAL = "APLICACIONES EDUCATIVAS / GUÍAS DIGITALES",
  ENTERTAINMENT = "APLICACIONES DE ENTRETENIMIENTO"
}

export interface CategoryInfo {
  title: ProjectCategory;
  icon: React.ReactNode;
}
