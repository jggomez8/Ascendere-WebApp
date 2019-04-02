import { firestore } from 'firebase';

export class Noticia {
  id: any;
  creator: string;
  created: firestore.Timestamp;
  editor: string;
  edited: firestore.Timestamp;
  name: string;
  description: string;
  html: string;
  img: string;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.name = args['name'];
    this.description = args['description'];
    this.html = args['html'];
    this.img = args['img'];
  }

  get altImg() {
    return `Banner noticia: ${this.name}`;
  }

  get date() {
    return new Date(this.created.seconds * 1000);
  }
}
