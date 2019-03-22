import { firestore } from 'firebase';
import Timestamp = firestore.Timestamp;

export class Encuentro {
  public id: any;
  public creator: string;
  public created: firestore.Timestamp;
  public editor: string;
  public edited: firestore.Timestamp;
  public description: string;
  public img: string;
  public name: string;
  public date: Timestamp;
  public postulations: string;
  public guests: Guest[];
  public banner: string;
  public participation: string;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.description = args['description'];
    this.img = args['img'];
    this.name = args['name'];
    this.date = args['date'];
    this.postulations = args['postulations'];
    this.banner = args['banner'];
    this.participation = args['participation'];

    this.guests = [];
    args['guests'].forEach(el => {
      this.guests.push(new Guest(el));
    });
  }
}

export class Guest {
  description: string;
  name: string;

  constructor(args) {
    this.description = args['description'];
    this.name = args['name'];
  }
}
