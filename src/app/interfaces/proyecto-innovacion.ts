import { DefaultInterface } from './default';

export interface ProyectoInnovacion extends DefaultInterface {
  name: string; // titulo de la propuesta
  coordinator: string; // nombre cordinador
  modality: string; // modalidad
  participants: Participant[]; // participantes
  strategicLine: string; // linea estrategica
  type: string; // tipo de propuesta
  periods: Period[]; // periodo
  subject: string; // asignatura

  // other data
  img: string;
  infografic: string;
  videoID: string;
  documents: Document[];
  area: Area;
}

export interface Area {
  tecnica: boolean;
  administrativa: boolean;
  biologica: boolean;
  sociohumanistica: boolean;
}

export interface Participant {
  name: string; // nombre
  department: string; // carrera
  subject: string; // carrera
  mail: string; // carrera
}

export interface Period {
  name: string;
}
export interface Document {
  url: string;
}
