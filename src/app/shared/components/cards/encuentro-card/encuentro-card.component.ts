import { Component } from '@angular/core';

@Component({
  selector: 'indev-encuentro-card',
  templateUrl: './encuentro-card.component.html',
  styleUrls: ['./encuentro-card.component.scss']
})
export class EncuentroCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  backgroundImage = 'https://images.unsplash.com/photo-1551855042-d8251a1244b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80';
  fecha = new Date();
}
