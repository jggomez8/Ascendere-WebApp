import { firestore } from 'firebase';

export class Encuentro {
  public id: any;
  public creator: string;
  public created: firestore.Timestamp;
  public editor: string;
  public edited: firestore.Timestamp;
  public description: string;
  public img: string;
  public name: string;
  public _postulations: firestore.Timestamp;
  public guests: Guest[];
  public banner: string;
  public participation: string;

  private _date: firestore.Timestamp;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.description = args['description'];
    this.img = args['img'];
    this.name = args['name'];
    this._date = args['date'];
    this._postulations = args['postulations'];
    this.banner = args['banner'];
    this.participation = args['participation'];

    this.guests = [];
    args['guests'].forEach(el => {
      this.guests.push(new Guest(el));
    });
  }

  // TODO: fix this
  get content() {
    let text = this.banner
      ? `
    [![${this.altImage}](${this.banner})](${this.img})

    ${this.description}
    `
      : this.description;

    if (!!this.participation)
      text = `
    ${text}

    **Participa:** ${this.participation}
    `;

    return text;
  }

  get postulations() {
    return !!this._postulations ? new Date(this._postulations.seconds * 1000) : null;
  }

  get canInscribe() {
    if (!this._postulations) return false;

    const temp = new Date();
    const todayDate = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate());
    return this.postulations >= todayDate;
  }

  get hasGuests() {
    return this.guests.length > 0;
  }

  get altImage() {
    return `Banner encuentro: ${this.name}`;
  }

  get date() {
    return new Date(this._date.seconds * 1000);
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
