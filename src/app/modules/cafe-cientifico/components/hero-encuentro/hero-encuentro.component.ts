import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-hero-encuentro',
  templateUrl: './hero-encuentro.component.html',
  styleUrls: ['./hero-encuentro.component.scss']
})
export class HeroEncuentroComponent implements OnInit {
  encuentro = {
    img:
      'https://images.unsplash.com/photo-1550123309-3cf75e1d0c83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    nombre: 'Vision critica de la literatura ecuatoriana',
    invitados: ['Jorge Vazquez', 'Carlos Carrion', 'Norman Gonzalez'],
    fecha: new Date(2019, 2, 28),
    description: `
    Exposición crítica de la literatura ecuatoriana en el ámbito de la novela, del cuento, del ensayo y de la poesía por parte de expertos, académicos y escritores que conocen, escriben e investigan en el mundo de la creación literaria que ha producido el Ecuador con excelentes resultados estéticos y estilísticos.
    `
  };
  get altImage() {
    // TODO:
    return 'Hero Image';
  }

  constructor() {}

  ngOnInit() {}
}
