import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/providers/services/user-role.service';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'indev-proyectos-innovacion-admin',
  templateUrl: './proyectos-innovacion-admin.component.html'
})
export class ProyectosInnovacionAdminComponent implements OnInit {
  constructor(private _role: UserRoleService, private _route: ActivatedRoute) {}

  isAdmin: boolean;
  proyectos: Proyecto[];

  ngOnInit() {
    this._role.isAdmin.subscribe(val => (this.isAdmin = val));
    this.proyectos = this._route.snapshot.data['proyectos'] as Proyecto[];
  }
}
