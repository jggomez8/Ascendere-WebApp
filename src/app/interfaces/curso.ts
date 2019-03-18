import { DefaultInterface } from './default';
import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export interface ProgramaFormacion {
  cursos: Curso[];
  bannerCursos: BannerCurso[];
}

export interface Curso extends DefaultInterface {
  id?: any;
  name: string;
  description: string;
  img: string;
  date: Timestamp;
  endDate: Timestamp;
  instructors: Instructor[];
  postulation: Postulation;
  duration: Duration;
  schedule: string;
  place: string;
  module: string;
  addressedTo: string;
  downloadableContent: DownloadableContent[];
}

export interface BannerCurso extends DefaultInterface {
  name: string;
  url: string;
}

export interface DownloadableContent {
  url: string;
}

export interface Instructor {
  name: string;
  about: string;
}

export interface Postulation {
  date: Date;
  link: string;
  message: string;
}

export interface Duration {
  hours?: number;
  days?: number;
  weeks?: number;
}
