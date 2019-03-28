import { firestore } from 'firebase';

export class Jornada {
  id: any;
  creator: string;
  created: firestore.Timestamp;
  editor: string;
  edited: firestore.Timestamp;
  date: firestore.Timestamp;
  description: string;
  name: string;
  periodo: string;

  private _html: string;
  private _content: string;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.description = args['description'];
    this._content = args['content'];
    this._html = args['html'];
    this.name = args['name'];
    this.periodo = args['periodo'];
    this.date = args['date'];
  }

  get content() {
    if (this._content === undefined && this._html !== undefined) return this._html;
    return this._content;
  }

  get fullContent() {
    return `
    ## ${this.name}
    #### Periodo: ${this.periodo}

    ${this.content}
    `;
  }
}
