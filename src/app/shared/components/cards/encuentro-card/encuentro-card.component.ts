import { Component } from '@angular/core';

@Component({
  selector: 'indev-encuentro-card',
  templateUrl: './encuentro-card.component.html',
  styleUrls: ['./encuentro-card.component.scss']
})
export class EncuentroCardComponent {
  title = 'Nombre Encuentro Prueba Esto es muy Largo';
  backgroundImage = 'http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg';
  fecha = new Date();
}
