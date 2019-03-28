export class Articulo {
  name: string;
  content: string;
  source: string;

  constructor(args) {
    this.name = args['name'];
    this.content = args['content'];
    this.source = args['source'];
  }

  get hasContent() {
    return this.content !== undefined;
  }
}
