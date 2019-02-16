import { Component } from '@angular/core';

@Component({
  selector: 'indev-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  heroImage = 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg';
  fecha = new Date();
  description =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iusto magnam culpa? Qui, quaerat reiciendis molestias beatae placeat fugit necessitatibus explicabo sequi omnis, odit et quam exercitationem? Voluptas, id ea.';
}
