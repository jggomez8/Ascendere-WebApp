export class Articulo {
  name: string;
  content: string;
  id: string;

  constructor(args) {
    this.id = args['id'];
    this.name = args['name'];
    this.content = args['content'];
  }
}
