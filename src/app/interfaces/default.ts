import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export interface DefaultInterface {
  creator?: string;
  created?: Timestamp | Date;
  editor?: string;
  edited: Timestamp | Date;
}
