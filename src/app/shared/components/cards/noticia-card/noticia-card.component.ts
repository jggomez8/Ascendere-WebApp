import { Component } from '@angular/core';

@Component({
  selector: 'indev-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  heroImage =
    'https://images.unsplash.com/photo-1551855042-d8251a1244b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80';
  fecha = new Date();
  description =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iusto magnam culpa? Qui, quaerat reiciendis molestias beatae placeat fugit necessitatibus explicabo sequi omnis, odit et quam exercitationem? Voluptas, id ea.';
}
