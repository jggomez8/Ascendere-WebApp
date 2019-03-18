import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

// types
import { DefaultInterface } from './default';

export interface Encuentro extends DefaultInterface {
  description: string;
  img: string;
  name: string;
  date: Timestamp;
  postulations: string;
  guests: Guest[];
  banner: string;
  participation: string;
}

export interface Guest {
  description: string;
  name: string;
}
