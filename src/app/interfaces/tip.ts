import { firestore } from 'firebase';

export class Tip {
  id: any;
  creator: string;
  created: firestore.Timestamp;
  editor: string;
  edited: firestore.Timestamp;
  name: string;
  img: string;
  description: string;
  link: string;
  tag: string;

  constructor(args) {
    this.id = args['id'];
    this.creator = args['creator'];
    this.created = args['created'];
    this.editor = args['editor'];
    this.edited = args['edited'];
    this.name = args['name'];
    this.img = args['img'];
    this.description = args['description'];
    this.link = args['link'];
    this.tag = args['tag'];
  }
}
