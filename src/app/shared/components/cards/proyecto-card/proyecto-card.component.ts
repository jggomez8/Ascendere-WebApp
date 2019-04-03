import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';

// TODO: rename componet
@Component({
  selector: 'indev-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.scss']
})
export class ProyectoCardComponent {
  constructor(private _route: ActivatedRoute) {}

  @Input() proyecto: Proyecto;

  get showType() {
    return this._route.component === HomeComponent;
  }
}
