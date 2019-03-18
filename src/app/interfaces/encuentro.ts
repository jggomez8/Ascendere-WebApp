import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

// types
import { DefaultInterface } from './default';
import { Guest } from './guests';

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
