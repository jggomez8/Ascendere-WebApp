import { firestore } from 'firebase';

export class InnovaTip {
  id: any;
  addBy: string;
  publishedAt: firestore.Timestamp | string;
  description: string;
  name: string;

  constructor(args) {
    this.id = args['id'];
    this.addBy = args['addBy'];
    this.publishedAt = args['publishedAt'];
    this.description = args['description'];
    this.name = args['name'];
  }

  get img() {
    return `https://i.ytimg.com/vi/${this.id}/hqdefault.jpg`;
  }

  get altImg() {
    return `Imagen Video: ${this.id}`;
  }

  get videoSrc() {
    return `https://www.youtube.com/embed/${this.id}`;
  }

  get url() {
    return `https://youtu.be/${this.id}`;
  }

  get markdown() {
    return `
      <iframe
        src="${this.videoSrc}"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

    ${this.description}
    `;
  }
}
